import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import signin from '@/components/User/signin'
import signup from '@/components/User/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/signin',
      name: 'Signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup
    }
  ],
  mode:'history'
})
