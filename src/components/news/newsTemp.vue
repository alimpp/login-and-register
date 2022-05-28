<template>
  <div class="temp">
      <div class="sideBox">
            <sidebar class="sidebar sideAnim" />
            <burgerMenu class="burgerMenu" />
      </div>
      <div class="dataBox">
         <div class="container opacityAnim">
             <hotNews class="mb-2"/>
             <div class="d-flex my-3">
             <p class="text_25 mx-3" style="cursor: pointer; " @click="getNews">News</p> 
             <p class="text_20">/</p> 
             <p class="text_25 mx-3" style="cursor: pointer; " @click="getPosts">Posts</p>
              <p class="text_20">/</p> 
              <p class="text_25 mx-3" style="cursor: pointer; " @click="getEmails">Emails</p> 
              <hr>
             </div>
             <newsComponent v-if="news"/>
             <postsComponent v-if="posts"/>
             <emailsComponent v-if="emails"/>
         </div>
      </div>
  </div>
</template>

<script>
import sidebar from '../sidebar/sidebar.vue'
import burgerMenu from '../sidebar/burgerMenu.vue'
import hotNews from '../hotNews.vue'
import newsComponent from './dataComponent/newsComponent.vue'
import postsComponent from './dataComponent/postsComponent.vue'
import emailsComponent from './dataComponent/emailsComponent.vue'
export default {
    data(){
        return{
            news : true , 
            posts : false , 
            emails : false ,
        }
    } ,
   components : {sidebar , burgerMenu , hotNews , newsComponent , postsComponent , emailsComponent} ,  
   methods: {
       getNews(){
           this.news = true  
           this.posts = false  
           this.emails = false 
       } , 
       getPosts(){
           this.news = false 
           this.posts = true 
           this.emails = false 
       } , 
       getEmails(){
           this.news = false 
           this.posts = false 
           this.emails = true 
       }
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