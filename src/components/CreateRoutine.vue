<template>
  <div id="createWO">
    <b-container fluid>
        <h2>
          Add New Workout
        </h2>
        <b-form @submit="onSubmit">

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="6"
                        breakpoint="sm"
                        label="Enter Workout Name">
            <b-form-input id="name" :state="state" placeholder="Name" v-model.trim="workout.name"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="6"
                        breakpoint="md"
                        label="Enter Total Number of Sets">
            <b-form-input id="sets" :state="state" placeholder="Sets" v-model.trim="workout.sets"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="6"
                        breakpoint="md"
                        label="Enter Reps per Set">
            <b-form-input id="reps" :state="state" placeholder="Reps" v-model.trim="workout.reps"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="6"
                        breakpoint="md"
                        label="Enter Weight">
            <b-form-input id="weight" :state="state" placeholder="Weight (lbs)" v-model.trim="workout.weight"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="6"
                        breakpoint="md"
                        label="Enter PR (Personal Record)">
            <b-form-input id="personal_record" :state="state" placeholder="1 Rep Max" v-model.trim="workout.personal_record"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
    </b-container>
  </div>
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
  #createWO {
    margin-top: 60px;
  }
</style>
