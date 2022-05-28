<template>
  <div class="temp">
      <div class="sideBox">
            <sidebar class="sidebar" />
            <burgerMenu class="burgerMenu" />
      </div>
      <div class="dataBox">
         <div class="container opacityAnim">
             <hotNews/>
             <div class="col-sm-12" v-for="data in getData" :key="data.id">
                <div class="card mb-3" style="border:none;">
                    <div class="d-flex">
                        <img src="./img/woman-avatar.jpeg" class="avatar my-2" alt="ERROR">
                        <p class="text_20 px-2 pt-3">{{data.author}}</p>
                    </div>
                    <img :src="data.urlToImage" class="card-img-top" alt="ERROR">
                    <div class="card-body">
                        <h5 class="card-title">{{data.title}}</h5>
                        <p class="card-text"><small class="text-muted">Last updated {{data.publishedAt}}</small></p>
                    </div>
                </div>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
import sidebar from '../sidebar/sidebar.vue'
import burgerMenu from '../sidebar/burgerMenu.vue'
import hotNews from '../hotNews.vue'
export default {
   components : {sidebar , burgerMenu , hotNews} , 
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

<style scoped >
.temp{
    width: 100%;
    height: 100vh;
    display: flex;
}
.dataBox{
    width: 85%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.sideBox{
    width: 350px;
    display: flex;
}
.burgerMenu{display: none;}
@media (max-width: 1000px) {
    .sidebar{display: none;}
    .burgerMenu{display: inline;}
    .temp{flex-direction: column;}
    .dataBox{width: 100%;}
}
</style>