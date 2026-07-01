const cards =
document.querySelectorAll(".stat-card");

const showcase =
document.querySelector(".hero-stats-showcase");

const panel =
document.querySelector(".stat-detail-panel");

const details =
document.querySelectorAll(".detail-content");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        const id =
        card.dataset.card;

        showcase.classList.add("focusing");

        panel.classList.add("show");

        cards.forEach(c=>
            c.classList.remove("active")
        );

        card.classList.add("active");

        details.forEach(d=>
            d.classList.remove("active")
        );

        document
        .querySelector(
            `[data-detail="${id}"]`
        )
        ?.classList.add("active");

    });

});

document
.querySelector(".about-stats")
.addEventListener("mouseleave",()=>{

    showcase.classList.remove("focusing");

    panel.classList.remove("show");

    cards.forEach(card=>
        card.classList.remove("active")
    );

    details.forEach(detail=>
        detail.classList.remove("active")
    );

});
// Highlight

const slides =
document.querySelectorAll(
".highlights-story .story-slide"
);

const fill =
document.querySelector(
".highlights-story .story-progress-fill"
);

window.addEventListener("scroll",()=>{

    const section =
    document.querySelector(
    ".highlights-story"
    );

    if(!section) return;

    const rect =
    section.getBoundingClientRect();

    const progress =
    Math.max(
        0,
        Math.min(
            1,
            Math.abs(rect.top) /
            (section.offsetHeight - window.innerHeight)
        )
    );

    const index =
    Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
    );

    slides.forEach(slide=>
        slide.classList.remove("active")
    );

    if(slides[index]){
        slides[index].classList.add("active");
    }

    if(fill){
        fill.style.height =
        `${progress * 100}%`;
    }

});