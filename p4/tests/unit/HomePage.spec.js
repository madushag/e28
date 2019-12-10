import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomePage from '@/components/pages/HomePage.vue'

describe('HomePage.vue', () => {

  it('shows the home page', () => {

    const wrapper = shallowMount(HomePage, {

    })

    expect(wrapper.text()).to.include('The RecipeBook is your one-stop-shop for convenient online grocery shopping in the greater Boston area.');
  })
})
