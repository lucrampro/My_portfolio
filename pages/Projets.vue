<template>
  <div class="projets">
    <div class="container--projet">

      <NuxtLink class="projets--card"  v-for="(projet, i) in projets" :key="i" :to="{path: `/${projet.title}`}">
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
    },

    methods: {
      startDraggable() {
        const tracker = InertiaPlugin.track(document.querySelector('.container--projet'), "x");

        Draggable.create('.container--projet', {
          type: 'x',
          bounds: document.querySelector('.projets'),
          inertia: true,
          dragClickables: true,
          dragResistance: 0.30,
          onDrag: () => {
            let inertia = tracker[0].get('x');
            console.log(inertia);

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
    height: 100vh;
    width: 100%;
    overflow: hidden;
    .container--projet {
      height: 100vh;
      width: fit-content;
      display: flex;
      align-items: center;
      padding-left: 40px;
      padding-right: 40px;

      .projets--card {
        margin-right: 20px;
        opacity: 0;
        transform: translateX(-40px);
        @media screen and (min-width: $laptop) {
        margin-right: 80px;

          }
        .wrapper--img {
          height: 20vh;
          @media screen and (min-width: $laptop) {
          width: 50vw;
          height: 500px;

          }
          img {
            height: 100%;
              @media screen and (min-width: $laptop) {
                width: 100%;
              }

          }
        }

        h1 {
          font-size: 20px;
          margin-top: 20px;
          @media screen and (min-width: $laptop) {

            font-size: 60px;
          }
        }
      }
    }

  }
</style>
