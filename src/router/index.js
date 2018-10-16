import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Signin from '@/components/Signin'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Content: Home
      }
    },
    {
      path: '/Signin',
      name: 'Signin',
      components: {
        Signin: Signin
      }
    },
    {
      path: '/SignUp',
      name: 'SighUp',
      components: {
        SignUp: SignUp
      }
    }
  ]
})
