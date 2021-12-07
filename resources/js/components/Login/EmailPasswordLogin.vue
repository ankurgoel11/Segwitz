<template>
    <div>
        <div class="col-md-12 mb-20">
                <div class="form-group">
                <div class="extr_textbox5 t1-left">
                    <label>Email</label>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-envelope"></i></span>
                    </div>
                    <input type="email" v-model="email" class="form-control" placeholder="Email" @focus="displayError = false" >
                </div> <!-- input-group.// -->
            </div> <!-- form-group// -->
            <div class="form-group">
                <div class="extr_textbox5 t1-left">
                    <label>Password</label>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                    </div>
                    <input type="password" v-model="password" class="form-control" placeholder="Password" @focus="displayError = false" />
                </div> <!-- input-group.// -->
            </div> <!-- form-group// -->
            <div class="form-group">
                <button type="submit" @click="loginwithemailpassword()" class="btn btn-primary btn-block col-md-12"> Login  </button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
        loginwithemailpassword(){
    		let vm = this;
    		let param = {email:this.email,password:this.password};
    		axios.post('api/loginwithemailpassword',param)
				.then(response=>vm.parent().processResponse(response.data))
				.catch(error=>console.log(error));
    	},
    }
}
</script>