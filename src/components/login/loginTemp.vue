<template>
  <div class="loginTemp">
     <div class="textBox">
         <div class="glass p-5">
         <p class="text_25 opacityAnim light_color">Welcome To MY Website</p>
         <p class="text_18 opacityAnim light_color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas ad maxime architecto ipsam expedita omnis harum consequuntur earum eveniet, culpa possimus doloribus reiciendis quam dolorum magnam provident natus in</p>
           <div class="d-flex opacityAnim">
           <i class="bi bi-instagram light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-linkedin light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-twitter light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-facebook light_color mx-2" style="font-size:25px;"></i>
          </div>
         </div>
     </div>
     <div class="formBox p-4 opacityAnim">
         <p class="text_25">Login With News</p>

         <p class="text_18">Email</p>
         <input type="text" :class="{'input_error': inputErrorEmail}" class="form-control" v-model="email">
         <p class="danger_color text_13 mt-2" v-if="inputErrorEmail">{{emailTextError}}</p>

         <p class="text_18">Password</p>
         <input type="password" :class="{'input_error': inputErrorPassword}" class="form-control" v-model="password">
         <p class="danger_color text_13 mt-2" v-if="inputErrorPassword">{{passwordTextError}}</p>

         <div class="d-flex">
         <button class="btn btn-primary mt-2" @click="login">Login in</button>
         <div class="d-flex mt-3 mx-2">
         <router-link to="/register">Do you have account ?</router-link>
         </div>
         </div>

     </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    data(){
      return{
        email : "" , inputErrorEmail : false ,  emailTextError : "Email is Required...!" ,
        password : "" , inputErrorPassword : false , passwordTextError : "Password is Required...!"
      }
    } , 
    computed : {
      
    } ,
    methods : {
      login(){
        let accses = true
        if(this.email.length < 8){
          accses = false
          this.inputErrorEmail = true
        }else{this.inputErrorEmail = false}

        if(this.password.length < 8){
          accses = false
          this.inputErrorPassword = true 
        }else{this.inputErrorPassword = false} 

           if(accses){
            axios.post(`https://api.freerealapi.com/auth/login/` , {email : this.email , password : this.password})
            .then( response => {
                Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login is Done',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
                })
              this.$store.commit('Login/LOGIN' , response.data.token)
              this.$router.push('/')
            })
            .catch(
                 // need alert for user
            )
           }

      }
    }
}
</script> 

<style scoped >
.loginTemp{
  width: 100%;
  height: 100vh;
  display: flex;
}
.textBox{
  width: 60%;
  height: 100vh;
  background: url(./paradise.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.formBox{
   width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input_error{
  border: 1px solid #FF1818;
}
@media (max-width: 800px) {
  .textBox{display: none;}
  .formBox{width: 100%;}
}
</style>