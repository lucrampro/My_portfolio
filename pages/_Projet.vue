<template>
  <div class="projet ">
    <!-- PRESENTATION PROJECT  -->
    <div class="wrapper--presentation">

      <h1>{{projet.title}}</h1>
      <p>{{projet.description}}</p>
      <div class="wrapper--img">
        <img class="poster" :src="require(`~/assets/imgs/projets/${projet.poster}`)" alt="">
      </div>
      <h2>ma participation</h2>
      <p style="margin-bottom: 20px">{{projet.participation}}</p>
      <h2>Stack</h2>
      <p>{{projet.techno}}</p>
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
          <SquareImg :img_path="projects_info[getOtherProject(number_projet - 1)].poster" />
          <h1>{{projects_info[getOtherProject(number_projet - 1)].title}}</h1>
          <p>Precedent</p>
        </NuxtLink>
      </div>
      <div class="wrapper--next--projet wrapper--other--projet">
        <NuxtLink :to="{path: `/${projects_info[getOtherProject(number_projet + 1)].title}`}">

          <SquareImg :img_path="projects_info[getOtherProject(number_projet + 1)].poster" />
          <h1>{{projects_info[getOtherProject(number_projet + 1)].title}}</h1>
          <p>Suivant</p>
        </NuxtLink>
      </div>
    </div>
    <!-- NEXT OR PREVIOUS PROJECT  -->

  </div>
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
      }
    },
    created() {
      this.getProjet();
    },
    mounted() {
      // const scroll = new LocomotiveScroll({
      //   el: document.querySelector('body'),
      //   smooth: true
      // });
    },
    methods: {
      getProjet() {
        for (const [index, projet] of this.projects_info.entries()) {
          // projet.title === this.$route.params.Projet ? () => { this.projet = projet; this.number_projet = index } : '';

          if (projet.title === this.$route.params.Projet) {
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
    }
  }
</script>

<style lang="scss">
  .projet {
    padding-top: 80px;

    .wrapper--presentation {

      h1 {
        text-align: center;
        margin-bottom: 20px;
      }

      .wrapper--img {
        width: 60%;
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

        @media screen and (min-width: $laptop) {
          max-width: 500px;
          margin: 0 auto;
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
        width: 50%;
        margin: 20px auto;
      }

      .wrapper--second--third--img {

        @media screen and (min-width: $laptop) {
          display: flex;

          .wrapper--img {
            width: 50%;
            margin: 20px 0px;
          }
        }
      }

      .wrapper--four--img,
      .wrapper--five--img {
        margin: 40px 0px;
      }

      .wrapper--five--img {
        width: 60%;
        margin: 40px auto;
      }

    }

    .container--other-projets {
      display: flex;
      margin: 60px 0px;

      .wrapper--other--projet {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin-top: 100px;

        h1 {
          margin: 0;
          font-size: 22px;

          @media screen and (min-width: $tablet) {
            font-size: 42px;
          }
        }

        p {
          font-size: 12px;
          text-align: center;
        }

        .wrapper--square--img {
          display: none;

          @media screen and (min-width: $tablet) {
            display: inherit;
          }

        }
      }

      .wrapper--previus--projet {

        .wrapper--square--img {
          transform: rotate(-15deg) scale(0.6);

          @media screen and (min-width: $laptop) {
            transform: rotate(-15deg) scale(1);
            margin-bottom: 50px;

          }
        }
      }

      .wrapper--next--projet {

        .wrapper--square--img {
          transform: rotate(15deg) scale(0.6);

          @media screen and (min-width: $laptop) {
            transform: rotate(15deg) scale(1);
            margin-bottom: 50px;

          }
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
