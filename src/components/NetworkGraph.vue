<template>
  <v-main id="network" class="text-center pt-10">
    <h3>Recommmended Recipes Network</h3>
    <D3Network
      ref="net"
      :net-nodes="nodes"
      :net-links="links"
      :options="options"
      @node-click="nodeClick"
    />
  </v-main>
</template>

<script>
import D3Network from 'vue-d3-network'

export default {
  name: 'NetworkGraph',
  components: { D3Network },

  data() {
    return {
      nodes: [
        { id: 1 },
        { id: 2, name: 'Recipe 1', _color: '#F8EA8C' },
        { id: 3, name: 'Recipe 2' },
        { id: 4, name: 'Recipe 3' },
        { id: 5, name: 'Recipe 4' },
        { id: 6 },
        { id: 7, name: 'Recipe 5' },
        { id: 8, name: 'User ID' },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
      ],
      links: [
        { sid: 1, tid: 2 },
        { sid: 2, tid: 8, _color: '#008080' },
        { sid: 2, tid: 12 },
        { sid: 3, tid: 4 },
        { sid: 4, tid: 8, _color: '#008080' },
        { sid: 5, tid: 6 },
        { sid: 5, tid: 11 },
        { sid: 7, tid: 8, _color: '#008080' },
        { sid: 5, tid: 8, _color: '#008080' },
        { sid: 3, tid: 8, _color: '#008080' },
        { sid: 7, tid: 9 },
        { sid: 7, tid: 10 },
      ],
      options: {
        force: 3000,
        nodeSize: 30,
        nodeLabels: true,
        linkWidth: 5,
      },
    }
  },
  methods: {
    nodeClick(event, node) {
      alert(`id: ${node.id} \nname: ${node.name}`)
      console.log(event, node)
    },
  },
}
</script>

<style src="vue-d3-network/dist/vue-d3-network.css" />
<style scoped>
#network {
  background-color: #a4e8e0;
  width: 50%;
}
</style>
