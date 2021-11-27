<template>
  <v-main id="recipeContainer" class="pt-5 pl-2">
    <v-card v-if="id != null" id="recipePanel" elevation="3" class="pb-6">
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

      <v-card-title>Directions</v-card-title>
      <div v-if="steps != []" id="directions" ref="directionsContainer">
        <v-card-text
          v-for="(step, index) in steps"
          :key="step"
          class="text-capitalize py-1"
        >
          {{ `${index + 1}.  ${step}` }}
        </v-card-text>
      </div>
      <v-card-text v-else>
        No directions were provided for this recipe
      </v-card-text>
    </v-card>

    <v-card v-else id="recipePanel" elevation="3" class="pb-4">
      <v-card-title
        class="justify-center lime lighten-1 text-capitalize white--text"
        >Recipe Panel</v-card-title
      >
      <v-card-text class="pt-16 justify-center">
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
    steps: [],
    shouldShowFullText: false,
  }),
  watch: {
    recipeId: function () {
      this.updateRecipePanel()
      console.log(this.$refs)
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    updateRecipePanel() {
      RECIPE_DATA.forEach((data) => {
        if (data.id == this.recipeId) {
          this.id = data.id
          this.recipeName = data.recipeName
          this.description = data.description
          this.ingredients = data.ingredients
          this.cookTime = data.cookTime
          this.steps = data.steps
        }
      })
    },
    formatCookTime(minutes) {
      let d = Math.floor(minutes / 1440) // 60*24
      let h = Math.floor((minutes - d * 1440) / 60)
      let m = Math.round(minutes % 60)
      let minuteformat = m > 1 ? 'minutes' : 'minute'
      let hourformat = h > 1 ? 'hours' : 'hour'
      let dayformat = d > 1 ? 'days' : 'day'

      if (d > 0) {
        return `${d} ${dayformat} ${h} ${hourformat} ${m} ${minuteformat}`
      }

      if (minutes < 10) return '0' + minutes
      else if (minutes == 60) return `${minutes / 60} hour`
      else if (minutes > 60) {
        if (m == 0) return `${h} hours`
        else {
          return `${h} hours ${m} ${minuteformat}`
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
#directions {
  height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
