<template>
	<div class="col-md-4" @click="switchItem">
		<div class="item-card">
			<div class="card-block">
				<h4 class="card-title">{{item.name}}</h4>
				<div v-for="(value,key,index) in item">
					<div v-if="index < 5" class="test">
						<strong>{{key}}</strong>:{{value}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		props: ['passedItem','type'],
		data(){
			return {
				item:{}
			}
		},
		methods:{
			switchItem(){
				//random id from 0.33
				let id=Math.floor(Math.random() * 63)+1 

				axios.get('http://swapi.co/api/'+this.type+'/'+id)
				.then(response => {
					console.log(response.data)
					this.item=response.data
				}) 
				.catch(e => {
					console.log(e);
				})			
			} 			
		},
		created(){
			this.item=this.passedItem
		}
	}
</script>
