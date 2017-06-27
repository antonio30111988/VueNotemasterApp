<template>
	<div id="app">
		<h3>Starbase Planets and Profiles World</h3>
		<h4>
			<router-link class="link" to="/data/people">Stars Profiles</router-link> | 
			<router-link class="link" to="/data/planets">Planets Galaxy</router-link>
		</h4>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
</style>