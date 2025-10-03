<template>
  <client-only>
    <div class="projet">
      <!-- PRESENTATION PROJECT  -->
      <div class="wrapper--presentation">

        <Title :title="projet.title" />
        <p class="description">{{projet.description}}</p>
        <div class="wrapper--img">
          <img class="poster" :src="require(`~/assets/imgs/projets/${projet.poster}`)" alt="">
        </div>
        <h2>ma participation</h2>
        <p style="margin-bottom: 20px">{{projet.participation}}</p>
        <h2>Stack</h2>
        <p>{{projet.techno}}</p>
        <a v-if="projet.link !== 'false'" v-intersect="onIntersect" :href="projet.link" target="_blank" class="text--bold link" rel="noopener noreferrer">Lien du site</a>
      </div>
      <!-- PRESENTATION PROJECT  -->

      <div class="separator"></div>

      <!-- CONTENT PROJECT  -->
      <div class="wrapper--content">
        <div class="wrapper--img wrapper--first--img" v-intersect="onIntersect">
          <img :src="require(`~/assets/imgs/projets/${projet.project_img.first}`)" alt="">
        </div>

        <div class="wrapper--second--third--img">
          <div class="wrapper--img" v-intersect="onIntersect"><img
              :src="require(`~/assets/imgs/projets/${projet.project_img.second}`)" alt="">
          </div>
          <div class="wrapper--img" v-intersect="onIntersect"><img
              :src="require(`~/assets/imgs/projets/${projet.project_img.third}`)" alt=""></div>
        </div>

        <div class="wrapper--four--img">
          <div class="wrapper--img" v-intersect="onIntersect"><img
              :src="require(`~/assets/imgs/projets/${projet.project_img.four}`)" alt=""></div>
        </div>
        <div v-if="projet.project_img.five" class="wrapper--five--img">
          <div class="wrapper--img" v-intersect="onIntersect"><img
              :src="require(`~/assets/imgs/projets/${projet.project_img.five}`)" alt=""></div>
        </div>
      </div>
      <!-- CONTENT PROJECT  -->

      <!-- NEXT OR PREVIOUS PROJECT  -->
      <div class="container--other-projets">
        <div class="wrapper--previus--projet wrapper--other--projet">
          <NuxtLink :to="{path: `/${projects_info[getOtherProject(number_projet - 1)].title}`}">
            <!-- <SquareImg :img_path="projects_info[getOtherProject(number_projet - 1)].poster" /> -->
            <div class="wrapper--img">
              <img :src="require(`~/assets/imgs/projets/${projects_info[getOtherProject(number_projet - 1)].poster}`)"
                alt="">
            </div>
            <h1>{{projects_info[getOtherProject(number_projet - 1)].title}}</h1>
            <p>Precedent</p>
          </NuxtLink>
        </div>
        <div class="wrapper--next--projet wrapper--other--projet">
          <NuxtLink :to="{path: `/${projects_info[getOtherProject(number_projet + 1)].title}`}">

            <!-- <SquareImg :img_path="projects_info[getOtherProject(number_projet + 1)].poster" /> -->
            <div class="wrapper--img">
              <img :src="require(`~/assets/imgs/projets/${projects_info[getOtherProject(number_projet + 1)].poster}`)"
                alt="">
            </div>
            <h1>{{projects_info[getOtherProject(number_projet + 1)].title}}</h1>
            <p>Suivant</p>
          </NuxtLink>
        </div>
      </div>
      <!-- NEXT OR PREVIOUS PROJECT  -->

    </div>
  </client-only>
</template>

