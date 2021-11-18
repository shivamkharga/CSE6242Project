<template>
  <div class="mx-4">
    <Header />
    <div class="d-flex flex-row">
      <NetworkGraph />
      <RecipePanel />
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
}
</script>
