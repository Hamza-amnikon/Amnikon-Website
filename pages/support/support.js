/* ==========================================================
   SUPPORT PAGE
========================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================
   HERO ANIMATION
========================================================== */

const heroTimeline = gsap.timeline();

heroTimeline
.from(".support-badge",{
    y:30,
    opacity:0,
    duration:.6,
    ease:"power3.out"
})

.from(".support-hero h1",{
    y:60,
    opacity:0,
    duration:.8,
    ease:"power4.out"
},"-=0.2")

.from(".support-hero p",{
    y:40,
    opacity:0,
    duration:.8,
    ease:"power3.out"
},"-=0.5")

.from(".support-hero .btn",{
    y:25,
    opacity:0,
    duration:.6,
    ease:"power3.out"
},"-=0.4");


/* ==========================================================
   SUPPORT CARDS
========================================================== */

gsap.from(".support-option-card",{

    scrollTrigger:{
        trigger:".support-options",
        start:"top 80%"
    },

    y:80,
    opacity:0,
    stagger:.2,
    duration:.8,
    ease:"power3.out"

});


/* ==========================================================
   TICKET CARD
========================================================== */

gsap.from(".ticket-card",{

    scrollTrigger:{
        trigger:".ticket-card",
        start:"top 80%"
    },

    y:80,
    opacity:0,
    duration:1,
    ease:"power3.out"

});


/* ==========================================================
   FLOATING CARD
========================================================== */

gsap.to(".ticket-card",{

    y:10,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});


/* ==========================================================
   INPUT FOCUS EFFECT
========================================================== */

document.querySelectorAll(".form-control").forEach(input=>{

    input.addEventListener("focus",()=>{

        gsap.to(input,{
            scale:1.02,
            duration:.2
        });

    });

    input.addEventListener("blur",()=>{

        gsap.to(input,{
            scale:1,
            duration:.2
        });

    });

});


/* ==========================================================
   BUTTON HOVER
========================================================== */

const submitButton=document.getElementById("submitBtn");

if(submitButton){

    submitButton.addEventListener("mouseenter",()=>{

        gsap.to(submitButton,{
            scale:1.05,
            duration:.2
        });

    });

    submitButton.addEventListener("mouseleave",()=>{

        gsap.to(submitButton,{
            scale:1,
            duration:.2
        });

    });

}


/* ==========================================================
   SUPPORT FORM
========================================================== */

const form=document.getElementById("ticketForm");

const btn=document.getElementById("submitBtn");

const success=document.getElementById("successMessage");

const error=document.getElementById("errorMessage");

if(form){

form.addEventListener("submit",async function(e){

    e.preventDefault();

    btn.disabled=true;

    btn.innerHTML="Submitting...";

    success.classList.remove("show");

    error.classList.remove("show");

    const data={

        name:document.getElementById("name").value.trim(),

        email:document.getElementById("email").value.trim(),

        subject:document.getElementById("subject").value.trim(),

        message:document.getElementById("message").value.trim()

    };

    try{

        const response=await fetch("https://wwwuat.amnikontechnologies.com/api/api/support",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result=await response.json();

        if(response.ok){

            success.innerHTML="✅ Support ticket submitted successfully.";

            success.classList.add("show");

            gsap.from(success,{
                opacity:0,
                y:20,
                duration:.5
            });

            form.reset();

        }
        else{

            error.innerHTML=result.message || "Something went wrong.";

            error.classList.add("show");

            gsap.from(error,{
                opacity:0,
                y:20,
                duration:.5
            });

        }

    }
    catch(err){

        console.error(err);

        error.innerHTML="Unable to connect to the server.";

        error.classList.add("show");

        gsap.from(error,{
            opacity:0,
            y:20,
            duration:.5
        });

    }

    btn.disabled=false;

    btn.innerHTML="Submit Ticket →";

});

}


/* ==========================================================
   PARALLAX HERO
========================================================== */

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    gsap.to(".support-hero .container",{

        y:scroll*-0.12,

        duration:.3,

        overwrite:true

    });

});