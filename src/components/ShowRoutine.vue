<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Workout/Routine
        <b-link href="#/">Home</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{workout.name}}
        </template>
        <template slot="lead">
          Sets: {[workout.sets}}
          Reps: {{workout.reps}}
          Weight(lbs) {{workout.weight}}
          Personal Record {{workout.personal_record}}
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{workout.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editworkout(workout._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteworkout(workout._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShowRoutine',
  data () {
    return {
      workout: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/workout/`, this.$route.params.id)
      .then(response => {
        this.workout = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    editworkout (workoutid) {
      this.$router.push({
        name: 'EditRoutine',
        params: {id: workoutid}
      })
    },
    deleteworkout (workoutid) {
      axios.delete(`http://localhost:3000/workout/` + workoutid)
        .then((result) => {
          this.$router.push({
            name: 'Home'
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
  .jumbotron {
    padding: 2rem;
  }

</style>
