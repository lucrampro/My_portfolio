<template>
  <div class="about">
    <div class="wrapper--presentation">
      <h1>Creative</h1>
      <h1>Developpeur</h1>
      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/about/me.jpg`)" alt="" srcset="">
      </div>
      <p class="presentation--pitch">Je suis RAMASSAMY Lucien, developpeur front end base en ile-de-france, j’aime
        travailler sur des projets creatif a ou mon role est d’integrer et animer les contenu, les micro interation et
        transitions de pages. </p>
    </div>

    <div class="wrapper--story">
      <CardInformation v-for="(info, i) in story" :key="i" :infos="info" v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }" />
    </div>
    <div class="wrapper--informations" v-intersect="{ callback: onIntersect,options: {threshold: 0.4} }">
      <div class="skilss">
        <p class="title ">{{infos.skils.title}}</p>
        <ul>
          <li v-for="(skil, i) in infos.skils.skils" :key="i"> {{skil}}</li>
        </ul>
      </div>
      <div class="awards">
        <p class="title ">{{infos.awards.title}}</p>
        <div class="award" v-for="(award, i) in infos.awards.awards" :key="i">
          <p class="platform text--bold">{{award.platform}}</p>
          <p class="site">{{award.site}}</p>
        </div>
      </div>
    </div>

    <!-- YOUTUBE INFOS HERE  -->
    <div class="wrapper--youtube" v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }">

      <Title title="Youtube" />
      <p>Je tiens sur mon temps personmnelles une chaine youtube <br>
        <a target="blank" href="https://www.youtube.com/channel/UCSSPbD8TwQEzQWei4EVGCgA" class="text--bold">CODE AVEC LECHAT</a> ou je publies des tutoriels, conseils et avis sur le theme du
        developpement web.</p>
    </div>
    <!-- YOUTUBE INFOS HERE  -->
    <div class="wrapper--contact" v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }">


      <a href="mailto:toto@toto.com">
        <!-- <h1>envie de collaborer avec moi ? n’hesitez pas a me contacter</h1> -->
        <Words class="wrapper--words" Text="envie de collaborer avec moi ? n’hesitez pas a me contacter"/>
      </a>
    </div>
    <p class="design-by" v-intersect="onIntersect">Design by Bastien Guimelli</p>

    <!-- END  -->
  </div>
</template>

<script>
  import gsap from 'gsap'

  export default {
    name: 'About',
    data() {
      return {
        story: [{
          title: 'Experience',
          content: [{
              title: 'Developpeur front end - Hellomojito 2019-2021',
              content: 'En poste 2 ans au sein de l’agence Hellomojito j’ai participper au developpement de la partit front end des projets, cette experiences ma beaucoup apporter et ma permis de developper de superbe projets en autonomie seul a la charge de la partit front end'
            },
            {
              title: 'Integrateur - Polkatulk 2018',
              content: 'Diplome de niveau bac + 3 « Developpeur web » au sein de l’etablissement HETIC, cette formation en 3 ans en alternances propose un programme solide coherent avec les technologie actuel du marcher pour former des developpeur competent.'
            }
          ]
        }, {
          title: 'Education',
          content: [{
              title: 'Bachelor Developpeur web - HETIC',
              content: 'Diplome de niveau bac + 3 « Developpeur web » au sein de l’etablissement HETIC, cette formation en 3 ans en alternances propose un programme solide coherent avec les technologie actuel du marcher pour former des developpeur competent.'
            },
            {
              title: 'Bachelor chef de projet multimedia - IESA',
              content: 'Diplome de niveau bac + 3 « Chef de projet Multimedia » au sein de l’etablissement IESA Multimedia, cette formation en 3 ans en alternances propose un programme solide pour former des chef de projet competent.'
            }
          ]
        }],
        infos: {
          skils: {
            title: 'competences',
            skils: [
              'html', 'css', 'javascript', 'vueJS', 'NuxtJs', 'ReactJs', 'React native', 'GSAP', 'GIT', 'SHELL'
            ]
          },
          awards: {
            title: 'recompences',
            awards: [{
                platform: 'awwards - honorable mentions',
                site: 'www.hellomojito.com'
              },
              {
                platform: 'CSS design awards - site of the day',
                site: 'www.hellomojito.com'
              }
            ]
          }
        }
      }
    },
    methods: {
      onIntersect(observer) {
        this.isVisible = observer.isIntersecting
        const target = observer.entries[0].target;

        if (this.isVisible) {

          switch (target.className) {
            case 'card--information':
              gsap.timeline().to(target.querySelectorAll('.title, .subtitle, .content, .separator'), {
                stagger: 0.08,
                duration: 1.2,
                x: '0px',
                opacity: 1,
                ease: "expo.out",
              })
              break;
            case 'wrapper--informations':
              gsap.timeline().to(target.querySelectorAll('.skilss .title, .skilss li'), {
                  stagger: 0.05,
                  duration: 1.2,
                  x: '0px',
                  opacity: 1,
                  ease: "expo.out",
                }, 'start')
                .to(target.querySelectorAll('.awards .title, .awards p'), {
                  stagger: 0.08,
                  duration: 1.2,
                  x: '0px',
                  opacity: 1,
                  ease: "expo.out",
                }, 'start+=0.2')
              break

            case 'wrapper--youtube':
              gsap.timeline().to(target.querySelectorAll('.title--composant span'), {
                  stagger: 0.05,
                  duration: 1.2,
                  y: '0px',
                  opacity: 1,
                  ease: "expo.out",
                }, 'start')
                .to(target.querySelector('p'), {
                  duration: 1.2,
                  x: '0px',
                  opacity: 1,
                  ease: "expo.out",
                }, 'start+=0.225')

              break
            case 'wrapper--contact':
                gsap.timeline().to(target.querySelectorAll('a h1 span'), {
                  stagger: 0.05,
                  duration: 1.2,
                  y: '0px',
                  opacity: 1,
                  ease: "expo.out",
                }, 'start')

              break
            case 'design-by':
              gsap.to(target, {
                  duration: 1.2,
                  y: '0px',
                  opacity: 1,
                  ease: "expo.out",
              })
              break
            default:
              break;
          }





        }
      }
    }
  }
</script>

<style lang="scss">
  .about {
    padding-top: 100px;

    .wrapper--presentation {
      @media screen and (min-width: $tablet) {
        max-width: 800px;
        margin: auto;
      }

      p,
      h1 {
        text-align: center;
      }


      .wrapper--img {

        img {
          width: 100%;
          height: auto;
        }
      }

      .presentation--pitch {
        text-align: justify;
        font-weight: bold;

        @media screen and (min-width: $laptop) {
          text-align: left;
        }
      }
    }

    .wrapper--story {
      background-color: #000000;
      width: 100vw;
      box-sizing: border-box;
      padding: 20px;

      @media screen and (min-width: $tablet) {
        padding: 50px 0px;
      }

      .card--information {

        .title,
        .subtitle,
        .content,
        .separator {
          transform: translateX(-40px);
          opacity: 0;
        }

        @media screen and (min-width: $tablet) {
          max-width: 800px;
          margin: auto;
        }
      }
    }

    .wrapper--informations {
      padding: 20px;
      text-transform: uppercase;

      .title,
      li,
      p {
        transform: translateX(-40px);
        opacity: 0;
      }

      @media screen and (min-width: $tablet) {
        max-width: 800px;
        margin: auto;
      }

      @media screen and (min-width: $laptop) {
        display: flex;

      }

      >div {

        .title {
          color: $red;
          font-size: 20px;
        }

        @media screen and (min-width: $laptop) {
          margin-right: 240px;
        }

        ul {
          padding: 0px;

          li {
            list-style: none;
            font-size: 20px;
            margin-bottom: 10px;
          }
        }

        .platform {
          font-weight: normal;
          font-size: 14px;
          margin-bottom: 5px !important;
        }

        .site {
          margin-top: 0px;
        }
      }
    }

    .wrapper--contact {
      @media screen and (min-width: $tablet) {
        max-width: 800px;
        margin: auto;
      }

      h1 {
        text-align: center;

        @media screen and (min-width: $laptop) {
          margin: 30px 0px;
          text-align: left;
        }
        span {
          opacity: 0;
          transform: translateY(40px);
          display: inline-block;
          margin-right: 20px;
        }
      }

      p {
        text-align: justify;

        @media screen and (min-width: $laptop) {
          text-align: center;
        }
      }

      a {
        text-align: left;

      }
    }

    .wrapper--youtube {
      .title--composant {
        span {
          opacity: 0;
          transform: translateY(40px);
        }
      }

      p {
        opacity: 0;
        transform: translateX(-40px);
      }

      @media screen and (min-width: $tablet) {
        max-width: 800px;
        margin: auto;
      }

    }

    .design-by {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      opacity: 0;
      transform: translateY(40px);
    }
  }
</style>
