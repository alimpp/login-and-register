<template>
  <div class="registerTemp">
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
         <p class="text_25">Register With News</p>
         <p class="text_18">Username</p>
         <input type="text" :class="{'input_error': inputErrorUsername}" class="form-control" v-model="username">
         <p class="text_18">Password</p>
         <input type="text" :class="{'input_error': inputErrorPassword}" class="form-control" v-model="password">
         <div class="d-flex">
         <button class="btn btn-primary mt-2" @click="register">Register</button>
        <router-link to="/login" class="btn btn-warning mt-2 mx-2" >Login</router-link>
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
        username : "" , inputErrorUsername : false , 
        password : "" , inputErrorPassword : false ,
      }
    } , 
    methods : {
      register(){
          let accses = true
          if(this.username.length < 5){
            accses = false
            this.inputErrorUsername = true
              Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'The Username must be longer than 5 characters',
                showConfirmButton: false,
               timerProgressBar : true , 
                toast : true , 
                timer: 4000
               })
          }else{this.inputErrorUsername = false}

          if(this.password.length < 8){
            accses = false
            this.inputErrorPassword = true 
              Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'The Password must be longer than 8 characters',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
               })
          }else{this.inputErrorPassword = false} 

          if(accses){
            axios.post(`https://django-app-template.alihassani.repl.co/apiv1/register/` , {username : this.username , password : this.password})
            .then( response => {
               console.log(response)
               this.$router.push('/login')
            })
            .catch(console.log("ERROR"))
          }
          
      }
    }
}
</script> 

<style scoped >
.registerTemp{
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