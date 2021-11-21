<template>
  <v-main id="network" class="text-center pt-8">
    <h3 class="mb-6">Top 5 recommmended recipes</h3>
    <network
      :node-list="nodes"
      :link-list="links"
      :svg-size="svgSize"
      @clickNode="nodeClick"
    />
  </v-main>
</template>

<script>
import Network from 'vue-network-d3'
import axios from 'axios'

export default {
  name: 'NetworkGraph',
  components: { Network },
  data() {
    return {
      nodes: [
        { id: 'User ID', group: 1 },
        { id: 'rec1', group: 2 },
        { id: 'rec2', group: 2 },
        { id: 'rec3', group: 2 },
        { id: 'rec4', group: 2 },
        { id: 'rec5', group: 2 },
        { id: 'rec11', group: 2 },
        { id: 'rec12', group: 2 },
        { id: 'rec13', group: 2 },
        { id: 'rec21', group: 2 },
        { id: 'rec22', group: 2 },
        { id: 'rec23', group: 2 },
        { id: 'rec31', group: 2 },
        { id: 'rec32', group: 2 },
        { id: 'rec33', group: 2 },
        { id: 'rec41', group: 2 },
        { id: 'rec42', group: 2 },
        { id: 'rec43', group: 2 },
        { id: 'rec51', group: 2 },
        { id: 'rec52', group: 2 },
        { id: 'rec53', group: 2 },
      ],
      links: [
        { source: 'User ID', target: 'rec1', value: 1 },
        { source: 'User ID', target: 'rec2', value: 1 },
        { source: 'User ID', target: 'rec3', value: 1 },
        { source: 'User ID', target: 'rec4', value: 1 },
        { source: 'User ID', target: 'rec5', value: 1 },
        { source: 'rec1', target: 'rec11', value: 2 },
        { source: 'rec1', target: 'rec12', value: 2 },
        { source: 'rec1', target: 'rec13', value: 2 },
        { source: 'rec2', target: 'rec21', value: 2 },
        { source: 'rec2', target: 'rec22', value: 2 },
        { source: 'rec2', target: 'rec23', value: 2 },
        { source: 'rec3', target: 'rec31', value: 2 },
        { source: 'rec3', target: 'rec32', value: 2 },
        { source: 'rec3', target: 'rec33', value: 2 },
        { source: 'rec4', target: 'rec41', value: 2 },
        { source: 'rec4', target: 'rec42', value: 2 },
        { source: 'rec4', target: 'rec43', value: 2 },
        { source: 'rec5', target: 'rec51', value: 2 },
        { source: 'rec5', target: 'rec52', value: 2 },
        { source: 'rec5', target: 'rec53', value: 2 },
      ],
    }
  },
  computed: {
    svgSize: function () {
      return {
        height: window.innerHeight * 0.6,
        width: window.innerWidth / 2 - 25,
      }
    },
  },
  mounted() {
    axios
      .get('http://localhost/api/users/test')
      .then((response) => {
        alert(response.data)
        console.log(response)
      })
      .catch(() => console.error('something is not right'))
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
  background-color: #a4e8e0;
  width: 50%;
}
</style>
