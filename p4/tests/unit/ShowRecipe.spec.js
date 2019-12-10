import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowRecipe from '@/components/ShowRecipe.vue'

import { FavoritesStub } from './FavoritesStub';


describe('ShowRecipe.vue', () => {
  it('shows a recipe', () => {

    // Define a recipe we can test
    let recipe = {
      "description": "Easy and decadent!",
      "id": "grand-marnier-coffee-ice-cream",
      "image": "https://forkgasm.com/images/grand-marnier-ice-cream.jpg",
      "ingredients": [
        {
          "amount": "4",
          "name": "heavy cream",
          "unit": "cups"
        },
        {
          "amount": "1",
          "name": "icing sugar or substitite",
          "unit": "cup"
        },
        {
          "amount": "4",
          "name": "egg yolks"
        },
        {
          "amount": "0.25",
          "name": "Grand Marnier",
          "unit": "cup"
        },
        {
          "amount": "1",
          "name": "espresso",
          "unit": "shot"
        },
        {
          "amount": "1",
          "name": "vanilla extract",
          "unit": "tbsp"
        },
        {
          "name": "Cocoa nibs for garnish",
          "preparation": "(Optional)"
        }
      ],
      "name": "Grand Marnier & Coffee Ice Cream",
      "step": [
        {
          "description": "Beat the heavy cream with half of the icing sugar substitute (added slowly) until starting to get thick"
        },
        {
          "description": "Beat the egg yolks with the remaining half of the icing sugar substitute."
        },
        {
          "description": "Whisk the Grand Marnier, coffee, vanilla extract into the egg yolk mixture."
        },
        {
          "description": "Whisk the egg yolk mixture into the heavy cream mixture"
        },
        {
          "description": "Done! Add to your ice cream machine per manufacturer's instructions or freeze and stir every 30 minutes or so."
        }
      ],
      "tag": [
        "Dessert",
        "Ice Cream"
      ]
    }

    // let favorites = new app.Favorites();

    const wrapper = shallowMount(ShowRecipe, {
      propsData: {
        recipe: recipe,
        favorites: new FavoritesStub(),
        mode: 'not-main'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    // Assert our results
    expect(wrapper.text()).to.include(recipe.description)
    let foundRecipeLink = wrapper.find('[data-test="product-link"]').exists();
    expect(foundRecipeLink).to.equal(true);
  })
})
