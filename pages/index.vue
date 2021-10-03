<template>
  <client-only>
    <div id="app">
      <Home v-if="$store.state.loading" />
      <div class="loading--overlay" v-else>
        <Title title="Chargement..." />
          <Title title="Developpeur" />

        <div class="wrapper--title">
          <Title title="Disponible" />
          <Title title="pour" />
          <Title title="des" />
          <Title title="missions" />
          <Title title="freelance" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
  import Home from './Home'
  import gsap from 'gsap'
  import projets from '../projets.json'
  import LocomotiveScroll from 'locomotive-scroll'

  import {
    mapMutations
  } from 'vuex'
  export default {
    name: 'default',
    data() {
      return {
        projets: [...projets],
      }
    },
    components: {
      Home
    },
    created() {
      require('~/assets/fonts/Derivia-Regular.otf')
      require('~/assets/fonts/Helvetica-regular.otf')
      require('~/assets/fonts/HelveticaNeueLTProLtEx.woff')
      require('~/assets/fonts/HelveticaNeueLTProMdEx.woff')
      const me = new Image
      me.src = require(`~/assets/imgs/about/me.jpg`);
      this.projets.forEach(image => {

        const poster = new Image;
        poster.src = require(`~/assets/imgs/projets/${image.poster}`);

        const first = new Image;
        first.src = require(`~/assets/imgs/projets/${image.project_img.first}`);

        const second = new Image;
        second.src = require(`~/assets/imgs/projets/${image.project_img.second}`);

        const third = new Image;
        third.src = require(`~/assets/imgs/projets/${image.project_img.third}`);

        const four = new Image;
        four.src = require(`~/assets/imgs/projets/${image.project_img.four}`);

        const five = new Image;
        five.src = require(`~/assets/imgs/projets/${image.project_img.five}`);

      });
    },
    mounted() {

      setTimeout(() => {
        // if (this.$store.state.is_mobile === false) {
        //   this.scroll = new LocomotiveScroll({
        //     el: document.querySelector('.container--scroll'),
        //     smooth: true
        //   });
        // }
        if (this.$store.state.loading === false) {
          gsap.timeline().to('.loading--overlay >h1 span', {
              duration: 1.5,
              stagger: 0.03,
              opacity: 1,
              y: '0px'
            })
            .to('.loading--overlay h1 span', {
              duration: 1.5,
              stagger: 0.03,
              opacity: 1,
              y: '0px',
              delay: 1
            })
            .to('.loading--overlay', {
              opacity: 0,
              delay: 1
            })
            .add(() => this.UpdateLoading(true))
        }
      }, 500);

      if (window.innerWidth > 1280) {
        this.TestDeviceSize(false);
      } else {
        this.TestDeviceSize(true);
      }
      window.addEventListener('resize', e => {
        if (window.innerWidth > 1280) {
          this.TestDeviceSize(false);
        } else {
          this.TestDeviceSize(true);
        }

      });
    },
    // beforeDestroy() {
    //   if (this.$store.state.is_mobile === false) {
    //     gsap.set('body', {overflow: 'hiden'})
    //     this.scroll.destroy();
    //   }
    // },
    methods: {
      ...mapMutations(['TestDeviceSize', 'UpdateLoading']),
    },

    transition: {
      css: false,
      leave(el, done) {
        const wrapper_img_left = document.querySelector('.wrapper--img.img-0');
        const wrapper_img_right = document.querySelector('.wrapper--img.img-1');
        const wrapper_img_center = document.querySelector('.wrapper--img.img-2');

        const duration = 1.4;

        gsap.timeline().to([wrapper_img_left, wrapper_img_right], {
            duration: duration,
            x: '0%',
            rotate: '0deg',
            scale: 1,
            ease: "expo.inOut",
          })
          .to([wrapper_img_center.querySelector('a img'), wrapper_img_right.querySelector('a img'), wrapper_img_left
            .querySelector('a img')
          ], {
            duration: duration,
            stagger: 0.05,
            top: '200%',
            ease: "expo.inOut",
          }, 'start')
          .to('.technos', {
            opacity: 0,
            duration: 0.5,

          }, 'start')
          .to('.wrapper--comandes--desktop, .wrapper--comandes', {
            opacity: 0,
            duration: 0.2
          }, 'start')
          .to('.numbers--projects', {
            duration: 0.5,
            opacity: 0,
            y: '10px'
          }, 'start')
          .to('.title--composant span', {
            duration: duration,
            stagger: 0.02,
            skewX: '-40deg',
            skewY: '-40deg',
            y: '150%',
            ease: "expo.inOut",
          }, 'start')
          .add(() => done())
      }
    },
    // watch: {
    //   '$store.state.is_mobile': function (new_value, old_value) {
    //     if (new_value && old_value === false) {
    //       window.location.reload();
    //     }
    //   }
    // }
  }
</script>

<style lang='scss'>
  #app {
    min-height: 100vh;

    .loading--overlay {
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      background-color: #030303;
      color: #fff;
      padding: 40px;

      h1 {
        font-size: 30px;
        margin-right: 10px;

        span {
          transform: translateY(40px);
          opacity: 0;
        }
      }

      .wrapper--title {
        @media screen and(min-width: $laptop) {
          display: flex;

        }
      }
    }
  }
</style>
