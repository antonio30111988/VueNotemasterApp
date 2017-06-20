<template>
	<div id="app">
		<h3>{{title}}</h3>
		<div class="col-md-12"
			<Profile 
				v-for="(id, index) in ids"
					:id="id" 
					key="index"
			/> 
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Profile from './components/Profile.vue';

export default {
	name:'app',
	data(){
		return {
			title:"Generate Your Team",
			ids: [1,7,15]
		}
	},
	components:{
		Profile
	} 
}

</script>