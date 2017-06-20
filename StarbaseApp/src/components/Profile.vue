<template>
	<div class="col-md-4" @click="switchProfile">
		<div class="character-card" >
			<div class="card-block" >
				<h4 class="card-title">{{profile.name}}</h4>
				<p class="card-text">Height: {{profile.height}} cm</p>
				<p class="card-text">Mass: {{profile.mass}} kg</p>
				<p class="card-text">Hair color: {{profile.hair_color}} </p>
				p class="card-text">Eye color: {{profile.eye_color}} </p>
			</div> 
		</div>
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