<template>
  <div class="card--information">
    <div class="title" >{{infos.title}}</div>
    <div class="wrapper--information" v-for="(info, i) in infos.content" :key="i" >
      <p class="subtitle">{{info.title}}</p>
      <p class="content">{{info.content}}</p>
      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardInformation',
  props: {
    infos: Object
  },
}
</script>

<style lang="scss">
  .card--information {
    color: #ffffff;
    .title {
      color: $red;
      margin-bottom: 40px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .wrapper--information {
      margin-bottom: 40px;


      .subtitle {
        font-weight: bold;
        font-size: 30px;
      }

      .separator {
        height: 1px;
        background: #fff;
        margin-top: 40px;
      }
    }
  }
</style>

