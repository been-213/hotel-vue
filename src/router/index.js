import Vue from 'vue'
import Router from 'vue-router'

import cityHome from '@/page/cityHome'
import Signin from '@/page/Signin'
import SignUp from '@/page/SignUp'
import Home from '@/page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        Content: Home
      }
    },
    {
      path: '/cityhome',
      name: 'cityhome',
      components: {
        Content: cityHome
      }
    },
    {
      path: '/Signin',
      name: 'Signin',
      components: {
        Content: Signin
      }
    },
    {
      path: '/SignUp',
      name: 'SighUp',
      components: {
        Content: SignUp
      }
    }
  ]
})
