<template>
  <div class="col-md-12">
  		<div class="row">
  			<div class="col-md-12">
        			<img alt="" src="images/logo.png" style="width: 14%;">
        	</div>
  			<div class="card mt-20 " v-show="viewno == 1" style="margin: auto;">
                    <div class="card-body">
                    	<div class="row">
                        	<div class="col-md-5">
                        		<div class="col-md-12 mt-30">
                        			<h5 class="topnav-text">Login</h5>
                        		</div>
                        		<div class="col-md-12">
                        			<div class="roundofflock">
                        				<i v-if="loginstus==0" class="fa fa-unlock-alt"></i>
                        				<i v-if="loginstus==1" class="fa fa-key"></i>
                        			</div>
                        			
                        		</div>
                        		<p class="text-success text-center extr_textbox4">
                        				Please sign in for secure access to account.
                        		</p>
                        	</div>
                        	<div class="col-md-1">
                        		<div class="loginreg"></div>
                        	</div>
                        	<div class="col-md-6">
							    
							    <email-password-login></email-password-login>
                                <div v-if="displayError">{{ message }}</div>
							    <div class="col-12">
							    	<div class="row">
								    	
								    	
								    	
								    	<div class="col-md-12 mt-20">
								    		<button @click="changeviewno(2)"  type="button" class="btn btn-block btn-outline-primary extr_textbox4">
								    		<i class="fa fa-envelope"></i>
								    		Register</button>
								    	</div>
								    </div>
							    </div>
							    
							</div>
						</div>
				</div>
   		</div>
    </div>
     <div v-if="viewno==2">
    	<register></register>

    </div>
    <div>
        
    </div>
  </div>
</template>

<script>

import Register from '../login/Register'
import EmailPasswordLogin from './EmailPasswordLogin.vue';
  export default {
	  components: {
		  Register,EmailPasswordLogin
	  },
    data(){
      return{
        phNo: '',
        email:'',
        appVerifier : '',
        otp : '',
        verifyotpdiv:false,
        resenddiv:false,
        logintogglestring:"Login with Password",
        otplogin:true,
        password:'',
        message:'',
        loginpop:1,
        displayError:false,
        loginstus:0,
        buttonstatus:1
      }
    },
    computed:{
    	viewno(){
    		return this.$store.state.viewno;
    	}
    },
    
    methods :{
    	changeviewno(t){
			this.$store.commit('assignviewno',2);
		},		
      processResponse(data){
    	  if(data.user!=null)
    		window.location.href=window.axios.defaults.baseURL+"/dashboard";
    	  else{
    		this.displayError=true;
    		this.message="Username/Password not correct";
    	  }
      },
      
    
    
  }
}

</script>
