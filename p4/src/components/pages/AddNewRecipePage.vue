<template>
	<div id="recipe-create">
		<h1>Add a recipe</h1>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="id">Recipe ID</label>
				<b-form-input
					id="id"
					data-test-id="recipe-id"
					v-model="$v.recipe.id.$model"
					:state="this.idErrorState"
					autofocus
				></b-form-input>
				<div v-if="$v.recipe.id.$error">
					<div class="form-feedback-error" v-if="!$v.recipe.id.required">
						Recipe ID is required.
					</div>
					<div class="form-feedback-error" v-if="!$v.recipe.id.minLength">
						Recipe ID must be at least 4 characters long.
					</div>
					<div class="form-feedback-error" v-if="!$v.recipe.id.doesNotExist">
						Recipe ID already exists.
					</div>
				</div>
				<small class="form-help">Required field</small>
			</div>

			<div class="form-group">
				<label for="name">Name</label>
				<b-form-input
					id="name"
					data-test-id="recipe-name"
					:state="this.nameErrorState"
					v-model="$v.recipe.name.$model"
				></b-form-input>
				<div v-if="$v.recipe.name.$error">
					<div class="form-feedback-error" v-if="!$v.recipe.name.required">
						Recipe name is required.
					</div>
				</div>
				<small class="form-help">Required field</small>
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<b-form-input
					id="description"
					data-test-id="recipe-description"
					:state="this.descErrorState"
					v-model="$v.recipe.description.$model"
				></b-form-input>
				<div v-if="$v.recipe.description.$error">
					<div class="form-feedback-error" v-if="!$v.recipe.description.required">
						Recipe description is required.
					</div>
				</div>
				<small class="form-help">Required field</small>
			</div>

			<section id="section-ingredients">
				<div>
					<label for="ingredients">Ingredients</label>

					<b-table
						v-if="!isAddingNewIngredient"
						hover
						small
						head-variant="light"
						:items="recipe.ingredients"
						primary-key="recipe.ingredients.name"
					></b-table>
				</div>
				<div v-if="isAddingNewIngredient">
					<div>
						<b-table
							data-test-id="ingredients-table"
							hover
							small
							head-variant="light"
							:items="recipe.ingredients"
							:fields="ingredientsFields"
							primary-key="recipe.ingredients.name"
						>
							<template v-slot:cell(name)="row">
								<b-form-input data-test-id="ingredient-name-column" v-model="row.item.name" />
							</template>
							<template v-slot:cell(amount)="row">
								<b-form-input data-test-id="ingredient-amount-column" v-model="row.item.amount" />
							</template>
							<template v-slot:cell(unit)="row">
								<b-form-input data-test-id="ingredient-unit-column" v-model="row.item.unit" />
							</template>
							<template v-slot:cell(action)="row">
								<b-button-group>
									<b-button
										data-test-id="add-new-ingredient-button"
										size="sm"
										@click="addNewIngredient"
									>
										<img id="add" alt="add new" class="icon" src="./../../assets/images/add.png" />
									</b-button>

									<b-button
										data-test-id="delete-ingredient-button"
										size="sm"
										@click="deleteIngredient(row.index)"
									>
										<img
											id="delete"
											alt="delete"
											class="icon"
											src="./../../assets/images/delete.png"
										/>
									</b-button>
								</b-button-group>
							</template>
						</b-table>
					</div>
				</div>

				<b-button-group>
					<b-button
						data-test-id="edit-ingredients-button"
						size="sm"
						variant="outline-primary"
						type="button"
						@click="editIngredients"
						>Edit</b-button
					>
					<b-button
						data-test-id="save-ingredients-button"
						size="sm"
						variant="outline-primary"
						type="button"
						@click="saveIngredients"
						>Save</b-button
					>
				</b-button-group>
			</section>

			<section id="section-steps">
				<div>
					<label for="steps">Steps</label>

					<b-table
						v-if="!isAddingNewStep"
						hover
						small
						head-variant="light"
						:items="recipe.steps"
						primary-key="recipe.steps.description"
					></b-table>
				</div>
				<div v-if="isAddingNewStep">
					<div>
						<b-table
							hover
							small
							head-variant="light"
							:items="recipe.steps"
							:fields="stepsFields"
							primary-key="recipe.steps.description"
						>
							<template v-slot:cell(description)="row">
								<b-form-input
									data-test-id="step-description-column"
									v-model="row.item.description"
								/>
							</template>
							<template v-slot:cell(action)="row">
								<b-button-group>
									<b-button data-test-id="add-new-step-button" size="sm" @click="addNewStep">
										<img id="add" alt="add new" class="icon" src="./../../assets/images/add.png" />
									</b-button>

									<b-button size="sm" @click="deleteStep(row.index)">
										<img
											id="delete"
											alt="delete"
											class="icon"
											src="./../../assets/images/delete.png"
										/>
									</b-button>
								</b-button-group>
							</template>
						</b-table>
					</div>
				</div>

				<b-button-group>
					<b-button
						data-test-id="edit-steps-button"
						size="sm"
						variant="outline-primary"
						type="button"
						@click="editSteps"
						>Edit</b-button
					>
					<b-button
						data-test-id="save-steps-button"
						size="sm"
						variant="outline-primary"
						type="button"
						@click="saveSteps"
						>Save</b-button
					>
				</b-button-group>
			</section>

			<br />

			<div class="form-feedback-error" v-if="formHasErrors">
				Please correct the above errors
			</div>

			<b-button
				data-test-id="save-new-recipe-button"
				:disabled="!this.formIsDirty"
				size="lg"
				variant="outline-primary"
				type="submit"
				>Save New Recipe
			</b-button>
		</form>
	</div>
