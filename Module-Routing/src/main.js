import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';  //const has to be wrapped in {}

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  //keep in mind we need to set up the server so that it will return index.html in all circumstances
  //and let our local application do the routing
  mode: 'history', 
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
