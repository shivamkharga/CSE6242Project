<template>
  <v-main id="network" class="text-center pt-8">
    <h3 class="mb-2">User-Recipe Network</h3>
    <div id="recipeNameContainer" class="white--text my-0">
      <p class="my-1">Recipe</p>
      <p v-if="recipeName != ''" class="my-0 pb-1 text-capitalize">
        {{ recipeName }}
      </p>
      <p v-else class="my-0 pb-1">Hover over a node to get the recipe name</p>
    </div>
    <network
      :node-list="nodes"
      :link-list="links"
      :svg-size="SVGSize"
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

export default {
  name: 'NetworkGraph',
  components: { Network },
  props: {
    userId: { type: Number, default: 13, required: true },
  },
  data() {
    return {
      nodes: [],
      links: [],
      recipeName: '',
      overlay: false,
      SVGSize: {},
    }
  },
  watch: {
    userId: function () {
      this.updateNetworkData()
    },
  },
  mounted() {
    this.populateRecipeNetwork()
    this.setSVGSize()
  },
  created() {
    window.addEventListener('resize', this.setSVGSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSVGSize)
  },
  methods: {
    nodeSelected(e, node) {
      if (node.index != 0) this.$emit('selectedNode', node.id)
    },
    async updateNetworkData() {
      this.populateRecipeNetwork()
    },
    displayRecipeName(e, node) {
      if (node.index != 0)
        axios
          .get(`http://localhost/api/recipe/getName/${node.id}`)
          .then((response) => {
            this.recipeName = response.data.name
          })
          .catch(() => console.error('error loading recipe name'))
    },
    populateRecipeNetwork() {
      this.overlay = true
      axios
        .get(`http://localhost/api/users/${this.userId}`)
        .then((response) => {
          this.links = response.data.links
          this.nodes = response.data.nodes
        })
        .catch((e) => alert(e))
        .finally(() => {
          this.overlay = false
        })
    },
    // eslint-disable-next-line no-unused-vars
    setSVGSize(e) {
      this.SVGSize = {
        height: window.innerHeight * 0.6,
        width: window.innerWidth * 0.58,
      }
    },
  },
}
</script>

<style scoped>
#network {
  width: 60%;
}
#recipeNameContainer {
  background-color: #1e1e1e;
}
</style>
