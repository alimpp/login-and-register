<template>
  <div class="sidebar bg-primary ">
  <img src="./img/woman-avatar.jpeg" class="avatar_profile" alt="ERROR"/>
  <p class="text_25 light_color py-1" >Alexa Doe</p>
     <div class="d-flex">
           <i class="bi bi-instagram light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-linkedin light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-twitter light_color mx-2" style="font-size:25px;"></i>
          <i class="bi bi-facebook light_color mx-2" style="font-size:25px;"></i>
    </div>
   <div class="d-flex mt-2">
    <i class="bi bi-house-door pt-2 text_18 light_color "></i><router-link to="/" class="nav-link light_color text_18">Home</router-link>
   </div>
    <div class="d-flex">
    <i class="bi bi-newspaper pt-2 text_18 light_color"></i><router-link to="/news" class="nav-link light_color text_18">News</router-link>
    </div>
    <button class="btn btn-danger mt-5" @click="logOut"> <i class="bi bi-box-arrow-left px-1"></i>Log Out</button>
  </div> 
</template>

<script>
export default {
    methods : {
         logOut(){
           this.$store.commit('Login/LOGOUT')
           this.$router.push('/login')
         }
    }
}
</script>

<style scoped >
.sidebar{
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 30px 30px 0px;
}
.router-link-active{
  border-bottom: 1px solid #fafafa;
}
</style>