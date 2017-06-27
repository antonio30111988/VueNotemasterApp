<template>
	<div id="app" class="col-md-4">
		<h3>See Jokes?</h3>
		<button class="btn btn-primary" @click="initJokes">Add ten jokes</button>
		<button class="btn btn-success" @click="addJoke">Add joke</button>
		<br>
		<span v-for="(type,index) in types">
			<input 
				type="checkbox"
				v-model="checkTypes" 
				:value="type" 
				checked 
			/>
			<label>{{type}}</label>&nbsp;
		</span>
		<br>
		<div class="col-md-12">
			<Joke v-for="(joke,index) in $store.state.jokes"
				key="index"
				v-show="checkTypes.includes(joke.type)"
				:index="index"
				:joke="joke"
			/> 
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import Joke from './components/Joke.vue'

	export default{
		data(){
			return {
				types: ['general','knock-knock','programming'],
				checkTypes: ['general','knock-knock','programming']
			}
		},
		methods:mapActions([
			'initJokes',
			'addJoke',
		]),
		components:{
			Joke
		}
		
	}
</script>