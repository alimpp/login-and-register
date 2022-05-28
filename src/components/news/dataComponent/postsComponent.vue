<template>
  <div class="row">
            <div class="col-sm-4" v-for="data in getData" :key="data.id">
            <div class="card w-75 card_hover">
            <div class="card-body">
                <div class="d-flex">
                    <img src="../img/woman-avatar.jpeg" class="avatar my-2" alt="ERROR">
                    <p class="text_20 px-2 pt-3">Alexa Doe</p>
                </div>
                <h5 class="card-title">{{data.title}}</h5>
                <p class="card-text">{{data.body}}</p>
                <div class="d-flex">
                    <i class="bi bi-heart text_20 mx-2 my-2"></i>
                    <i class="bi bi-chat text_20 mx-2 my-2"></i>
                    <i class="bi bi-share text_20 mx-2 my-2"></i>
                </div>
            </div>
            </div>
            </div>
  </div>
</template>

<script>
export default {
    computed : {
        getData(){
            return this.$store.getters['Posts/GET_DATA']
        }
    } ,
    mounted(){
        return this.$store.dispatch('Posts/FETCH_DATA')
    } , 
}
</script>

<style>

</style>