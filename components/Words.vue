<template>
  <h1 class="words">
    <span v-for="(item, i) in words" :key="i">
      {{item}}
    </span>
  </h1>
</template>
<script>
  export default {
    name: 'Words',
    data() {
      return {
        words: []
      };
    },
    mounted() {
      this.paragraphDecomposition(this.$props.Text);

    },
    methods: {
      paragraphDecomposition(params) {
        const word = params.split(' ');
        word.forEach(element => {
          this.words.push(element);
        });
      }
    },
    props: {
      Text: {
        default: 'text',
      }
    },
  };
</script>

<style lang="scss">

</style>
