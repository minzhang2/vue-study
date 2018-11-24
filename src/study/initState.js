import Vue from 'vue'

Vue.component('list', {
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    }
  },
  template: '<div><span v-for="item in list">{{item}}</span></div>'
});

const app = new Vue({
  el: '#app',
  data: {
    n: 1,
    num: 2,
    list: [1, 2]
  },
  computed: {
    disN() {
        return this.n;
    },
    disNum() {
        return this.num;
    }
  },
  template: '<div @click="handler">{{n}}{{disN}}<list :list="list"/></div>',
  methods: {
    handler() {
      this.n++;
    }
  },
  watch: {
    n: {
      handler() {
        if(this.n > 3) {
            this.n = 1;
        }
      },
      deep: true,
      immediate: true,
    }
  }
})

window.Vue = Vue;
window.app = app;
