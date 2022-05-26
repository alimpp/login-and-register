<template>
  <div class="blogsTemp">
      <sidebar class="sidebar" />
      <burgerMenu class="burgerMenu" />
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
.burgerMenu{display: none;}
@media (max-width: 800px) {
    .sidebar{display: none;}
    .burgerMenu{display: inline;}
}
</style>