<template>
  <div class="home">
    <div class="container--imgs">
      <div :class="`wrapper--img img-${index}`" v-for="(item, index) in 3" :key="index">
        <NuxtLink :to="{path: `/${projects_info[project_number].title}`}">
          <img :src="require(`~/assets/imgs/projets/${projects_info[project_number].poster}`)" alt="">
        </NuxtLink>
      </div>

      <div class="wrapper--comandes--desktop">
        <p @click="animeImg('precedent')">precedent</p>
        <p @click="animeImg('suivant')">suivant</p>
      </div>
    </div>
    <div class="wrapper--infos">
      <p class="technos">{{ projects_info[project_number].techno }}</p>
      <!-- <h1>{{ projects_info[project_number].title }}</h1> -->
      <Title :title="projects_info[project_number].title" />
      <div class="wrapper--comandes">
        <p @click="animeImg('precedent')">precedent</p>
        <p @click="animeImg('suivant')">suivant</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Projets from '../projets.json'
  import gsap from 'gsap'

  export default {
    name: 'Home',
    data() {
      return {
        projects_info: Projets,
        project_number: 0,
      }
    },
    methods: {
      changeImg(value) {

        if (value === 'suivant') {
          this.project_number == this.projects_info.length - 1 ? this.project_number = 0 : this.project_number++
        } else {
          this.project_number == 0 ? this.project_number = this.projects_info.length - 1 : this.project_number--
        }
      },

      animeImg(value) {
        const wrapper_img_left = document.querySelector('.wrapper--img.img-0');
        const wrapper_img_right = document.querySelector('.wrapper--img.img-1');
        const wrapper_img_center = document.querySelector('.wrapper--img.img-2');

        const duration = 1.4;

        gsap.timeline().to([wrapper_img_left, wrapper_img_right], {
            duration: duration,
            x: '-50%',
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
          .add(() => this.animeTitleToTop(), 'start')
          .add(() => this.changeImg(value))
          .set([wrapper_img_center.querySelector('a img'), wrapper_img_right.querySelector('a img'), wrapper_img_left
            .querySelector('a img')
          ], {
            top: '-100%'
          })
          .to([wrapper_img_left.querySelector('a img'), wrapper_img_right.querySelector('a img'), wrapper_img_center
            .querySelector('a img')
          ], {
            duration: duration,
            stagger: 0.05,
            top: '50%',
            ease: "expo.inOut",
          })
          .add(() => this.animeTitleToBottom())
          .to('.technos', {
            duration: duration,
            opacity: 1,
            delay: 0.5
          })
          .to([wrapper_img_left, wrapper_img_right], {
            scale: 0.8,
          }, 'finish-=0.5')
          .to(wrapper_img_right, {
            rotate: '12deg',
            x: '-20%',
          }, 'finish-=0.5')
          .to(wrapper_img_left, {
            rotate: '-12deg',
            x: '-80%'
          }, 'finish-=0.5')
      },
      animeTitleToTop() {
        const duration = 1;
        gsap.timeline().to('.title--composant span', {
          duration: duration,
          stagger: 0.02,
          skewX: '-40deg',
          skewY: '-40deg',
          y: '150%',
          ease: "expo.inOut",
        })
      },
      animeTitleToBottom() {
        const duration = 1
        gsap.timeline()
          .set('.title--composant span', {
            skewX: '60deg',
            skewY: '60deg',
          })
          .to('.title--composant span', {
            duration: duration,
            stagger: 0.02,
            y: '0%',
            skewX: '0deg',
            skewY: '0deg',
            ease: "expo.inOut",
          })
      },
      test() {
        const duration = 1
        gsap.timeline().to('.title--composant .new_letter', {
          duration: duration,
          stagger: 0.02,
          y: '0%',
          ease: "expo.inOut",
        })
      }
    }
  }
</script>

<style lang="scss">
  .home {
    height: 100vh;
    padding-bottom: 0px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;



    @media screen and (min-width: $laptop) {
      flex-direction: column-reverse;

    }

    .container--imgs {
      width: 100%;
      height: 300px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: $tablet) {
        height: 500px;
      }

      .wrapper--comandes--desktop {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 830px;
        display: none;

        @media screen and (min-width: $laptop) {
          display: flex;
        }

        p {
          font-family: Title;
          text-transform: uppercase;
          cursor: pointer;
        }
      }

      .wrapper--img {
        position: absolute;
        width: 220px;
        height: 240px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;

        @media screen and (min-width: $tablet) {
          width: 440px;
          height: 480px;
        }

        @media screen and (min-width: $laptop) {
          width: 330px;
          height: 360px;
        }

        &.img-0 {
          transform: translate(-80%, -50%) rotate(-12deg) scale(0.8);
          opacity: 0.6;

          @media screen and (min-width: $laptop) {
            transform: translate(-95%, -50%) rotate(-12deg) scale(0.8);
          }
        }

        &.img-1 {
          transform: translate(-20%, -50%) rotate(12deg) scale(0.8);
          opacity: 0.6;

          @media screen and (min-width: $laptop) {
            transform: translate(-5%, -50%) rotate(12deg) scale(0.8);
          }
        }

        img {
          // width: 400px;
          height: 240px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          @media screen and (min-width: $tablet) {
            height: 440px;
          }
        }
      }
    }

    .wrapper--infos {

      h1 {
        text-transform: uppercase;
        text-align: center;

        @media screen and (min-width: $laptop) {
          letter-spacing: 5px;
        }
      }

      p {
        text-align: center;

        @media screen and (min-width: $laptop) {
          font-size: 24px;
        }
      }

    }

    .wrapper--comandes {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      @media screen and (min-width: $laptop) {
        display: none;
      }

      p {
        font-family: Title;
        text-transform: uppercase;
      }
    }
  }
</style>
