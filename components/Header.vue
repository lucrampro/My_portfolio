<template>
  <div class="header">
    <div class="wrapper--img">
          <router-link to="/">
            <img :src="require(`~/assets/imgs/logo.png`)" alt="">
          </router-link>

    </div>
    <div class="wrapper--links">
      <router-link v-for="(link, i) in links" :key="i" :to="link.path" >{{ link.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          name: 'projets',
          path: '/Projets'
        },
        {
          name: 'a propos',
          path: '/About'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  z-index: 99;
  padding: 0px 40px;
  opacity: 0;
  .wrapper--links {
    display: flex;
    a {
      margin-left: 10px;
      text-transform: uppercase;
      font-size: 10px;
    }
  }
}
</style>
