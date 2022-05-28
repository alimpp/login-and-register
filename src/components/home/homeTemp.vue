<template>
  <div class="temp">
      <div class="sideBox">
            <sidebar class="sidebar sideAnim" />
            <burgerMenu class="burgerMenu" />
      </div>
      <div class="dataBox">
        <div class="container opacityAnim p-4">
            <div class="row">
                <div class="textBox">
                  <p class="text_25">Welcome To My Website</p>
                  <p class="text_13">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore tenetur ea sed, consequatur labore soluta nisi fugiat dolores? Vero voluptate ab labore ipsa libero dolorem recusandae mollitia sit sed? Magni?
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quae consectetur. Autem vel dolores in? Dicta repudiandae saepe ab esse magnam aperiam incidunt nisi reprehenderit enim impedit. Delectus, aliquam aliquid?
                  </p>
                  <div class="d-flex">
                      <a href="http://freerealapi.com/docs#get-all-fake-blogs" class="btn btn-dark">Watch Api Data</a>
                  </div>
                </div>
                <hr>
                <div class="col-sm-6" v-for="data in getData" :key="data.id">
                  <div class="card mb-3 card_hover" style="max-width: 540px;">
                    <div class="row">
                        <div class="col-md-4">
                        <img :src="data.image" style="height:200px; width:100%;" class="img-fluid rounded-start" alt="ERROR">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{data.title}}</h5>
                            <p class="card-text"><small class="text-muted">Create at {{data.createdAt}}</small></p>
                            <p class="card-text"><small class="text-muted">Last update at {{data.updatedAt}}</small></p>
                             <div class="d-flex">
                                <a href="http://freerealapi.com/docs#get-all-fake-blogs" class="btn btn-primary">See More</a>
                            </div>
                        </div>
                        </div>
                    </div>
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
export default {
   components : {sidebar , burgerMenu} , 
   computed : {
       getData(){
           return this.$store.getters['Home/GET_DATA']
       }
   } , 
   mounted(){
       return this.$store.dispatch('Home/FETCH_DATA')
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
    justify-content: center;
    align-items: center;
}
.sideBox{
    width: 350px;
    display: flex;
}
.burgerMenu{display: none;}
.textBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
}
@media (max-width: 1200px) {
    .sidebar{display: none;}
    .burgerMenu{display: inline;}
    .temp{flex-direction: column;}
    .dataBox{width: 100%;}
}
</style>