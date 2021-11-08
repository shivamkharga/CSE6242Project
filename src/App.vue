<template>
  <v-app>
    <v-app-bar app dark>
      <main class="d-flex flex-row">
        <v-icon large class="mr-4"> mdi-silverware </v-icon>
        <h2>Procratinators: Food Recipe Recommendation App</h2>
      </main>

      <v-spacer />
    </v-app-bar>

    <v-main class="amber lighten-5">
      <LandingPage />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: { LandingPage },
}
</script>
