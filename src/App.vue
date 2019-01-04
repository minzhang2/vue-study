<template>
  <div id="app">
  	<div v-if="flag">
  		<span>1</span>
  		<span>2</span>
  	</div>
  	<ul v-else>
  		<li>1</li>
  		<li>2</li>
  	</ul>
  	<button @click="toggle">toggle</button>
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',
	data() {
		return {
			flag: true
		}
	},
	methods: {
		toggle() {
			this.flag = !this.flag;
		},
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
