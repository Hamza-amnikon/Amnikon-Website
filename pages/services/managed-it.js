/* =====================================================
   MANAGED IT PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const reveals = document.querySelectorAll(

        ".svc-card, .process-card, .stat-card, .tech-card"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    reveals.forEach((item) => {

        revealObserver.observe(item);

    });


    /* ==========================================
       COUNTERS
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

});