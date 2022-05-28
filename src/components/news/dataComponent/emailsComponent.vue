<template>
   <div class="row">
            <div class="col-sm-4" v-for="data in getData" :key="data.id">
            <div class="card card_hover">
            <div class="d-flex px-3">
            <img src="../img/men.jpeg" class="avatar my-2" alt="ERROR">
            <h5 class="card-header my-3">{{data.email}}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">{{data.body}}</p>
              <button class="btn btn-primary">Replay Email</button>
            </div>
          </div>
          </div>
  </div>
</template>

<script>
export default {
    computed : {
        getData(){
          return this.$store.getters['Emails/GET_DATA']
        }  
    } ,
    mounted(){
        return this.$store.dispatch('Emails/FETCH_DATA')
    }
}
</script>

<style>

</style>