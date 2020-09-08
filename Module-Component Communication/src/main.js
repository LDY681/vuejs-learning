import Vue from 'vue'
import App from './App.vue'

//Create an event bus object to listen to and handle event
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited',age);
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})

