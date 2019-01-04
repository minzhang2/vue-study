// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
//import router from './router'
//import './study/event';
//import './study/compiler';
//import './study/v-model';
//import './study/directive';
import './study/route';
// import './study/vuex';
// import './study/initState';
// import './study/asyncComponent';
// import './study/directive';


Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

//Vue.component('LoadingComponent', {
//	template: '<div>loading</div>'
//});
//
//Vue.component('ErrorComponent', {
//	template: '<div>error</div>'
//});
//
//const AsyncComponent = () => ({
//  // 需要加载的组件 (应该是一个 `Promise` 对象)
//  component: import('./App'),
//  // 异步组件加载时使用的组件
//  loading: '<LoadingComponent />',
//  // 加载失败时使用的组件
//  error: '<ErrorComponent />',
//  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//  delay: 200000,
//  // 如果提供了超时时间且组件加载也超时了，
//  // 则使用加载失败时使用的组件。默认值是：`Infinity`
//  timeout: 3000
//})

//Vue.component('App', AsyncComponent)
//Vue.component('App', resolve => {
//	setTimeout(() => {
//		resolve({
//      template: '<div>I am async!</div>'
//    })
//	}, 1000)
//})
// Vue.component('App', {
//   props: {
//     message: String
//   },
//   template: '<div>{{message}}</div>'
// });

// window.Vue = Vue
// /* eslint-disable no-new */
// window.vm1 = new Vue({
//   el: '#app',
//   data: {
//     info: {
//       name: 'jay'
//     },
//     id: 'aaa',
//     message: 'init data',
//     list: [1, 2, 3, 4, 5],
//     show: true
//   },
//   //  router,
//   //  components: { App },
//   //	render: h => h(App)
//   template: '<div id="id" :data-id="info.name" @click="handler"><span v-if="show">{{message}}</span><App :message="id" /><span v-for="(item, index) in list">{{item}}:<{{index}}</span></div>',
//   methods: {
//     handler() {
//       this.message = 'hello world'
//     }
//   }
// })
