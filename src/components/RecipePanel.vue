<template>
  <v-main id="recipeContainer" class="pt-5 pl-2">
    <v-card id="recipePanel" elevation="3" class="pb-4">
      <v-card-title
        class="justify-center lime lighten-1 text-capitalize white--text"
        >{{ recipeName }}</v-card-title
      >
      <v-card-title class="justify-center">Cook Time</v-card-title>
      <v-card-text class="text-center black--text text-subtitle-1 pb-0">
        {{ cookTime }} minutes
      </v-card-text>
      <v-card-title>Description</v-card-title>
      <v-card-text v-if="description !== ''">
        {{ capitalizeFirstLetter(description) }}
      </v-card-text>
      <v-card-text v-else>
        Sorry we did our best but no description was provied for this recipe :(
      </v-card-text>
      <v-card-title>Ingredients</v-card-title>
      <v-card-text v-if="ingredients.length !== 0" class="text-capitalize">
        {{ ingredients.join(', ') }}
      </v-card-text>
      <v-card-text v-else>
        Sorry we did our best but no ingredients were provied for this recipe :(
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn elevation="2" color="lime lighten-1"> GO TO RECIPE </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>
<script>
import { RECIPE_DATA } from '../js/DUMMY_DATA'

export default {
  name: 'RecipePanel',
  props: {
    recipeId: { type: Number, default: 0, required: true },
  },
  data: () => ({
    id: RECIPE_DATA[0].id,
    recipeName: 'arriba  baked winter squash mexican style',
    cookTime: 30,
    description:
      'autumn is my favorite time of year to cook! this recipe can be prepared either spicy or sweet, your choice!two of my posted mexican-inspired seasoning mix recipes are offered as suggestions.',
    ingredients: [
      'winter squash',
      'mexican seasoning',
      'mixed spice',
      'honey',
      'butter',
      'olive oil',
      'salt',
    ],
  }),
  watch: {
    recipeId: function (newVal, oldVal) {
      this.updateRecipePanel()
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    updateRecipePanel() {
      let data = RECIPE_DATA.filter((data) => data.id == this.recipeId)
      this.id = data[0].id
      this.recipeName = data[0].recipeName
      this.description = data[0].description
      this.ingredients = data[0].ingredients
      this.cookTime = data[0].cookTime
    },
  },
}
</script>
<style scoped>
#recipeContainer {
  background-color: #e1c340;
  width: 50%;
}
#recipePanel {
  width: 65%;
  height: 99%;
}
</style>
