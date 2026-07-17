/* ===========================================================
   AMNIKON PROJECTS
   Netflix Style Slider + Modal
===========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENTS
    =========================================*/

    const slider = document.querySelector(".project-slider");

    const leftBtn = document.querySelector(".slider-btn.left");

    const rightBtn = document.querySelector(".slider-btn.right");

    const cards = document.querySelectorAll(".project-card");

    /*=========================================
        MODAL
    =========================================*/

    const modal = document.querySelector(".project-modal");

    const modalImage = document.getElementById("modal-image");

    const modalTitle = document.getElementById("modal-title");

    const modalDescription = document.getElementById("modal-description");

    const modalTech = document.getElementById("modal-tech");

    const demoLink = document.getElementById("demo-link");

    const githubLink = document.getElementById("github-link");

    const closeModal = document.querySelector(".close-modal");

    /*=========================================
        SLIDER BUTTONS
    =========================================*/

    const scrollAmount = 450;

    if (rightBtn) {

        rightBtn.addEventListener("click", () => {

            slider.scrollBy({

                left: scrollAmount,

                behavior: "smooth"

            });

        });

    }

    if (leftBtn) {

        leftBtn.addEventListener("click", () => {

            slider.scrollBy({

                left: -scrollAmount,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
        MOUSE WHEEL
    =========================================*/

    slider.addEventListener("wheel", (e) => {

        e.preventDefault();

        slider.scrollLeft += e.deltaY;

    });

    /*=========================================
        DRAG SUPPORT
    =========================================*/

    let isDown = false;

    let startX;

    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {

        isDown = true;

        slider.classList.add("dragging");

        startX = e.pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener("mouseleave", () => {

        isDown = false;

        slider.classList.remove("dragging");

    });

    slider.addEventListener("mouseup", () => {

        isDown = false;

        slider.classList.remove("dragging");

    });

    slider.addEventListener("mousemove", (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    });

    /*=========================================
        HOVER ANIMATION
    =========================================*/

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {

                scale: 1.08,

                duration: .35,

                ease: "power2.out"

            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {

                scale: 1,

                duration: .35,

                ease: "power2.out"

            });

        });

    });

    /*=========================================
    OPEN MODAL
=========================================*/

document.querySelectorAll(".project-btn").forEach(card => {

    card.addEventListener("click", () => {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        modalTitle.textContent = card.dataset.title;

        modalImage.src = card.dataset.image;

        modalDescription.textContent = card.dataset.description;

        demoLink.href = card.dataset.demo;

        githubLink.href = card.dataset.github;

        modalTech.innerHTML = "";

        card.dataset.technologies
            .split(",")
            .forEach(tech => {

                const span = document.createElement("span");

                span.textContent = tech.trim();

                modalTech.appendChild(span);

            });

        gsap.fromTo(
            ".modal-content",
            {
                opacity: 0,
                y: 80,
                scale: .9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: .6,
                ease: "power3.out"
            }
        );

    });

});

    /*=========================================
        CLOSE MODAL
    =========================================*/

 function closeProjectModal(){

    modal.classList.remove("active");

    document.body.style.overflow="";

}

document.querySelector(".close-modal").onclick = closeProjectModal;

modal.onclick = function(e){

    if(e.target===modal){

        closeProjectModal();

    }

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeProjectModal();

    }

});
    /*=========================================
        GSAP REVEAL
    =========================================*/

    gsap.from(".section-header", {

        opacity: 0,

        y: 50,

        duration: .8,

        ease: "power3.out"

    });

    gsap.from(".project-card", {

        opacity: 0,

        y: 40,

        duration: .8,

        stagger: .15,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".projects-section",

            start: "top 70%"

        }

    });

    /*=========================================
        DISABLE BUTTONS
    =========================================*/

    function updateButtons() {

        if (slider.scrollLeft <= 0) {

            leftBtn.style.opacity = ".35";

        } else {

            leftBtn.style.opacity = "1";

        }

        if (

            slider.scrollLeft + slider.clientWidth >=

            slider.scrollWidth - 10

        ) {

            rightBtn.style.opacity = ".35";

        }

        else {

            rightBtn.style.opacity = "1";

        }

    }

    slider.addEventListener("scroll", updateButtons);

    updateButtons();

});



