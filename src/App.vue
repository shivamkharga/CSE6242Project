<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <main>
        <h2>Recipe Recommendation</h2>
      </main>

      <v-spacer />
    </v-app-bar>

    <v-main>
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

<style scoped>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
