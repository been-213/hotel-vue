import Vue from 'vue'
import Router from 'vue-router'

import TheNav from '@/components/TheNav'
import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'
import ThePerson from '@/components/ThePerson'
import Signin from '@/components/Signin'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Forum: TheForum,
        SideBar: TheBillboard
      }
    },
    {
      path: '/tag',
      name: 'tag',
      components: {
        Nav: TheNav,
        Forum: TheForum
      }
    },
    {
      path: '/person',
      name: 'person',
      components: {
        Content: ThePerson
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
