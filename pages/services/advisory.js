/* ==========================================================
   ADVISORY PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    heroAnimation();

    revealSections();

    animateCounters();

    roadmapAnimation();

    cardEffects();

});

/* ==========================================================
   HERO ANIMATION
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
   SCROLL REVEAL
========================================================== */

function revealSections() {

    const sections = document.querySelectorAll(

        ".section," +

        ".vcio-section," +

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

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

}

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function animateCounters() {

    const counters = document.querySelectorAll(".stat-item h3");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const el = entry.target;

            const original = el.innerText;

            const number = parseInt(original.replace(/\D/g, ""));

            if (isNaN(number)) return;

            let value = 0;

            const increment = Math.ceil(number / 40);

            const timer = setInterval(() => {

                value += increment;

                if (value >= number) {

                    value = number;

                    clearInterval(timer);

                }

                if (original.includes("%")) {

                    el.innerText = value + "%";

                }

                else if (original.includes("+")) {

                    el.innerText = value + "+";

                }

                else {

                    el.innerText = value;

                }

            }, 25);

            observer.unobserve(el);

        });

    });

    counters.forEach(counter => observer.observe(counter));

}

/* ==========================================================
   ROADMAP ANIMATION
========================================================== */

function roadmapAnimation() {

    const steps = document.querySelectorAll(".rm-step");

    let index = 0;

    setInterval(() => {

        steps.forEach(step => {

            step.style.opacity = ".45";

            step.style.transform = "translateX(0)";

        });

        if (steps[index]) {

            steps[index].style.opacity = "1";

            steps[index].style.transform = "translateX(8px)";

        }

        index++;

        if (index >= steps.length) {

            index = 0;

        }

    }, 1800);

}

/* ==========================================================
   CARD HOVER EFFECT
========================================================== */

function cardEffects() {

    const cards = document.querySelectorAll(

        ".adv-card," +

        ".industry-card," +

        ".quote-card"

    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", x + "px");

            card.style.setProperty("--mouse-y", y + "px");

        });

    });

}