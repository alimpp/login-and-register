<template>
  <div class="temp">
      <div class="sideBox">
            <sidebar class="sidebar" />
            <burgerMenu class="burgerMenu" />
      </div>
      <div class="dataBox">
          
      </div>
  </div>
</template>

<script>
import sidebar from '../sidebar/sidebar.vue'
import burgerMenu from '../sidebar/burgerMenu.vue'
export default {
   components : {sidebar , burgerMenu}
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
    background: yellow;
    overflow: scroll;
}
.sideBox{
    width: 15%;
     display: flex;
}
.burgerMenu{display: none;}
@media (max-width: 800px) {
    .sidebar{display: none;}
    .burgerMenu{display: inline;}
    .temp{flex-direction: column;}
}
</style>