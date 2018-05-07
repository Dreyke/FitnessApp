import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateRoutine from '@/components/CreateRoutine'
import EditRoutine from '@/components/EditRoutine'
import ShowRoutine from '@/components/ShowRoutine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/CreateRoutine',
      name: 'CreateRoutine',
      component: CreateRoutine
    },
    {
      path: '/EditRoutine',
      name: 'EditRoutine',
      component: EditRoutine
    },
    {
      path: '/ShowRoutine',
      name: 'ShowRoutine',
      component: ShowRoutine
    }
  ]
})
