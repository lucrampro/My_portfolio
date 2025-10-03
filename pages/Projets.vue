<template>
  <div class="projets">
    <div class="container--projet">

      <NuxtLink class="projets--card" v-for="(projet, i) in projets" :key="i" :to="{path: `/${projet.title}`}">
        <div class="wrapper--img">
          <img :src="require(`~/assets/imgs/projets/${projet.poster}`)"
            :alt="'image de presentation de' + projet.title">
        </div>
        <Title :title="`${i+1}-${projet.title}`" />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
  import projets from '../projets.json'
  import gsap from 'gsap'
  import Draggable from "gsap/Draggable";
  import InertiaPlugin from "../InertiaPlugin.min.js";

  gsap.registerPlugin(Draggable, InertiaPlugin);
  export default {
    name: 'Projets',
    data() {
      return {
        projets: projets
      }
    },
    mounted() {
      this.startDraggable();
      gsap.timeline().to('.projets--card', {
        opacity: 1,
        x: '0px',
        stagger: 0.05
      })
      .to('.header', {
        opacity:1
      })
    },

    methods: {
      startDraggable() {
        const tracker = InertiaPlugin.track(document.querySelector('.container--projet'), "x");

        if (this.$store.state.is_mobile === false) {
          Draggable.create('.container--projet', {
            type: 'x',
            bounds: document.querySelector('.projets'),
            inertia: true,
            dragClickables: true,
            dragResistance: 0.30,
            onDrag: () => {
              let inertia = tracker[0].get('x');

              gsap.to('.projets--card', {
                skewX: this.skewDegree(inertia)
              });
            },
            onDragEnd: () => {
              gsap.to('.projets--card', {
                skewX: 0
              });
            },
          })
        }
      },
      skewDegree(inertia) {
        if (inertia > 20) {
          return 20
        } else if (inertia < -20) {
          return -20
        } else {
          return inertia.toFixed()
        }
      }
    },
    transition: {
      leave(el, done) {
        gsap.timeline().to('.projets--card', {
            opacity: 0,
            y: '100px',
            duration: 0.5,
            stagger: 0.08,
          })
          .add(() => done())
      }
    }

  }
</script>
<style lang="scss">
  .projets {
    padding: 100px 0px;

    @media screen and (min-width: $laptop) {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      padding: 0px;
    }

    .container--projet {
      height: 100vh;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 40px;
      padding-right: 40px;

      @media screen and (min-width: $laptop) {
        flex-direction: row;
      }

      .projets--card {
        opacity: 0;
        transform: translateX(-40px);
        margin-bottom: 20px;
        @media screen and (min-width: $laptop) {
          margin-right: 80px;
          margin-bottom: 0px;
        }

        .wrapper--img {
          width: 80%;
          margin: 0px auto;

          @media screen and (min-width: $laptop) {
            height: 40vh;
            margin: 0px;
          }

          img {
            width: 100%;

            @media screen and (min-width: $laptop) {
              height: 100%;
              width: auto;

            }
          }
        }

        h1 {
          font-size: 20px;
          text-align: center;

          @media screen and (min-width: $laptop) {
            margin-top: 20px;
            font-size: 40px;
          }
        }
      }
    }

  }
</style>
