import Vue from 'vue'

Vue.directive('focus', {
    inserted(el) {
        el.focus();
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

const App = {
	data() {
		return {
		}
	},
	template: `<div>
					<input v-focus />
					<p v-longTap="long">22222222</p>
				</div>`,
	methods: {
		long() {
			debugger
		}
	}
}

window.Vue = Vue

new Vue({
    el: '#app',
	render: h => h(App),
})