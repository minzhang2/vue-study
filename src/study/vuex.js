import Vue from 'vue'
import Vuex, { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

Vue.use(Vuex);

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
							<button @click="add(num)">num+n</button></br>
							<button @click="sum">num++</button></br>
							<button @click="addAndSum">num+n</button></br>
							<button @click="getAsyncData">getAsyncData</button></br>
							<button @click="getAsyncData1">getAsyncData1</button></br>
							<p>n:{{n}}</p>
							<p>num:{{num}}</p>
							<p>display:{{display}}</p>
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