<template>
	<div class="">
		{{items}}
	</div>
</template>

<script>
import axios from 'axios';
	export default {
		data(){
			return {
				type: this.$route.params.type,
				items:[]
			}
		},
		watch:{
			'$route': 'fetchItems'
		},
		methods:{
			fetchItems(){
				//this.type=this.$route.params.type			
				this.items=[]
				let initial_ids=[3,8,24]

				for(let i in initial_ids){ 
					let id=initial_ids[i]	
					console.log('id',id)
					axios.get('http://swapi.co/api/'+this.type+'/'+id)
			.then(response => {
				console.log(response.data)
				this.items.push(response.data)
			})
			.catch(e => {
				console.log(e);
			})			
				}
			}
		},
		created(){
			this.fetchItems()
		}
	}
</script>

<style>
</style>