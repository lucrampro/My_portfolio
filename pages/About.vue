<template>
  <div class="about">
    <div class="wrapper--presentation">
      <Title title="Software" />
      <Title title="Engineer" />
      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/about/me.jpg`)" alt="" srcset="" />
      </div>
      <p class="presentation--pitch">
        <span class="text--bold spacing-2">Lucien Francois RAMASSAMY</span>,
        Développeur Front-End avec 6 ans d'expérience, spécialisé en Vue.js,
        React et TypeScript. <br /><br />
        J'interviens sur la conception, le développement et l'évolution
        d'applications web à fort trafic, avec une expérience significative sur
        des produits utilisés quotidiennement par des millions d'utilisateurs au
        sein de La Poste. <br /><br />
        Au cours de mon parcours, j'ai également participé à des projets
        innovants autour du Web3 et des NFTs ainsi qu'à la création et
        l'évolution de Design Systems. <br /><br />
        Particulièrement attentif à la qualité logicielle, je porte une
        attention forte à l'accessibilité (WCAG/RGAA), aux performances web
        (Core Web Vitals), aux tests automatisés, à la maintenabilité du code et
        à l'expérience utilisateur. <br />
      </p>
    </div>

    <div class="wrapper--story">
      <CardInformation
        v-for="(info, i) in story"
        :key="i"
        :infos="info"
        v-intersect="{ callback: onIntersect, options: { threshold: 0.15 } }"
      />
    </div>
    <div
      class="wrapper--informations"
      v-intersect="{ callback: onIntersect, options: { threshold: 0.15 } }"
    >
      <div class="skilss">
        <p class="title">{{ infos.skils.title }}</p>
        <ul>
          <li v-for="(skil, i) in infos.skils.skils" :key="i">{{ skil }}</li>
        </ul>
      </div>
      <div class="awards">
        <p class="title">{{ infos.awards.title }}</p>
        <div class="award" v-for="(award, i) in infos.awards.awards" :key="i">
          <p class="platform text--bold">{{ award.platform }}</p>
          <p class="site">{{ award.site }}</p>
        </div>
      </div>
    </div>

    <div
      class="wrapper--contact"
      v-intersect="{ callback: onIntersect, options: { threshold: 0.15 } }"
    >
      <a href="mailto:lfrentreprise.contact@gmail.com" target="_blank">
        <!-- <h1>envie de collaborer avec moi ? n’hesitez pas a me contacter</h1> -->
        <Words
          class="wrapper--words"
          Text="envie de collaborer avec moi ? Cliquez pour me contacter"
        />
      </a>
    </div>
    <p class="design-by text--bold" v-intersect="onIntersect">
      Design by Bastien Guimelli
    </p>

    <!-- END  -->
  </div>
</template>

<script>
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

export default {
  name: "About",
  data() {
    return {
      story: [
        {
          title: "Experience",
          content: [
            {
              title:
                "Consultant Front-End Senior – La Poste • 2022 - Aujourd'hui",
              content:
                "Intervention au sein de plusieurs équipes produit de La Poste sur des applications web à fort trafic utilisées quotidiennement par des millions d'utilisateurs. Développement et évolution de fonctionnalités en Vue.js, React et TypeScript, participation à la migration de projets vers Vue 3, optimisation des performances (Core Web Vitals), amélioration de l'accessibilité (WCAG/RGAA) et contribution à la conception de Design Systems avec Storybook. Collaboration quotidienne avec les équipes Produit, UX/UI et Backend dans un environnement Agile.",
            },
            {
              title:
                "Intervenant Front-End (JavaScript / React) – HETIC • 2023 - 2024",
              content:
                "Animation de modules de formation auprès d'étudiants en première année sur les fondamentaux du développement web. Accompagnement sur JavaScript, la manipulation du DOM, la logique de programmation, les bonnes pratiques de développement et l'introduction aux frameworks Front-End modernes. Encadrement de projets et suivi pédagogique des étudiants.",
            },
            {
              title: "Développeur Front-End & Web3 – The Aquaverse • 2022",
              content:
                "Participation au développement d'une plateforme Web3 spécialisée dans les NFTs et les actifs numériques. Conception et développement des interfaces utilisateur en Vue.js et TypeScript, intégration des fonctionnalités blockchain, connexion aux wallets utilisateurs et amélioration continue de l'expérience utilisateur. Collaboration avec les équipes produit et techniques pour faire évoluer la plateforme.",
            },
            {
              title:
                "Développeur Front-End E-commerce & Luxe – BlackSwan • 2021 - 2022",
              content:
                "Renfort de l'équipe Front-End sur plusieurs projets e-commerce et plateformes digitales pour des marques nationales et internationales. Développement d'interfaces modernes en Vue.js, intégration des maquettes fournies par les équipes design et amélioration de l'expérience utilisateur. Participation à des projets à forte exigence visuelle, notamment dans les secteurs du luxe et de la mode.",
            },
            {
              title: "Formateur JavaScript – Wild Code School • 2021",
              content:
                "Encadrement d'une promotion d'apprenants en cours du soir autour de la découverte du développement web. Animation des sessions JavaScript, accompagnement sur les premiers projets web et sensibilisation aux bonnes pratiques de développement et de collaboration.",
            },
            {
              title: "Développeur Front-End – Hello Mojito • 2019 - 2021",
              content:
                "Développement et maintenance de sites web et applications pour différents clients de l'agence digitale. Participation à la conception des interfaces utilisateur, intégration HTML/CSS des maquettes, développement de fonctionnalités JavaScript et évolution continue des projets. Cette expérience m'a permis de travailler sur des problématiques variées et de consolider mes bases en développement Front-End.",
            },
          ],
        },
        {
          title: "Education",
          content: [
            {
              title: "HETIC - Bachelor Developpeur web",
              content:
                "Diplome de niveau bac + 3 « Concepteur développeur de solutions digitales » au sein de l’etablissement HETIC, formation de 3 ans en alternance qui propose un programme solide et cohérent avec les technologies actuel du marché.",
            },
          ],
        },
      ],
      infos: {
        skils: {
          title: "competences",
          skils: [
            "TypeScript",
            "Vue.js",
            "Vue 2",
            "Vue 3",
            "Nuxt.js",
            "React.js",
            "React Native",
            "Storybook",
            "GSAP",
            "Jest",
            "Git",
            "GitLab",
            "CI/CD",
            "Agile/Scrum",
            "Shell",
          ],
        },
        awards: {
          title: "récompences",
          awards: [
            {
              platform: "Awwwards - Honorable mentions",
              site: "www.hellomojito.com",
            },
            {
              platform: "Awwwards - Mobile Excellence",
              site: "www.hellomojito.com",
            },
            {
              platform: "CSS design awards - Site of the day",
              site: "www.hellomojito.com",
            },
            {
              platform: "Orpetron - Site of the day",
              site: "www.hellomojito.com",
            },
          ],
        },
      },
      scroll: null,
    };
  },
  mounted() {
    setTimeout(() => {
      // if (this.$store.state.is_mobile === false) {
      //   this.scroll = new LocomotiveScroll({
      //     el: document.querySelector('.container--scroll'),
      //     smooth: true
      //   });
      // }
      gsap
        .timeline()
        .set(".wrapper--presentation h1 span", {
          skewX: "60deg",
          skewY: "60deg",
        })
        .to(".wrapper--presentation h1 span", {
          y: 0,
          skewY: "0deg",
          skewX: "0deg",
        })
        .to(
          ".wrapper--presentation .wrapper--img",
          {
            duration: 1,
            opacity: 1,
            x: "0px",
          },
          "start"
        )
        .to(
          ".wrapper--presentation p",
          {
            opacity: 1,
            x: "0px",
          },
          "start"
        )
        .to(".header", {
          opacity: 1,
        });
    }, 100);
  },
  // beforeDestroy() {
  //   if (this.$store.state.is_mobile === false) {
  //     this.scroll.destroy();
  //   }
  // },
  methods: {
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      const target = observer.entries[0].target;

      if (this.isVisible) {
        switch (target.className) {
          case "card--information":
            gsap
              .timeline()
              .to(
                target.querySelectorAll(
                  ".title, .subtitle, .content, .separator"
                ),
                {
                  stagger: 0.08,
                  duration: 1.2,
                  x: "0px",
                  opacity: 1,
                  ease: "expo.out",
                }
              );
            break;
          case "wrapper--informations":
            gsap
              .timeline()
              .to(
                target.querySelectorAll(".skilss .title, .skilss li"),
                {
                  stagger: 0.05,
                  duration: 1.2,
                  x: "0px",
                  opacity: 1,
                  ease: "expo.out",
                },
                "start"
              )
              .to(
                target.querySelectorAll(".awards .title, .awards p"),
                {
                  stagger: 0.08,
                  duration: 1.2,
                  x: "0px",
                  opacity: 1,
                  ease: "expo.out",
                },
                "start+=0.2"
              );
            break;

          case "wrapper--youtube":
            gsap
              .timeline()
              .to(
                target.querySelectorAll(".title--composant span"),
                {
                  stagger: 0.05,
                  duration: 1.2,
                  y: "0px",
                  opacity: 1,
                  ease: "expo.out",
                },
                "start"
              )
              .to(
                target.querySelector("p"),
                {
                  duration: 1.2,
                  x: "0px",
                  opacity: 1,
                  ease: "expo.out",
                },
                "start+=0.225"
              );

            break;
          case "wrapper--contact":
            gsap.timeline().to(
              target.querySelectorAll("a h1 span"),
              {
                stagger: 0.05,
                duration: 1.2,
                y: "0px",
                opacity: 1,
                ease: "expo.out",
              },
              "start"
            );

            break;
          case "design-by":
            gsap.to(target, {
              duration: 1.2,
              y: "0px",
              opacity: 1,
              ease: "expo.out",
            });
            break;
          default:
            break;
        }
      }
    },
  },
  transition: {
    css: false,
    leave(el, done) {
      gsap
        .timeline()
        .to(".about", {
          opacity: 0,
        })
        .add(() => done());
    },
  },
};
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

    > div {
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
    letter-spacing: 2px !important;
  }
}
</style>
