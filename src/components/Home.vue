<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Routine List
        <b-link href="#/CreateRoutine">Add Workout</b-link>
      </h2>
      <b-table striped hover :items="workouts" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      fields: {
        name: {label: 'Name', sortable: true, 'class': 'text-center'},
        actions: {label: 'Action', 'class': 'text-center'}
      },
      workouts: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/workout`)
      .then(response => {
        this.workouts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details (workouts) {
      this.$router.push({
        name: 'ShowRoutine',
        params: {id: workouts._id}
      })
    }
  }
}
</script>

<style scoped>

</style>
