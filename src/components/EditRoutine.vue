<template>
  <div id="editWO">
    <b-row>
      <b-col cols="12">

        <h2>
          Edit Workout
        </h2>

        <!-- link to return to previous page-->
        <p>
          No changes this week?
          <router-link :to="{ name: 'ShowRoutine', params: { id: workout._id} }">(Return to previous page)</router-link>
        </p>

        <!--form to edit and update workout -->
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Workout Name">
            <b-form-input id="name" :state="state" v-model.trim="workout.name"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Total Sets">
            <b-form-input id="sets" :state="state" v-model.trim="workout.sets"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Reps per Set">
            <b-form-input id="reps" :state="state" v-model.trim="workout.reps"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Lift Weight">
            <b-form-input id="weight" :state="state" v-model.trim="workout.weight"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter PR (personal record) for this lift">
            <b-form-input id="personal_record" :state="state" v-model.trim="workout.personal_record"></b-form-input>
          </b-form-group>

          <!-- update button-->
          <b-button type="submit" variant="primary">Update</b-button>

        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// script to update workout
import axios from 'axios'

export default {
  name: 'EditRoutine',
  data () {
    return {
      workout: {}
    }
  },
  created () {
    axios.get(`http://localhost:3000/workout/` + this.$route.params.id)
      .then(response => {
        this.workout = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  // once update button is clicked, updates workout
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/workout/` + this.$route.params.id, this.workout)
        .then(response => {
          this.$router.push({
            name: 'ShowRoutine',
            params: { id: this.$route.params.id }
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
  #editWO {
    margin-top: 60px;
    font-weight: 400;
    font-size: large;
  }
</style>
