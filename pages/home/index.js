// VIDEO MODAL

const openVideo = document.getElementById("openVideo");

const modal = document.getElementById("videoModal");

openVideo.addEventListener("click", () => {
  modal.classList.add("open");
});

/* CLICK OUTSIDE TO CLOSE */

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});

/* =========================================
   DESKTOP ONLY ANIMATIONS
========================================= */
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width: 769px)": function () {
    /* =========================================
           VIDEO STORY
        ========================================= */

    const videoTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-story-section",

        start: "top top",

        end: "+=1200",

        pin: true,

        scrub: 0.1,
      },
    });

   videoTL

.to(".story-video",{

    width:"550px",

    height:"340px",

    duration:1,

    ease:"none"

})

.to(".story-video",{

    width:"900px",

    height:"560px",

    duration:2,

    ease:"none"

})

.to(".story-video",{

    width:"100vw",

    height:"100vh",

    borderRadius:"0px",

    duration:2,

    ease:"none"

})

.to(".video-overlay",{

    opacity:.75,

    duration:1,

    ease:"none"

});
    /* =========================================
           WHY SECTION SLIDE UP
        ========================================= */

    gsap.from(".why-grid", {
      y: 600,

      opacity: 0,

      ease: "none",

      scrollTrigger: {
        trigger: ".why-reveal-section",

        start: "top top",

        end: "+=800",

        scrub: 0.3,
      },
    });

    /* =========================================
           WHY CARDS REVEAL ONE BY ONE
        ========================================= */

    const cards = gsap.utils.toArray(".why-item");

    const cardsTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-reveal-section",

        start: "top top",

        end: "+=2500",

        pin: true,

        scrub: 1,
      },
    });

    cards.forEach((card, index) => {
      cardsTL.to(card, {
        opacity: 1,

        y: 0,

        duration: 1.5,

        ease: "power2.out",
      });
    });
  },

  /* =========================================
       MOBILE
    ========================================= */

  "(max-width: 768px)": function () {
    gsap.set(".why-item", {
      opacity: 1,

      y: 0,
    });
  },
});

/* =========================================
   CLIENT WORD CHANGER
========================================= */

const words = ["DISCOUNT TIRE", "RAVID IT", "DRINKPAK", "XORIANT", "GEOMETRY"];

const word = document.getElementById("dynamic-word");

if (word) {
  let index = 0;

  setInterval(() => {
    word.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % words.length;

      word.textContent = words[index];

      word.style.opacity = 1;
    }, 300);
  }, 2500);
}
