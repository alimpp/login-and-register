<template>
  <div class="hotNews d-flex mt-2 hotNews_bg">
     <div class="hotnews_left danger_bg">
        <p class="light_color text_a pt-3">Hot News</p>
     </div>
     <div class="hotNews_right">
      <marquee class="dark_color pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque molestiae, inventore aperiam dolorum consequatur facilis qui provident? Provident maxime voluptatibus nemo qui consectetur excepturi nisi dignissimos sunt vero dolores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis corporis alias voluptatem sapiente quam dolor architecto non fuga qui est! Exercitationem quasi ex dolorem repudiandae nemo quis! Similique, ad delectus!</marquee>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.hotNews{
    width: 100%;
    height: 40px;
    .hotnews_left{
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0px 40px 40px 0px;
    }
    .hotNews_right{
      height: 40px;
      width: 90%;
      word-wrap: break-word;
    }
}
</style>