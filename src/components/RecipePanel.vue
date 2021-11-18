<template>
  <v-main id="recipeContainer" class="pt-8 pl-2">
    <v-card id="recipePanel" elevation="3" class="pb-4">
      <v-card-title
        class="justify-center lime lighten-1 text-capitalize white--text"
        >{{ recipeName }}</v-card-title
      >
      <v-card-title class="justify-center">Cook Time</v-card-title>
      <v-card-text class="text-center black--text text-subtitle-1 pb-0">
        30 minutes
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
export default {
  name: 'RecipePanel',
  data: () => ({
    id: 137739,
    recipeName: 'arriba  baked winter squash mexican style',
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
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
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
