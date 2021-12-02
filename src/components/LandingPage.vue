<template>
  <div class="mx-4">
    <Header :filter="filter" @filter-user="updateUserId($event)" />
    <div class="d-flex flex-row">
      <NetworkGraph
        :user-id="filter"
        @selectedNode="updateRecipePanel($event)"
      />
      <RecipePanel :recipe-id="selectedNode" />
    </div>
  </div>
</template>

<script>
import NetworkGraph from './NetworkGraph.vue'
import Header from './Header.vue'
import RecipePanel from './RecipePanel.vue'

export default {
  name: 'Home',
  components: {
    NetworkGraph,
    Header,
    RecipePanel,
  },
  data: () => ({
    filter: 13,
    selectedNode: 0,
  }),
  methods: {
    updateUserId(id) {
      this.filter = id
    },
    updateRecipePanel(recipeId) {
      this.selectedNode = Number(recipeId)
    },
  },
}
</script>
