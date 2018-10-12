import Vue from 'vue'

new Vue({
  el: '#app',
  template: '<div>'
	+ '<p>Message is: {{ message }}</p>'
  + '<input v-model="message" placeholder="edit me">'
  + '</div>',
  data() {
    return {
      message: ''
    }
  }
})