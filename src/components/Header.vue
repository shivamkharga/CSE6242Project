<template>
  <div id="top" class="text-center d-flex justify-center align-center py-6">
    <h1>
      <v-text-field
        label="Insert User ID"
        placeholder="xxxxxx"
        filled
      ></v-text-field>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
#top {
  background-color: #4cd7d0;
}
</style>
