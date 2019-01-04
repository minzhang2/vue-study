/**
 * vue响应式原理：vue通过observe监听对象，通过defineReactive监听对象的属性
 * vue能监听数组对象和Object，以及Object的属性，但是不能监听数组属性的修改
 * 例如：data: { list: [1, 2, 3] }，当修改vm.list[0] = 4不能进入set方法，
 * 原因是js的限制导致数组属性修改无法监听，但是数组可以通过调用vue封装的pop、
 * push、splice等方法实现对数组对象的监听，假如例子改为：
 * data: { list: [{a: 1}, {a: 2}, {a: 3}] }，会发现修改vm.list[0].a = 4
 * 是可以监听的，这得益于Object的监听，当a变化时进入的是a的set跟数组无关
 *
 */
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
        if (this.n > 3) {
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
