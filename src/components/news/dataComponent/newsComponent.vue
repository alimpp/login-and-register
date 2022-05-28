<template>
 <div class="row">
            <div class="col-sm-6" v-for="data in getData" :key="data.id">
                <div class="card mb-3 card_hover" style="border:none;">
                    <div class="d-flex">
                        <img src="../img/woman-avatar.jpeg" class="avatar my-2" alt="ERROR">
                        <p class="text_20 px-2 pt-3">{{data.author}}</p>
                    </div>
                    <img :src="data.urlToImage" class="card-img-top" alt="ERROR">
                    <div class="card-body">
                        <h5 class="card-title">{{data.title}}</h5>
                        <div class="d-flex">
                         <a :href="data.url" class="btn btn-primary" target="_blank">Website</a>
                        <p class="card-text mt-1 mx-2"><small class="text-muted">Last updated {{data.publishedAt}}</small></p>
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
          return this.$store.getters['News/GET_DATA']
      }
   } ,
   mounted(){
       return this.$store.dispatch('News/FETCH_DATA')
   }
}
</script>

<style>

</style>