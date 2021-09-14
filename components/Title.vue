<template>
  <h1 class="title--composant"> <span :class="new_letter ? 'new_letter' : ''" v-for="(letter, i) in letters" :key="i"> {{letter}} </span> </h1>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      letters: [],
      new_letter: false,
    }
  },

  mounted() {
    this.CutTitle();
  },
  methods: {
    CutTitle() {
      // delete existante letter
      const exist_letters = document.querySelectorAll('.title--composant span');
      for (const letter of exist_letters) {
        letter.remove()
      }

      // cut letter
      const Title = this.$props.title;

      for (const letter of Title) {
        this.letters.push(letter)
      }
    }
  },
  props: {
    title: {
      default: 'Default'
    }
  },
  watch :{ 
    title (new_value, old_value) {
      this.CutTitle()
      this.new_letter = true;
    }
  }
}
</script>

<style lang="scss">
  .title--composant {
    overflow: hidden;
    span {
      display: inline-block;

      &.new_letter {
        transform: translateY(-150%);
      }
    }
  }
</style>