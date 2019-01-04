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


/**
 * 1.theme
 * .tab.theme1 {
 *
 * }
 * .tab.theme2 {
 * }
 * <div class="tab {{theme}}"></div>
 * 如果比较多的话直接在page上加theme
 * #theme1 {
 *
 * }
 * #theme2 {
 * }
 * <page id="theme"></page>
 *
 * 2.color
 * <div style="color: {{color}}"></div>
 *
 * 3.image
 * <image src="{{theme}}-name.png" />
 */
