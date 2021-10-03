<template>
  <div class="about">
    <div class="wrapper--presentation">
      <Title title="Creative" />
      <Title title="Developpeur" />
      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/about/me.jpg`)" alt="" srcset="">
      </div>
      <p class="presentation--pitch">Je m'appel <span class="text--bold">RAMASSAMY LUCIEN</span> développeur front end depuis 2ans basé en ile-de-france, j’aime
        travailler sur des projets creatifs ou des services specifiques utiles.</p>
    </div>

    <div class="wrapper--story">
      <CardInformation v-for="(info, i) in story" :key="i" :infos="info"
        v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }" />
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
        <a target="blank" href="https://www.youtube.com/channel/UCSSPbD8TwQEzQWei4EVGCgA" class="text--bold">CODE AVEC
          LECHAT</a> ou je publies des tutoriels, conseils et avis sur le theme du
        developpement web.</p>
    </div>
    <!-- YOUTUBE INFOS HERE  -->
    <div class="wrapper--contact" v-intersect="{ callback: onIntersect,options: {threshold: 0.3} }">


      <a href="mailto:toto@toto.com">
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
          content: [{
              title: 'Developpeur front end - Hellomojito 2019-2021',
              content: 'En poste 2 ans au sein de l’agence Hellomojito j’ai participer au developpement de la partie front end des projets, cette experiences ma beaucoup apporté et ma permis de developper de superbe projets.'
            },
            {
              title: 'Integrateur - Polkatulk 2018',
              content: 'En poste 3 mois cette éxperience qui fut la premières ma permis de decouvrir le monde de l\'entreprise.'
            }
          ]
        }, {
          title: 'Education',
          content: [{
              title: 'HETIC - Bachelor Developpeur web',
              content: 'Diplome de niveau bac + 3 « Developpeur web » au sein de l’etablissement HETIC, formation en 3 ans en alternance propose un programme solide coherent avec les technologies actuel du marché.'
            },
            {
              title: 'IESA - Bachelor chef de projet multimedia',
              content: 'Diplome de niveau bac + 3 « Chef de projet Multimedia » au sein de l’etablissement IESA Multimedia, formation en 3 ans en alternances propose un programme solide pour former des chefs de projets competents.'
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
        text-align: justify;
        font-weight: bold;
        margin: 20px;
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
          text-align: left;
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
  }
</style>
