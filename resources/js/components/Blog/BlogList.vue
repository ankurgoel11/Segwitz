<template>
<div>
    <div class="col-md-12">
        <h5 class="text-center"> List </h5>
        <div class="row">
            <div class="col-md-6 card" style="margin: auto;">
                <div class="row">
                    <div class="col-md-6">
                        <label><b> Title </b></label>
                    </div>
                    <div class="col-md-6"> 
                        {{savedata.title}}        
                    </div>
                    <div class="col-md-6">
                        <label><b> Body </b></label>
                    </div>
                    <div class="col-md-6"> 
                        {{savedata.body}}        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    components: {
	  },
    data(){
		return {
           
		}
	},
    mounted() {
        
	}, 
    computed:{
       
        ...mapGetters([
			'savedata','viewno'
		]),
    },
    methods:{
        
    }
}
</script>