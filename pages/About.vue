<template>
  <div class="about">
    <div class="wrapper--presentation">
      <Title title="Software" />
      <Title title="Engineer" />
      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/about/me.jpg`)" alt="" srcset="">
      </div>
      <p class="presentation--pitch"> <span class="text--bold spacing-2">Lucien Francois RAMASSAMY</span>, Développeur Frontend confirmé avec ~4 ans d’expérience, spécialisé en Vue.js (v2 & v3), TypeScript, tests (Jest, Cypress). J’ai travaillé sur des projets grands publics à forte fréquentation (laposte.fr), ainsi que sur des applications innovantes (Web3, NFTs).
        Je suis tourné vers la qualité : accessibilité, code maintenable, refactorisation, documentation, performance.
      </p>
    </div>

    <div class="wrapper--story">
      <CardInformation v-for="(info, i) in story" :key="i" :infos="info"
        v-intersect="{ callback: onIntersect,options: {threshold: 0.5} }" />
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

    <div class="wrapper--contact" v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }">
      <a href="mailto:lfrentreprise.contact@gmail.com" target="_blank" >
        <!-- <h1>envie de collaborer avec moi ? n’hesitez pas a me contacter</h1> -->
        <Words class="wrapper--words" Text="envie de collaborer avec moi ? Cliquez pour me contacter" />
      </a>
    </div>
    <p class="design-by text--bold" v-intersect="onIntersect">Design by Bastien Guimelli</p>

    <!-- END  -->
  </div>
</template>

<script>
  import gsap from 'gsap'
  import LocomotiveScroll from 'locomotive-scroll';

  export default {
    name: 'About',
    data() {
      return {
        story: [{
          title: 'Experience',
          content: [
            {
              title: 'Developpeur Développeur Frontend – La Poste - 2022 / 2025 (En poste actuellement) ',
              content: 'En mission freelance j\'integre Laposte pour participer au developpement de la partie front end de leurs paltforme.'
            },
            {
              title: 'Intervenant JavaScript – HETIC - 2023/2024',
              content: 'En parallèle de mes missions, j’anime des cours de JavaScript pour les étudiants de première année à HETIC.'
            },
            {
              title: 'Développeur Frontend – The Aquaverse - 2022',
              content: 'Mission freelance pour The Aquaverse, startup spécialisée dans la blockchain et les NFT, j’ai participé au développement de la partie front end de leur plateforme web3.'
            },
            {
              title: 'Développeur Frontend – BlackSwan - 2021/2022',
              content: 'En mission freelance j\'integre BlackSwan agence web proposant des services de sites e-commerce Shopify pour renforcer l\'equipe front dans le cadre d\'un besoin de plusieurs mois.'
            },
            {
              title: 'Formateur javascript - Wildcodeschool 2021',
              content: 'Encadrement d’une promotion en cours du soir part-time sur la découverte du développement web.'
            },
            {
              title: 'Développeur Frontend – Hellomojito - 2019/2021',
              content: 'Deux années au sein de l’agence digitale Hellomojito en tant que développeur frontend.'
            }
          ]
        }, {
          title: 'Education',
          content: [{
              title: 'HETIC - Bachelor Developpeur web',
              content: 'Diplome de niveau bac + 3 « Concepteur développeur de solutions digitales » au sein de l’etablissement HETIC, formation de 3 ans en alternance qui propose un programme solide et cohérent avec les technologies actuel du marché.'
            }
          ]
        }],
        infos: {
          skils: {
            title: 'competences',
            skils: [
              'TypeScript', 'Vue.js', 'Vue 2', 'Vue 3', 'Nuxt.js', 'React.js', 'React Native', 'Storybook', 'GSAP', 'Jest', 'Git', 'GitLab', 'CI/CD', 'Agile/Scrum', 'Shell'

            ]
          },
          awards: {
            title: 'récompences',
            awards: [{
                platform: 'Awwwards - Honorable mentions',
                site: 'www.hellomojito.com'
              },
              {
                platform: 'Awwwards - Mobile Excellence',
                site: 'www.hellomojito.com'
              },
              {
                platform: 'CSS design awards - Site of the day',
                site: 'www.hellomojito.com'
              },
              {
                platform: 'Orpetron - Site of the day',
                site: 'www.hellomojito.com'
              }
            ]
          }
        },
        scroll: null,
      }
    },
    mounted() {
      setTimeout(() => {
        // if (this.$store.state.is_mobile === false) {
        //   this.scroll = new LocomotiveScroll({
        //     el: document.querySelector('.container--scroll'),
        //     smooth: true
        //   });
        // }
        gsap.timeline().set('.wrapper--presentation h1 span', {
            skewX: '60deg',
            skewY: '60deg'
          })
          .to('.wrapper--presentation h1 span', {
            y: 0,
            skewY: '0deg',
            skewX: '0deg',
          })
          .to('.wrapper--presentation .wrapper--img', {
            duration: 1,
            opacity: 1,
            x: '0px',
          },'start')
          .to('.wrapper--presentation p', {
            opacity: 1,
            x: '0px',
          },'start')
          .to('.header', {
            opacity: 1,
          })
      }, 100)
    },
    // beforeDestroy() {
    //   if (this.$store.state.is_mobile === false) {
    //     this.scroll.destroy();
    //   }
    // },
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
    },
    transition: {
      css: false,
      leave(el, done) {
        gsap.timeline().to('.about', {
            opacity: 0,
          })
          .add(() => done())
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

      p {
        transform: translateX(-40px);
        opacity: 0;
      }

      p,
      h1 {
        text-align: center;

        span {
          letter-spacing: -2px;
          transform: translateY(200%);
        }
      }


      .wrapper--img {
        transform: translateX(-40px);
        opacity: 0;

        img {
          width: 100%;
          height: auto;
        }
      }

      .presentation--pitch {
        text-align: left;
        font-weight: bold;
        margin: 20px;
        line-height: 30px;
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

      @media screen and (min-width: 730px) {
        display: flex;

      }

      >div {

        .title {
          color: $red;
          font-size: 20px;
        }

        @media screen and (min-width: 730px) {
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
          font-size: 40px;
        letter-spacing: 0.5px;


        @media screen and (min-width: $laptop) {
          margin: 30px 0px;
        }

        span {
          opacity: 0;
          transform: translateY(40px);
          display: inline-block;
          margin-right: 10px;
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
      margin: 0px 20px;
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
      margin: 30px 0px;
    }

    .spacing-2 {
      letter-spacing: 2px!important;
    }
  }
</style>
