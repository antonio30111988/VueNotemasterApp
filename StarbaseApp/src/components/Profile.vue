<template>
	<div class="" @click="switchProfile">
		{{profile}}
	</div>
</template>

<script>
import axios from 'axios';
export default {
	props:['id'],
	data(){
		return {
			profile:{}, 
		}
	},
	methods:{
		getProfiles(id){
			axios.get('http://swapi.co/api/people/'+id)
			.then(response => {
				this.profile=response.data
			})
			.catch(e => {
				console.log(e);
			})
		},
		switchProfile(){
			//random id from 0.33
			let random_id=Math.floor(Math.random() * 83)+1 
			this.getProfiles(random_id)
		} 
	},
	created(){
		this.getProfiles(this.id)
	}
}
</script>