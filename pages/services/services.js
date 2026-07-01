const bubbles = document.querySelectorAll(".service-bubble");

console.log("Found bubbles:", bubbles.length);

bubbles.forEach((bubble, index) => {

    console.log("Bubble", index + 1, bubble);

    bubble.addEventListener("mouseenter", () => {

        console.log(
            "Hover:",
            bubble.querySelector(".bubble-title").textContent
        );

        bubbles.forEach(other => {

            if(other !== bubble){

                other.classList.add("dimmed");

            }else{

                other.classList.add("active");

            }

        });

    });

    bubble.addEventListener("mouseleave", () => {

        bubbles.forEach(other => {

            other.classList.remove("dimmed");
            other.classList.remove("active");

        });

    });

});

















//  cards section Services


const cards =
document.querySelectorAll(".service-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>{

            c.classList.remove("active");

        });

        card.classList.add("active");

        gsap.fromTo(

            card,

            {
                scale:.9,
                y:50
            },

            {
                scale:1.08,
                y:-20,
                duration:.8,
                ease:"power4.out"
            }

        );

    });

});












// PROCESS
gsap.registerPlugin(ScrollTrigger);

const progressLine = document.querySelector(".track-progress");
const dot = document.querySelector(".track-dot");
const steps = document.querySelectorAll(".process-step");

const tl = gsap.timeline({

    scrollTrigger:{

        trigger:"#process",

        start:"top top",

        end:"+=4000",

        scrub:1,

        pin:true,

        anticipatePin:1

    }

});

/* STEP 1 */

tl.call(()=>{

    steps.forEach(s=>s.classList.remove("active"));
    steps[0].classList.add("active");

})

.to(progressLine,{
    width:"0%",
    duration:0.5
})

.to({},{
    duration:1
});

/* STEP 2 */

tl.to(dot,{
    left:"33.33%",
    duration:2,
    ease:"power2.inOut"
})

.to(progressLine,{
    width:"33.33%",
    duration:2,
    ease:"power2.inOut"
},"<")

.call(()=>{

    steps.forEach(s=>s.classList.remove("active"));
    steps[1].classList.add("active");

})

.to({},{
    duration:1
});

/* STEP 3 */

tl.to(dot,{
    left:"66.66%",
    duration:2,
    ease:"power2.inOut"
})

.to(progressLine,{
    width:"66.66%",
    duration:2,
    ease:"power2.inOut"
},"<")

.call(()=>{

    steps.forEach(s=>s.classList.remove("active"));
    steps[2].classList.add("active");

})

.to({},{
    duration:1
});

/* STEP 4 */

tl.to(dot,{
    left:"100%",
    duration:2,
    ease:"power2.inOut"
})

.to(progressLine,{
    width:"100%",
    duration:2,
    ease:"power2.inOut"
},"<")

.call(()=>{

    steps.forEach(s=>s.classList.remove("active"));
    steps[3].classList.add("active");

})

.to({},{
    duration:1
});



/* ==========================================
   HERO SCROLL EFFECT
========================================== */

const heroContent =
document.querySelector(".hero-content");

const heroGrid =
document.querySelector(".hero-bg-grid");

window.addEventListener("scroll", () => {

    const scrolled =
    window.scrollY;

    if(heroContent){

        heroContent.style.transform =
        `translateY(${scrolled * -0.15}px)`;
    }

    if(heroGrid){

        heroGrid.style.transform =
        `translateY(${scrolled * -0.05}px)`;
    }

});