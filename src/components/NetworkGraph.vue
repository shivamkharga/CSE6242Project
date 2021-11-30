<template>
  <v-main id="network" class="text-center pt-8">
    <h3 class="mb-2">User-Recipe Network</h3>
    <div class="black white--text my-0">
      <p v-if="recipeName != ''" class="my-0 py-2">
        Recipe name: {{ recipeName }}
      </p>
      <p v-else class="my-0 py-2">Hover over a node to get the recipe name</p>
    </div>
    <network
      :node-list="nodes"
      :link-list="links"
      :svg-size="svgSize"
      @clickNode="nodeSelected"
      @hoverNode="displayRecipeName"
    />
    <v-overlay :opacity="0.6" :value="overlay">
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>
  </v-main>
</template>

<script>
import Network from 'vue-network-d3'
import axios from 'axios'
import { NETWORK_DATA } from '../js/DUMMY_DATA'

export default {
  name: 'NetworkGraph',
  components: { Network },
  props: {
    userId: { type: Number, default: 0, required: true },
  },
  data() {
    return {
      nodes: NETWORK_DATA[0].nodes,
      links: NETWORK_DATA[0].links,
      recipeName: '',
      overlay: true,
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
  watch: {
    userId: function () {
      this.updateNetorkData()
    },
  },
  mounted() {
    this.overlay = false
    axios
      .get('http://localhost/api/users/test')
      .then((response) => {
        alert(response.data.msg)
      })
      .catch(() =>
        console.error(
          'Failed to make api request http://localhost/api/users/test'
        )
      )
  },
  methods: {
    nodeSelected(e, node) {
      this.$emit('selectedNode', node.id)
    },
    updateNetorkData() {
      let data = NETWORK_DATA.filter((data) => data.user_id == this.userId)
      this.nodes = data[0].nodes
      this.links = data[0].links
    },
    displayRecipeName(e, node) {
      this.recipeName = node.id
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
