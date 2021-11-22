<template>
  <div class="d-flex flex-row py-2 box">
    <div id="top" class="d-flex justify-end align-center pr-16">
      <h3>Recommendations for user {{ uidInTitle }}</h3>
    </div>
    <div id="input" class="d-flex pr-10">
      <v-spacer />
      <v-text-field
        v-model="userId"
        label="Insert User ID"
        placeholder="xxxxxx"
        persistent-hint
        hint="Max: 3000"
        @keyup.enter="pressedEnter"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userId: '',
      uidInTitle: '',
    }
  },
  methods: {
    pressedEnter() {
      this.$emit('filter-user', parseInt(this.userId))
      this.uidInTitle = this.userId
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
  background-color: #4cd7d0;
}
</style>