</template>

<script>
	import * as app from "./../../app.js";
	import { required, minLength } from "vuelidate/lib/validators";

	let recipe = {
		id: "",
		name: "",
		description: "",
		image: "",
		ingredients: [
			{
				name: "",
				amount: "",
				unit: ""
			}
		],
		steps: [{ description: "" }]
		// steps: ""
	};
	export default {
		name: "AddNewRecipePage",
		data: function() {
			return {
				recipe: recipe,
				formHasErrors: false,
				formIsDirty: false,
				isAddingNewIngredient: false,
				isAddingNewStep: false,
				ingredientsFields: ["name", "amount", "unit", "action"],
				stepsFields: ["description", "action"],

				idErrorState: null,
				nameErrorState: null,
				descErrorState: null,
				stepsErrorState: null
			};
		},
		validations: {
			recipe: {
				id: {
					required,
					minLength: minLength(4),
					doesNotExist(value) {
						return !this.$store.getters.getRecipeById(value);
					}
				},
				name: {
					required
				},
				description: {
					required
				}
			}
		},
		watch: {
			"$v.$anyDirty": function() {
				this.formIsDirty = this.$v.$anyDirty;
			},
			"$v.recipe.id.$error": function() {
				if (this.$v.recipe.id.$dirty) {
					this.idErrorState = !this.$v.recipe.id.$error;
				} else {
					this.idErrorState = null;
				}
			},
			"$v.recipe.name.$error": function() {
				if (this.$v.recipe.name.$dirty) {
					this.nameErrorState = !this.$v.recipe.name.$error;
				} else {
					this.nameErrorState = null;
				}
			},
			"$v.recipe.name.$dirty": function() {
				if (this.$v.recipe.name.$dirty) {
					this.nameErrorState = !this.$v.recipe.name.$error;
				} else {
					this.nameErrorState = null;
				}
			},
			"$v.recipe.description.$error": function() {
				if (this.$v.recipe.description.$dirty) {
					this.descErrorState = !this.$v.recipe.description.$error;
				} else {
					this.descErrorState = null;
				}
			},
			"$v.recipe.description.$dirty": function() {
				if (this.$v.recipe.description.$dirty) {
					this.descErrorState = !this.$v.recipe.description.$error;
				} else {
					this.descErrorState = null;
				}
			}
		},
		methods: {
			editIngredients: function() {
				this.isAddingNewIngredient = true;
			},
			saveIngredients: function() {
				this.isAddingNewIngredient = false;
			},
			addNewIngredient: function() {
				recipe.ingredients.push({
					name: "",
					amount: "",
					unit: ""
				});
			},
			deleteIngredient: function(index) {
				recipe.ingredients.splice(index, 1);
			},
			editSteps: function() {
				this.isAddingNewStep = true;
			},
			saveSteps: function() {
				this.isAddingNewStep = false;
			},
			addNewStep: function() {
				recipe.steps.push({
					description: ""
				});
			},
			deleteStep: function(index) {
				recipe.steps.splice(index, 1);
			},
			handleSubmit: function() {
				this.$v.$touch;
				this.formHasErrors = this.$v.$anyError;

				if (!this.$v.$invalid) {
					this.recipe.image = "placeholder";
					app.axios.post(app.config.api + "/recipes.json", this.recipe).then(response => {
						let key = response.data.name;
						this.$store.commit("addRecipe", {
							[key]: this.recipe
						});
					});

					this.$router.push({
						name: "recipe",
						params: { id: this.recipe.id }
					});
				}
			}
		}
	};
</script>

<style scoped>
	.icon {
		width: 20px;
		height: 20px;
	}
</style>
