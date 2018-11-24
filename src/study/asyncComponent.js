import Vue from 'vue'

Vue.component('App', resolve => {
    setTimeout(() => {
        resolve({
            template: '<div>23425253</div>'
        })
    }, 2000)
})

var App = Vue.component('App')

const app = new Vue({
  el: '#app',
  render: h => h(App)
})

window.Vue = Vue;
window.app = app;
