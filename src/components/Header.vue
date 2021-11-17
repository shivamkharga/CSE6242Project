<template>
  <div class="d-flex flex-row py-2 box">
    <div id="top" class="d-flex justify-end align-center pr-16">
      <h3>[Insert UUID]'s Recommendations</h3>
    </div>
    <div id="input" class="d-flex">
      <v-spacer />
      <v-text-field
        label="Filter by User ID"
        placeholder="xxxxxx"
        persistent-hint
        hint="Max: 3000"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
