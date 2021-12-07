<template>
<div>
    <div v-if="viewno == 1">
        <div class="col-md-12 text-center " >
            <h4>Blog</h4>
        </div>
        <div class="col-md-12 " >
            <div class="row">
                <div class="col-md-6" style="margin: auto;">
                    <div class="row">
                        <div class="col-md-6 ">
                            <h5>Title</h5>
                        </div>
                        <div class="col-md-6 ">
                            <input type="text" class="form-control"  placeholder="Title" v-model="title">
                        </div>
                        <div class="col-md-6 " style="margin-top: 10px;">
                            <h5>Body</h5>
                        </div>
                        <div class="col-md-6 " style="margin-top: 10px;">
                            <input type="text" class="form-control"  placeholder="Body" v-model="body">
                        </div>
                        <div class="col-md-2" style="margin: auto;margin-top: 10px;">
                            <button class="btn btn-primary " @click="save()"> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="viewno==2">
        <blog-list></blog-list>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import BlogList from './BlogList.vue';
export default {
    components: {
		  BlogList
	  },
    data(){
		return {
            title:'',
            body:''
           
		}
	},
    computed:{
       
        ...mapGetters([
			'savedata','viewno'
		]),
    },
    methods:{
        save(){
            let param = {title:this.title, body:this.body}
            this.$store.commit('assignsavedata',param)
            this.$store.commit('assignviewno',2)
            console.log("savedata",this.savedata)
        }
    }
}
</script>