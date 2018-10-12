import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = {
	template: '<div><p>Layout</p><router-view></router-view></div>',
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter');
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
		next(vm => {
			// 通过 `vm` 访问组件实例
		})
  },
  beforeRouteUpdate (to, from, next) {
		console.log('beforeRouteUpdate');
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
		next()
  },
  beforeRouteLeave (to, from, next) {
		console.log('beforeRouteLeave');
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
		next()
  }
}

const Index = {
	template: '<div>index</div>',
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter');
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
		next(vm => {
			// 通过 `vm` 访问组件实例
		})
  },
  beforeRouteUpdate (to, from, next) {
		console.log('beforeRouteUpdate');
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
		next()
  },
  beforeRouteLeave (to, from, next) {
		console.log('beforeRouteLeave');
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
		next()
  }
}

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { 
	template: '<div>foo</div>',
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter');
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
		next(vm => {
			// 通过 `vm` 访问组件实例
		})
  },
  beforeRouteUpdate (to, from, next) {
		console.log('beforeRouteUpdate');
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
		next()
  },
  beforeRouteLeave (to, from, next) {
		console.log('beforeRouteLeave');
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
		next()
  }
}
const Bar = { 
	template: '<div>bar</div>',
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter');
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
		next(vm => {
			// 通过 `vm` 访问组件实例
		})
  },
  beforeRouteUpdate (to, from, next) {
		console.log('beforeRouteUpdate');
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
		next()
  },
  beforeRouteLeave (to, from, next) {
		console.log('beforeRouteLeave');
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
		next()
  }
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ 
		path: '/', 
		component: Layout, 
		children: [
			{ path: '', component: Index },
			{ path: '/foo', component: Foo },
  		{ path: '/bar', component: Bar, name: 'bar' },
		]
	}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
	
})

router.beforeEach((ro, from, next) => {
	console.log('beforeEach');
	next();
})

router.beforeResolve((ro, from, next) => {
	console.log('beforeResolve');
	next();
})

router.afterEach((ro, from, next) => {
	console.log('afterEach');
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  el: '#app',
	template: '<div id="app">' +
						'<h1>Hello App!</h1>' +
						'<p>' +
							'<router-link :to="{ path: \'foo\', query: { a: 22, b: 33} }">Go to Foo</router-link>' +
							'<router-link :to="{ name: \'bar\', params: { dd: 22, dgg: 235} }">Go to Bar</router-link>' +
						'</p>' +
						'<router-view></router-view>' +
					  '</div>',
//  render(h) {
//    return h(App)
//  },
  router
})