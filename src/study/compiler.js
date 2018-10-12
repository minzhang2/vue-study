import Vue from 'vue'

new Vue({
  el: '#app',
	data: {
		id: 'aaa',
		message: 'init data',
		list: [1,2,3,4,5],
		show: true
	},
//  router,
//  components: { App },
//	render: h => h(App)
  template: '<div :id=id data-id="222" @click="handler" class="sss sssd" :class="{aa: true}" style="color: red"><span v-if="show">{{message}}</span><span v-for="(item, index) in list">{{item}}:<{{index}}</span><span>3333<i>2222</i></span></div>',
	methods: {
		handler() {
			this.message = 'hello world'
		}
	}
})