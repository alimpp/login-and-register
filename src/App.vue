<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>

export default {
     watch : {
         $route(){
           this.$store.commit('Login/ON_START')
         }
     } ,
     mounted(){
         this.$store.commit('Login/ON_START')
     }
}
</script>

<style>

</style>