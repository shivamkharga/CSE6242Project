<template>
  <v-main id="network" class="text-center pt-10">
    <h3>Top 5 recommmended recipes</h3>
    <network
      :node-list="nodes"
      :link-list="links"
      @clickNode="nodeClick"
    ></network>
  </v-main>
</template>

<script>
import Network from 'vue-network-d3'

export default {
  name: 'NetworkGraph',
  components: { Network },

  data() {
    return {
      nodes: [
        { id: 'Myriel', group: 1 },
        { id: 'Napoleon', group: 1 },
        { id: 'Labarre', group: 2 },
        { id: 'Valjean', group: 2 },
      ],
      links: [
        { source: 'Napoleon', target: 'Myriel', value: 1 },
        { source: 'Valjean', target: 'Labarre', value: 1 },
        { source: 'Napoleon', target: 'Valjean', value: 2 },
      ],
    }
  },
  methods: {
    nodeClick(event, node) {
      alert(`id: hello`)
      console.log(event, node)
    },
  },
}
</script>

<style scoped>
#network {
  background-color: aquamarine;
  width: 50%;
}
</style>
