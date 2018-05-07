<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Workout/Routine
        <b-link href="#/">Home</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :labels-cols="4"
                      breakpoint="md"
                      label="Enter Workout Name">
          <b-form-input id="name" :state="state" v-model.trim="workout.name"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Total Sets">
          <b-form-input id="sets" :state="state" v.model.trim="workout.sets"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Reps per Set">
          <b-form-input id="reps" :state="state" v.model.trim="workout.reps"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Lift Weight">
          <b-form-input id="weight" :state="state" v.model.trim="workout.weight"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter PR (personal record) for this lift">
          <b-form-input id="personal_record" :state="state" v.model.trim="workout.personal_record"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateRoutine',
  data () {
    return {
      workout: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/workout`, this.workout)
        .then(response => {
          this.$router.push({
            name: 'ShowRoutine',
            params: {id: response.data._id}
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

</style>
