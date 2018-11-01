// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import VueResource from 'vue-resource'
import main from '@/components/main'
import VApp from 'vuetify'

 
Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyBypij38Oyrqzbyshe6ZNk5HN5jhBtylZE",
    authDomain: "monproject-ebefe.firebaseapp.com",
    databaseURL: "https://monproject-ebefe.firebaseio.com",
    projectId: "monproject-ebefe",
    storageBucket: "monproject-ebefe.appspot.com",
  	})

  }
})
