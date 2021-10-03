<template>
  <div class="wrapper--square--img">
    <img :src="require(`~/assets/imgs/projets/${img_path}`)" alt="">
  </div>
</template>

<script>
export default {
  name: 'SquareImg',
  props: {
    img_path: {
      default: 'hellomojito/poster.jpg'
    }
  }
}
</script>

<style lang="scss">

      .wrapper--square--img {

        width: 220px;
        height: 240px;
        overflow: hidden;

        @media screen and (min-width: $tablet) {
          width: 440px;
          height: 480px;
        }

        @media screen and (min-width: $laptop) {
          width: 330px;
          height: 360px;
        }

        img {
          // width: 400px;
          height: 240px;
          transform: translate(-50%, -50%);
          margin-left: 50%;
          margin-top: 50%;
          width: auto;

          @media screen and (min-width: $tablet) {
                // width: 720px;
                height: 440px;
          }
        }
      }
</style>
