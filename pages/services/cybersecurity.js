/* ==========================================================
   CYBERSECURITY PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    heroAnimation();

    revealSections();

    animateCounters();

    dashboardAnimation();

    cardEffects();

});

/* ==========================================================
   HERO FADE
========================================================== */

function heroAnimation() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    requestAnimationFrame(() => {

        hero.style.transition =
            "opacity .8s ease, transform .8s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    });

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function revealSections() {

    const sections = document.querySelectorAll(

        ".threat-section," +
        ".solutions-section," +
        ".framework-section," +
        ".cta-section"

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
   HERO COUNTERS
========================================================== */

function animateCounters() {

    const counters = document.querySelectorAll(".hero-stats h3");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const el = entry.target;

            const text = el.innerText;

            if (!/\d/.test(text)) return;

            const number = parseInt(text.replace(/\D/g, ""));

            if (isNaN(number)) return;

            let value = 0;

            const step = Math.max(1, Math.ceil(number / 40));

            const timer = setInterval(() => {

                value += step;

                if (value >= number) {

                    value = number;

                    clearInterval(timer);

                }

                if (text.includes("%")) {

                    el.innerText = value + "%";

                }

                else if (text.includes("×")) {

                    el.innerText = value + "×7";

                }

                else if (text.includes("Min")) {

                    el.innerHTML = "&lt;" + value + " Min";

                }

                else {

                    el.innerText = value;

                }

            }, 30);

            observer.unobserve(el);

        });

    });

    counters.forEach(counter => observer.observe(counter));

}

/* ==========================================================
   LIVE DASHBOARD
========================================================== */

function dashboardAnimation() {

    const footer = document.querySelector(".dashboard-footer");

    if (!footer) return;

    let threats = 1247;

    setInterval(() => {

        threats += Math.floor(Math.random() * 3);

        footer.innerHTML =

            "<strong>" +

            threats.toLocaleString() +

            " Threats Blocked Today</strong>";

    }, 5000);

}

/* ==========================================================
   CARD EFFECTS
========================================================== */

function cardEffects() {

    const cards = document.querySelectorAll(

        ".threat-card," +
        ".solution-card," +
        ".framework-item"

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