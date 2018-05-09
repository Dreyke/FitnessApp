<template>
  <div id="home">

    <!-- Home page shows all added workouts-->
    <b-row>
      <b-col cols="12">
        <h2>
          Full Workout List
        </h2>

        <p>
          This is a list of all your added workouts
        </p>

        <b-table striped hover :items="workouts" :fields="fields">
          <template slot="actions" scope="row">
            <b-btn size="md" @click.stop="details(row.item)">Details</b-btn>
          </template>
        </b-table>

        <ul v-if="errors && errors.length">
          <li v-for="error of errors" :key="error">
            {{error.message}}
          </li>
        </ul>

      </b-col>
    </b-row>
  </div>
</template>

<script>
// script that adds to fields, name and workout details
// user can sort their workouts by name, and click details to see metadata
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      fields: {
        name: {label: 'Name', sortable: true, 'class': 'text-center'},
        actions: {label: 'Workout Details', 'class': 'text-center'}
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
  #home {
  margin-top: 60px;
  font-weight: 400;
  font-size: large;
  }

</style>
