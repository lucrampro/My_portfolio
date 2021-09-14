<template>
  <div class="card--information">
    <p class="title">{{$props.infos.name}}</p>
    <div class="wrapper--list--information" v-for="(content, i) in infos.contents" :key="i">
      <p class="subtitle">{{content.title}}</p>
      <p class="content">{{content.content}}</p>
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
    border: solid 2px $black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    margin: 30px 0px;
    @media screen and (min-width: $laptop) {
      
      padding: 50px 100px;
      display: flex;
      font-display: column;
      justify-content: center;
      width: 100%;
      max-width: 30%;
    }
    .title {
      text-transform: uppercase;
      font-weight: bold;
    }

    .wrapper--list--information {
      p {
        text-align: center;
      }
      .subtitle {
        text-decoration: underline;
      }
    }
  }
</style>

