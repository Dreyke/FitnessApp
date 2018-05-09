<template>
  <v-toolbar fixed class="teal accent-3" dark>
    <v-toolbar-title class="mr-4">
      <router-link :to="{ path: '/' }">Home</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-title>
      <router-link :to="{ path: '/CreateRoutine' }">Create Workout</router-link>
    </v-toolbar-title>

  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
