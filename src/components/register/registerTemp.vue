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
         <p class="text_18">Email</p>
         <input type="email" class="form-control" v-model="email">
         <p class="text_18 danger_color" v-if="emailRequired">{{emailRequiredText}}</p>
         <p class="text_18">Password</p>
         <input type="" class="form-control" v-model="password">
        <p class="text_18 danger_color" v-if="passwordRequired">{{passwordRequiredText}}</p>
         <div class="d-flex">
         <button class="btn btn-primary mt-2" @click="register">Register</button>
         <router-link to="/login" class="btn btn-warning mt-2 mx-2">Login</router-link>
         <div class="d-flex" style="margin:18px 10px;">
         </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        email : "" , 
        password : "" , 
        confrimPassword : "" ,
        emailRequired : false ,
        emailRequiredText : "Email is Required" , 
        passwordRequired : false , 
        passwordRequiredText : "Password is Required" , 
      }
    } , 
    methods : {
      register(){
        if(this.email === "" && this.password === ""){
          this.emailRequired = true
          this.passwordRequired = true
        }else if(this.email === ""){
            this.emailRequired = true
        } else if(this.email.length < 5){ 
            this.emailRequired = true
        } else if(this.password === ""){
          this.passwordRequired = true
        } else if(this.password.length < 5){
          this.passwordRequired = true
        } else{
          this.emailRequired = false 
          this.passwordRequired = false 
          this.confrimPasswordRequired = false 
          this.$router.push("/news")
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
@media (max-width: 800px) {
  .textBox{display: none;}
  .formBox{width: 100%;}
}
</style>