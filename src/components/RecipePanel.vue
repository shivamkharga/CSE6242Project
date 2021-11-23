<template>
  <v-main id="recipeContainer" class="pt-5 pl-2">
    <v-card v-if="id != null" id="recipePanel" elevation="3" class="pb-4">
      <v-card-title
        v-if="recipeName != ''"
        class="justify-center lime lighten-1 text-capitalize white--text"
        >{{ recipeName }}</v-card-title
      >
      <v-card-title
        v-else
        class="justify-center lime lighten-1 text-capitalize red--text"
        >Sorry, try another recipe</v-card-title
      >
      <v-card-title class="justify-center">Cook Time</v-card-title>
      <v-card-text class="text-center black--text text-subtitle-1 pb-0">
        {{ formatCookTime(cookTime) }}
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

    <v-card v-else id="recipePanel" elevation="3" class="pb-4">
      <v-card-title
        class="justify-center lime lighten-1 text-capitalize white--text"
        >Recipe Panel</v-card-title
      >
      <v-card-text class="text-capitalize pt-16">
        Select a node in the network diagram to view recipe details
      </v-card-text>
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
    id: null,
    recipeName: '',
    cookTime: 0,
    description: '',
    ingredients: [],
  }),
  watch: {
    recipeId: function () {
      this.updateRecipePanel()
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
    formatCookTime(minutes) {
      let minuteformat = minutes % 60 > 1 ? 'minutes' : 'minutes'
      if (minutes < 10) return '0' + minutes
      else if (minutes == 60) return `${minutes / 60} hour`
      else if (minutes > 60) {
        if (minutes % 60 == 0) return `${Math.floor(minutes / 60)} hours`
        else {
          return `${Math.floor(minutes / 60)} hours ${
            minutes % 60
          } ${minuteformat}`
        }
      } else return `${minutes} minutes`
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
