<template>
  <v-main>
    <h3>Hello from the recipe panel</h3>
  </v-main>
</template>
<script>
export default {
  name: 'RecipePanel',
  data: () => ({
    name: 'food',
    steps: ['step 1', 'step 2'],
  }),
}
</script>
