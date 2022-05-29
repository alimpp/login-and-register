<template>
  <router-view></router-view>
</template>

<script>

export default {
     mounted(){
       return this.$router.push('/login')
     }
}
</script>

<style>

</style>