<script>
  import Projets from '../projets.json';
  import LocomotiveScroll from 'locomotive-scroll';
  import gsap from 'gsap';
  export default {
    name: 'Projet',
    data() {
      return {
        projects_info: Projets,
        projet: {},
        number_projet: 0,
        mounted_component: true,
        scroll: null,
      }
    },
    created() {
      this.getProjet();
    },
    mounted() {
      setTimeout(() => {
        // if(this.$store.state.is_mobile === false) {
        //   this.scroll = new LocomotiveScroll({
        //     el: document.querySelector('.container--scroll'),
        //     smooth: true
        //   });
        // }

        gsap.timeline().set('.projet .wrapper--presentation .title--composant span', {
            skewX: '60deg',
            skewY: '60deg'
          })
          .to('.projet .wrapper--presentation .title--composant span', {
            duration: 1,
            stagger: 0.01,
            y: '0%',
            skewX: '0deg',
            skewY: '0deg',
            ease: "expo.inOut",
          }, 'start')
          .to('.wrapper--presentation .description', {
            y: '0px',
            opacity: 1
          }, 'start+=0.6')
          .to('.wrapper--presentation .wrapper--img', {
            x: '0px',
            opacity: 1
          }, 'start+=0.6')
          .to('.wrapper--presentation h2, .wrapper--presentation p', {
            y: '0px',
            opacity: 1
          }, 'start+=0.6')
          .to('.header', {
            opacity: 1,
          })
      }, 100);


    },
    // beforeDestroy() {
    //   if (this.$store.state.is_mobile === false) {
    //     this.scroll.destroy();
    //   }
    // },
    methods: {
      getProjet() {
        for (const [index, projet] of this.projects_info.entries()) {
          // projet.title === this.$route.params.Projet ? () => { this.projet = projet; this.number_projet = index } : '';
          console.log(this.$route)
          
          if (projet.title === this.$route.params.projet) {
            this.projet = projet;
            this.number_projet = index;
          }
        }
      },

      getOtherProject(number_projet) {
        if (number_projet < 0) {
          return this.projects_info.length - 1;
        } else if (number_projet > this.projects_info.length - 1) {
          return 0
        } else {
          return number_projet
        }
      },

      onIntersect(observer) {
        this.isVisible = observer.isIntersecting
        const target = observer.entries[0].target;

        if (this.isVisible) {

          gsap.to(target, {
            x: '0px',
            opacity: 1.2,
            duration: 1,
            delay: 0.2
          })
        }
      }
    },
    transition: {
      css: false,
      leave(el, done) {
        gsap.timeline().to('.projet', {
            opacity: 0,
          })
          .add(() => done())
      }
    }
  }
</script>

<style lang="scss">
  .projet {
    padding-top: 80px;
    height: fit-content;

    .wrapper--presentation {

      h1 {
        text-align: center;
        margin-bottom: 20px;

        span {

          transform: translateY(200%);
        }

      }

      .wrapper--img {
        opacity: 0;
        transform: translateX(-50px);
        width: 80%;
        margin: 0px auto;

        .poster {
          width: 100%;
          margin: 20px 0;

          @media screen and (min-width: $laptop) {
            margin: 40px 0;
          }
        }
      }

      p,
      h2 {
        text-align: center;
        opacity: 0;
        transform: translateY(-40px);

        @media screen and (min-width: $laptop) {
          max-width: 500px;
          margin: 0 auto;
        }
      }

            p {
        @media screen and (max-width: $laptop) {
          margin: 0px 20px;
          text-align: left;
        }
      }
      h2 {
        margin-bottom: 5px;
      }

      .link {
        text-align: center;
        text-transform: uppercase;
        background: black;
        color: #ffffff;
        padding: 15px;
        display: block;
        max-width: 200px;
        margin: 0 auto;
        margin-top: 20px;
        transition: 0.2s;
        opacity: 0;
       &:hover {
         transform: scale(0.9);
       }
      }
    }


    .wrapper--content {
      .wrapper--img {
        opacity: 0;
        transform: translateX(-40px);

        img {
          width: 100%;
        }
      }

      .wrapper--first--img {
        width: 100%;
      }

      .wrapper--second--third--img {

        @media screen and (min-width: $laptop) {
          display: flex;

          .wrapper--img {
            width: 50%;

          }
        }
      }

    }

    .container--other-projets {
      display: flex;
      margin: 60px 0px;
      justify-content: space-around;

      .wrapper--other--projet {

        transition: 0.2s;
       &:hover {
         transform: scale(0.9);
       }
        a {
          h1, p {
            text-align: center;
          }

        }

        .wrapper--img {
          display: none;
          @media screen and (min-width: $laptop) {
            height: 300px;
            display: block;
            margin-bottom: 10px;
          }

          img {

            @media screen and (min-width: $laptop) {
              height: 100%;
            }
          }
        }

        h1 {
          font-size: 20px;

        }
      }
    }

    .separator {
      margin: 40px auto;
      height: 1px;
      background-color: $black;
      width: 80%;
      opacity: 0.2;

      @media screen and (min-width: $laptop) {
        margin: 100px auto;
      }
    }
  }
</style>
