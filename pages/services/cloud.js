// services.js
/* ==========================================================
   Cloud Solutions Page
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    heroAnimation();

    animateStats();

    revealSections();

    cardHover();

});

/* ==========================================================
   Hero Fade
========================================================== */

function heroAnimation() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    requestAnimationFrame(() => {

        hero.style.transition =
            "opacity .9s ease, transform .9s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    });

}

/* ==========================================================
   Reveal Animation
========================================================== */

function revealSections() {

    const sections = document.querySelectorAll(

        ".section," +
        ".stats-band," +
        ".cta-band"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15

        }

    );

    sections.forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

}

/* ==========================================================
   Counter Animation
========================================================== */

function animateStats(){

    const numbers=document.querySelectorAll(".stat-item h3");

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(!entry.isIntersecting) return;

                const element=entry.target;

                const value=element.innerText;

                const numeric=parseInt(value.replace(/\D/g,""));

                if(isNaN(numeric)) return;

                let current=0;

                const increment=numeric/50;

                const timer=setInterval(()=>{

                    current+=increment;

                    if(current>=numeric){

                        current=numeric;

                        clearInterval(timer);
                    }

                    if(value.includes("%")){

                        element.innerText=Math.floor(current)+"%";

                    }

                    else if(value.includes("+")){

                        element.innerText=Math.floor(current)+"+";

                    }

                    else{

                        element.innerText=Math.floor(current);

                    }

                },20);

                observer.unobserve(element);

            });

        },

        {

            threshold:.5

        }

    );

    numbers.forEach(item=>observer.observe(item));

}

/* ==========================================================
   Card Hover Effect
========================================================== */

function cardHover(){

    const cards=document.querySelectorAll(

        ".journey-card," +

        ".bento-card," +

        ".partner-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.setProperty("--x",`${x}px`);

            card.style.setProperty("--y",`${y}px`);

        });

    });

}