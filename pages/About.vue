<template>
  <div class="about padding">
    <div class="wrapper--presentation">
      <p>Bonjour, je suis</p>
      <h1>Lucien</h1>
      <h1>Ramassamy</h1>
      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/about/me.jpg`)" alt="" srcset="">
      </div>
      <p class="presentation--pitch">Développeur front end en région Ile de France, j’ai étudié le dév à HETIC aujourd’hui mon langage de programmation de prédilection est le javascript et le framework sur lequel je le pratique le plus est VUE.js.</p>
    </div>

    <div class="wrappper--information">
      <CardInformation v-for="(info, i) in infos"  :key="i" :infos="info" />
    </div>
    <!-- YOUTUBE INFOS HERE  -->

    <!-- YOUTUBE INFOS HERE  -->
    <div class="wrapper--contact">
      <h1>envie de collaborer avec moi ? n’hesitez pas a me contacter</h1>
      <p>Je me ferrai un plaisir d’échanger avec vous pour comprendre et répondre au mieux à vos besoins. Mon expérience passée en agence alliée à mes compétences techniques me permettront de réaliser votrer site de demain.</p>

      <a href="mailto:toto@toto.com"> Contacte moi </a>
    </div>
    <p class="design-by">Design by Bastien Guimelli</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      infos: [
        {
          name: 'compétences',
          contents: [
            {
              title: 'Javascript',
              content: 'Vue.js, Nuxt.js, React.Js, REACT NATIVE, GSAP'
            },
            {
              title: 'Préprocesseur',
              content: 'Sass, Less'
            },
            {
              title: 'Workflow',
              content: 'Git, Npm, '
            },
            {
              title: 'Autres',
              content: 'PS, Pr, Figma'
            },
          ]
        }, 
        {
          name: 'récompenses',
          contents: [
            {
              title: 'AWWWARDS Honorable mention',
              content: 'Hellomojito.com'
            },
            {
              title: 'awards.orpetron Site of the day',
              content: 'Hellomojito.com'
            },
            {
              title: 'cssdesignawards Site of the day',
              content: 'Hellomojito.com'
            },
          ]
        }, 
      ]
    }
  }
}
</script>

<style lang="scss">
  .about {
    @media screen and (min-width: $laptop) {
      width: 1150px;
      margin-left: auto;
      margin-right: auto;
    }
    .wrapper--presentation {
      p, h1 {
        text-align: center;
      }

      h1 {
        line-height: 40px;
        @media screen and (min-width: $laptop) {
          line-height: 115px;
        }
      }

      .wrapper--img {
        max-width: 80vw;
        margin: 15px auto;
      
        img {
          width: 100%;
          height: auto;
        }
      }
      .presentation--pitch {
        text-align: justify;
        font-weight: bold;

        @media screen and (min-width: $laptop) {
          text-align: center;
        }
      }
    }
    .wrappper--information {

      @media screen and (min-width: $laptop){
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
      }
    }
    .wrapper--contact {
      h1 {
        text-align: center;
        @media screen and (min-width: $laptop) {
          margin: 30px 0px;
          line-height: 115px;
        }
      }
      p {
        text-align: justify;
        @media screen and (min-width: $laptop) {
          text-align: center;
        }
      }

      a {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        display: block;
        margin: 10px 0px;
      }
    }
    .design-by {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>