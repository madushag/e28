<template>
	<div id="recipe-create">
		<h1>Add a recipe</h1>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<div>
					<label for="id">Recipe ID</label>
					<b-form-input
						id="id"
						:state="!$v.recipe.id.$error"
						v-model="$v.recipe.id.$model"
					></b-form-input>
					<div v-if="$v.recipe.id.$error">
						<div class="form-feedback-error" v-if="!$v.recipe.id.required">
							Recipe ID is required.
						</div>
						<div class="form-feedback-error" v-else-if="!$v.recipe.id.minLength">
							Recipe ID must be at least 4 characters long.
						</div>
					</div>
				</div>

				<div>
					<label for="name">Name</label>
					<b-form-input
						id="name"
						:state="!$v.recipe.name.$error"
						v-model="$v.recipe.name.$model"
					></b-form-input>
					<div v-if="$v.recipe.name.$error">
						<div class="form-feedback-error" v-if="!$v.recipe.name.required">
							Recipe name is required.
						</div>
					</div>
				</div>

				<div>
					<label for="description">Description</label>
					<b-form-input
						id="description"
						:state="!$v.recipe.description.$error"
						v-model="$v.recipe.description.$model"
					></b-form-input>
					<div v-if="$v.recipe.description.$error">
						<div class="form-feedback-error" v-if="!$v.recipe.description.required">
							Recipe description is required.
						</div>
					</div>
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
								hover
								small
								head-variant="light"
								:items="recipe.ingredients"
								:fields="fields"
								primary-key="recipe.ingredients.name"
							>
								<!-- <template v-slot:cell(index)="row">
								{{ row.index }}
							</template> -->
								<template v-slot:cell(name)="row">
									<b-form-input v-model="row.item.name" />
								</template>
								<template v-slot:cell(amount)="row">
									<b-form-input v-model="row.item.amount" />
								</template>
								<template v-slot:cell(unit)="row">
									<b-form-input v-model="row.item.unit" />
								</template>
								<template v-slot:cell(action)="row">
									<b-button-group>
										<b-button size="sm" @click="addNewIngredient">
											<img
												id="add"
												alt="add new"
												class="icon"
												src="./../../assets/images/add.png"
											/>
										</b-button>
										<!-- <b-button size="sm" @click="saveIngredient">
										<img id="save" alt="save" class="icon" src="./../../assets/images/save.png" />
									</b-button> -->
										<b-button size="sm" @click="deleteIngredient(row.index)">
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
							<!-- {{ items }} -->
						</div>
					</div>

					<b-button-group>
						<b-button size="sm" variant="outline-primary" type="button" @click="editIngredients"
							>Edit</b-button
						>
						<b-button size="sm" variant="outline-primary" type="button" @click="saveIngredients"
							>Save</b-button
						>
					</b-button-group>
				</section>
			</div>

			<br />
			<b-button
				:data-test-new-receipe-id="recipe.id"
				size="lg"
				variant="outline-primary"
				type="submit"
				>Save New Recipe
			</b-button>

			<div class="form-feedback-error" v-if="formHasErrors">
				Please correct the above errors
			</div>
		</form>
	</div>
</template>

<script>
	import * as app from "./../../app.js";
	import { required, minLength } from "vuelidate/lib/validators";

	let recipe = {};
	if (process.env.NODE_ENV == "development") {
		recipe = {
			id: "this-is-a-test-recipe",
			name: "This is a test recipe",
			description: "This is a test description.",
			image: "./../assets/images/placeholder.png",
			ingredients: [
				{
					name: "salt",
					amount: "1",
					unit: "cup"
				}
			],
			step: [
				{
					description: "Mix all ingredients together."
				}
			]
		};
	} else {
		recipe = {};
	}

	export default {
		name: "AddNewRecipePage",
		data: function() {
			return {
				recipe: recipe,
				formHasErrors: false,
				isAddingNewIngredient: false,
				fields: ["name", "amount", "unit", "action"]
			};
		},
		validations: {
			recipe: {
				id: {
					required,
					minLength: minLength(4)
					// ,
					// doesNotExist(value) {
					// 	return !this.$store.getters.getProductBySlug(value);
					// }
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
			"$v.$anyError": function() {
				this.formHasErrors = this.$v.$anyError;
			}
		},
		methods: {
			show: function(msg) {
				alert(msg);
			},
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
			saveIngredient: function() {
				this.isAddingNewIngredient = false;
			},
			deleteIngredient: function(index) {
				recipe.ingredients.splice(index, 1);
			},
			handleSubmit: function() {
				if (!this.formHasErrors) {
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
	#description {
		height: 80px;
	}

	.icon {
		width: 20px;
		height: 20px;
	}
</style>
