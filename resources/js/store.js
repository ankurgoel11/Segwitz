import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
	  state: {
		loggedinuser:null,
		viewno:1, 
		savedata:'' 
	  },
	  mutations: {
		assignviewno(state,u){
			state.viewno = u;
		},		
		assignloggedinuser(state,u){
			state.loggedinuser = u;
		},
		assignsavedata(state, u){
			state.savedata = u;
		}
	  },
	  actions:{
		getloggedinuser({ commit }){
			axios.get('api/user/getloginuser')
				.then(response=>commit("assignloggedinuser",response.data))
				.catch(error=>console.log(error));
		},
		
	  },

	  getters: {
    	loggedinuser:state=>{
    		return state.loggedinuser;
    	},
		savedata:state=>{
			return state.savedata;
		},
		
		viewno: state => {
			return state.viewno;
	  	},
		
	}
});