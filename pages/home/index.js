/* =========================================================
   VIDEO MODAL
========================================================= */

const openVideo = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");

if (openVideo && modal) {

  openVideo.addEventListener("click", () => {
    modal.classList.add("open");
  });

  /* CLICK OUTSIDE TO CLOSE */
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

}


/* =========================================================
   GSAP
========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   RESPONSIVE GSAP
========================================================= */

const mm = gsap.matchMedia();


/* =========================================================
   DESKTOP
========================================================= */

mm.add("(min-width: 769px)", () => {

  /* =======================================================
     VIDEO STORY
  ======================================================= */

  const videoTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-story-section",

      start: "top top",

      end: "+=1200",

      pin: true,

      scrub: 0.8,

      anticipatePin: 1,

      invalidateOnRefresh: true
    }
  });


  videoTL

    /* -----------------------------------------
       INITIAL VIDEO
    ----------------------------------------- */

    .to(".story-video", {

      width: "550px",

      height: "340px",

      opacity: 0.75,

      duration: 1,

      ease: "none"

    })


    /* -----------------------------------------
       VIDEO EXPANDS
    ----------------------------------------- */

    .to(".story-video", {

      width: "900px",

      height: "560px",

      opacity: 0.85,

      duration: 2,

      ease: "power1.inOut"

    })


    /* -----------------------------------------
       FULL SCREEN
    ----------------------------------------- */

    .to(".story-video", {

      width: "100vw",

      height: "100vh",

      borderRadius: "0px",

      opacity: 1,

      duration: 3,

      ease: "power2.inOut"

    })




  /* =======================================================
     WHY SECTION
     ONE CARD AT A TIME
  ======================================================= */

  const whySection = document.querySelector(".why-reveal-section");

  const cards = gsap.utils.toArray(".why-item");


  if (whySection && cards.length) {

    /* -----------------------------------------
       INITIAL CARD STATE
    ----------------------------------------- */

    gsap.set(cards, {

      opacity: 0,

      y: 100,

      scale: 0.96,

      filter: "blur(8px)"

    });


    /* -----------------------------------------
       WHY CARD REVEAL TIMELINE
    ----------------------------------------- */

    const cardsTL = gsap.timeline({

      scrollTrigger: {

        trigger: whySection,

        start: "top top",

        /*
         * More cards = more scrolling space
         * This gives every card enough time to reveal.
         */
        end: "+=" + (cards.length * 550),

        pin: true,

        scrub: 1.2,

        anticipatePin: 1,

        invalidateOnRefresh: true

      }

    });


    /* -----------------------------------------
       REVEAL CARDS ONE BY ONE
    ----------------------------------------- */

    cards.forEach((card) => {

      cardsTL.to(card, {

        opacity: 1,

        y: 0,

        scale: 1,

        filter: "blur(0px)",

        duration: 1.5,

        ease: "power3.out"

      });


      /*
       * Small pause after each card.
       * This makes the reveal feel intentional
       * instead of all cards appearing together.
       */

      cardsTL.to({}, {

        duration: 0.6

      });

    });


    /* -----------------------------------------
       OPTIONAL:
       SLIGHTLY MOVE PREVIOUS CARDS BACK
       AS NEXT CARD APPEARS
    ----------------------------------------- */

    /*
    cards.forEach((card, index) => {

      if (index < cards.length - 1) {

        cardsTL.to(card, {

          scale: 0.96,

          opacity: 0.65,

          duration: 0.5,

          ease: "power2.out"

        });

      }

    });
    */

  }

});


/* =========================================================
   MOBILE
========================================================= */

mm.add("(max-width: 768px)", () => {

  /*
   * No pinned animations on mobile.
   * Everything remains naturally visible.
   */

  gsap.set(".story-video", {

    clearProps: "all"

  });


  gsap.set(".video-overlay", {

    opacity: 0

  });


  gsap.set(".why-grid", {

    opacity: 1,

    y: 0

  });


  gsap.set(".why-item", {

    opacity: 1,

    y: 0,

    scale: 1,

    filter: "none",

    clearProps: "transform"

  });

});


/* =========================================================
   CLIENT WORD CHANGER
========================================================= */

const words = [
  "DISCOUNT TIRE",
  "RAVID IT",
  "DRINKPAK",
  "XORIANT",
  "GEOMETRY"
];

const word = document.getElementById("dynamic-word");

if (word) {

  let index = 0;

  setInterval(() => {

    word.style.opacity = 0;

    word.style.transform = "translateY(10px)";

    setTimeout(() => {

      index = (index + 1) % words.length;

      word.textContent = words[index];

      word.style.opacity = 1;

      word.style.transform = "translateY(0)";

    }, 300);

  }, 2500);

}