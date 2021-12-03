<template>
  <div class="d-flex flex-row py-2 box">
    <div id="top" class="d-flex justify-end align-center pr-16">
      <h3>Generated Recommendations for User #{{ filter }}</h3>
    </div>
    <div id="input" class="d-flex pr-10 pt-1 justify-center">
      <v-spacer />
      <v-text-field
        v-model.number="userId"
        required
        outlined
        :rules="[
          (v) => (v <= maxNumOfUsers && v >= 0) || 'Select ID from 0 to 11043',
        ]"
        label="Click here to begin filtering"
        background-color="#cce3de"
        placeholder="Enter a numeric user_id"
        autofocus
        persistent-hint
        :hint="`Max user_id: ${maxNumOfUsers}`"
        clearable
        @keyup.enter="pressedEnter"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  props: {
    filter: { type: Number, default: 13, required: true },
  },
  data() {
    return {
      userId: '',
      shouldValidate: false,
      maxNumOfUsers: 0,
    }
  },
  mounted() {
    axios
      .get(`/api/users`)
      .then((response) => {
        this.maxNumOfUsers = response.data.size
      })
      .catch((e) => alert(e))
      .finally(() => {
        this.overlay = false
      })
  },
  methods: {
    pressedEnter() {
      let u = parseInt(this.userId)
      if (!u.isNan && u >= 0 && u <= this.maxNumOfUsers) {
        this.$emit('filter-user', parseInt(this.userId))
      }
      this.userId = ''
    },
  },
}
</script>

<style scoped>
#top {
  flex-grow: 2;
}
#input {
  flex-grow: 1;
}
.box {
  background-color: #a4c3b2;
}
</style>
