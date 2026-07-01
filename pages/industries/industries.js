gsap.timeline()

.from(".page-hero .eyebrow",{
    y:-100,
    opacity:0,
    duration:.8,
    ease:"power4.out"
})

.from(".page-hero h1",{
    y:-150,
    opacity:0,
    duration:1.1,
    ease:"power4.out"
},"-=0.4")

.from(".page-hero p",{
    y:-80,
    opacity:0,
    duration:.8,
    ease:"power4.out"
},"-=0.7")

.from(".page-hero .btn",{
    y:-60,
    opacity:0,
    duration:.8,
    ease:"power4.out"
},"-=0.5");



























gsap.registerPlugin(ScrollTrigger);

const leftCards =
gsap.utils.toArray(".left .industry-card");

const rightCards =
gsap.utils.toArray(".right .industry-card");

const totalSteps = 4;

ScrollTrigger.create({

    trigger:".industries-scroll-section",

    start:"top top",

    end:"+=3000",

    pin:true,

    scrub:1,

    anticipatePin:1,

    onUpdate:(self)=>{

        const progress = self.progress;

        let index =
        Math.floor(progress * totalSteps);

        if(index > totalSteps - 1)
            index = totalSteps - 1;

        leftCards.forEach((card,i)=>{

            card.classList.remove("active","behind");

            if(i === index){

                card.classList.add("active");

            }else if(i < index){

                card.classList.add("behind");

            }

        });

        rightCards.forEach((card,i)=>{

            card.classList.remove("active","behind");

            if(i === index){

                card.classList.add("active");

            }else if(i < index){

                card.classList.add("behind");

            }

        });

    }

});












// industry expand

document.querySelectorAll(".view-more-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const row = btn.closest(".industry-row");

        document.querySelectorAll(".industry-row").forEach(item => {

            if(item !== row){

                item.classList.remove("expanded");

                const otherBtn =
                item.querySelector(".view-more-btn");

                if(otherBtn){

                    otherBtn.textContent = "View More";
                }
            }

        });

        row.classList.toggle("expanded");

        btn.textContent =
        row.classList.contains("expanded")
        ? "Close"
        : "View More";

    });

});