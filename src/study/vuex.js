import Vue from 'vue'
import Vuex, { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

Vue.use(Vuex);

Vue.directive('focus', {
	bind() {
	},
    inserted(el) {
        el.focus();
	},
	update() {
		debugger
	},
	componentUpdated() {
		debugger
	},
	unbind() {
		debugger
	}
})

Vue.directive('longTap', {
	bind(el, binding) {
		const event = document.createEvent('HTMLEvents');
		event.initEvent('longTap', true, true);
	
		let timeout;
		el.addEventListener('mousedown', function() {
			timeout = setTimeout(() => {
				el.dispatchEvent(event);
			}, 300);
		}, false);
		el.addEventListener('mouseup', function() {
			clearTimeout(timeout);
		}, false);
		el.addEventListener('longTap', function(ev) {
			if(binding.expression) {
				binding.value(ev);
			}
		}, false);
	},
	unbind() {
		el.removeEventListener('longTap', function() {
			debugger
		}, false);
	}
});

const store = new Vuex.Store({
	state: {
		n: 0
	},
	mutations: {
		add(state, payload) {
			state.n += payload;
		},
	},
	getters: {
		display(state) {
			return `n: ${state.n}`
		}
	},
	actions: {
		async getAsyncData({ commit }) {
			const p = function() {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(10)
					}, 1000);
				})
			}
			debugger
			const data = await p();
			commit('add', data)
		}
	},
	modules: {
		a: {
			state: {
				n: 1,
			},
			mutations: {
				add(state, payload) {
					state.n++;
				}
			},
			getters: {
				display1(state) {
					return `n: ${state.n}`
				}
			}
		},
		b: {
			state: {
				n: 2,
			},
			mutations: {
				add(state, payload) {
					state.n++;
				}
			},
			getters: {
				display2(state) {
					return `n: ${state.n}`
				}
			}
		}
	}
});

const App = {
	data() {
		return {
			num: 0
		}
	},
	template: `<div>
					<input v-focus />
					<button @click="add(num)">num+n</button></br>
					<button @click="sum">num++</button></br>
					<button @click="addAndSum">num+n</button></br>
					<button @click="getAsyncData">getAsyncData</button></br>
					<button @click="getAsyncData1">getAsyncData1</button></br>
					<p>n:{{n}}</p>
					<p>num:{{num}}</p>
					<p>display:{{display}}</p>
					<p v-longTap="long">22222222</p>
				</div>`,
	computed: {
		...mapState([
			'n'
		]),
		...mapGetters([
			'display'
		])
	},
	methods: {
		...mapMutations([
			'add'
		]),
		...mapActions([
			'getAsyncData'
		]),
		sum() {
			this.num++;
		},
		addAndSum() {
			this.num++;
			this.$store.commit('add', this.num)
		},
		getAsyncData1() {
			this.$store.dispatch('getAsyncData')
		},
		long() {
			debugger
		}
	}
}

window.store = store;
window.Vue = Vue

new Vue({
 el: '#app',
	render: h => h(App),
	store
})

Vue.nextTick(function() {
	console.log('nextTick run')
})
