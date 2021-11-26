<template>
  <div class="d-flex flex-row py-2 box">
    <div id="top" class="d-flex justify-end align-center pr-16">
      <h3>
        Recommendations for user {{ uidInTitle == '' ? '0' : uidInTitle }}
      </h3>
    </div>
    <div id="input" class="d-flex pr-10">
      <v-spacer />
      <v-text-field
        v-model.number="userId"
        required
        :rules="[(v) => v <= 11043 || 'Select ID from 0 to 11043']"
        label="Insert User ID"
        placeholder="xxxxx"
        persistent-hint
        hint="Max: 11043"
        clearable
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
      shouldValidate: false,
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
