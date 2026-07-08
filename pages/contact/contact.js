/* ==========================================================
   CONTACT FORM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {

        const submitBtn = document.getElementById("submitBtn");
        const successMessage = document.getElementById("formSuccess");

        form.addEventListener("submit", async (e) => {

            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.innerHTML = "Sending...";

            successMessage.style.display = "none";

            const contactData = {

                firstName: document.getElementById("firstName").value.trim(),
                lastName: document.getElementById("lastName").value.trim(),
                email: document.getElementById("email").value.trim(),
                company: document.getElementById("company").value.trim(),
                service: document.getElementById("service").value,
                message: document.getElementById("message").value.trim()

            };

            try {

                const response = await fetch("https://wwwuat.amnikontechnologies.com/api/api/contact", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(contactData)

                });

                const result = await response.json();

                if (response.ok) {

                    successMessage.style.display = "block";

                    form.reset();

                } else {

                    alert(result.message || "Something went wrong.");

                }

            } catch (error) {

                console.error(error);

                alert("Unable to connect to the server.");

            } finally {

                submitBtn.disabled = false;

                submitBtn.innerHTML = "Send Message →";

            }

        });

    }


    /* ==========================================================
       GSAP HERO ANIMATION
    ========================================================== */

    if (typeof gsap === "undefined") {

        console.warn("GSAP not loaded.");

        return;

    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector(".contact-hero");

    if (!hero) return;

    const tl = gsap.timeline({

        defaults: {
            ease: "power4.out"
        }

    });


    /* Eyebrow */

    tl.from(".contact-hero .eyebrow", {

        y: 40,
        opacity: 0,
        duration: 0.8

    })


    /* Heading */

    .to(".hero-title span", {

        y: 0,
        opacity: 1,
        rotate: 0,
        filter: "blur(0px)",

        stagger: 0.08,

        duration: 1

    }, "-=0.3")


    /* Paragraph */

    .from(".contact-hero p", {

        y: 35,
        opacity: 0,
        duration: 0.8

    }, "-=0.5");


    /* ==========================================================
       Background Parallax
    ========================================================== */

    gsap.to(".contact-hero .container", {

        yPercent: -8,

        ease: "none",

        scrollTrigger: {

            trigger: ".contact-hero",

            start: "top top",

            end: "bottom top",

            scrub: true

        }

    });


    /* ==========================================================
       Decorative Rings
    ========================================================== */

    gsap.from(".contact-hero .container::before", {

        opacity: 0

    });


    /* ==========================================================
       Floating Effect
    ========================================================== */

    gsap.to(".contact-hero .container", {

        y: -10,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        duration: 4

    });

});