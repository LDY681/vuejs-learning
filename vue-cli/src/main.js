import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
Vue.component('app-servers', Home);
new Vue({
  el: '#app',
  //take this place <div id="app"> but don't infer a template
  //instead overwrite <div id="app"> with the code we render here
  render: h => h(App) 
})
