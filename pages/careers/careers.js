document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline();

    tl.to(".hero-label",{
        opacity:1,
        y:0,
        duration:.3
    })

    .to(".hero-title span",{
        opacity:1,
        y:0,
        rotate:0,
        filter:"blur(0px)",
        duration:1,
        stagger:.15,
        ease:"power4.out"
    },"-=0.3")

    .to(".careers-hero p",{
        opacity:1,
        y:0,
        duration:.6
    },"-=0.4")

    .to(".hero-actions",{
        opacity:1,
        y:0,
        duration:.8
    },"-=0.4");

});











// PERKS

const panels = document.querySelectorAll(".benefit-panel");
const links = document.querySelectorAll(".benefit-link");
const progress = document.querySelector(".sidebar-progress");

let current = 0;

function updateActiveSection() {

    let found = false;

    panels.forEach((panel, index) => {

        const rect = panel.getBoundingClientRect();

        if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
        ) {
            current = index;
            found = true;
        }
    });

    if (!found) return;

    links.forEach(link =>
        link.classList.remove("active")
    );

    links[current].classList.add("active");

    progress.style.top =
        links[current].offsetTop + "px";
}

window.addEventListener("scroll", updateActiveSection);

updateActiveSection();



const benefitLinks =
document.querySelectorAll(".benefit-link");

benefitLinks.forEach(link => {

    link.addEventListener("click", () => {

        const targetId =
        link.dataset.target;

        const target =
        document.getElementById(targetId);

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

        }

    });

});




// JOB FILTERING 


document.addEventListener("DOMContentLoaded", () => {


/* ==========================================
   JOB FILTERING
========================================== */

const departmentFilter =
document.getElementById("departmentFilter");

const locationFilter =
document.getElementById("locationFilter");

const typeFilter =
document.getElementById("typeFilter");

const jobs =
document.querySelectorAll(".job-item");

function filterJobs() {

    if (
        !departmentFilter ||
        !locationFilter ||
        !typeFilter
    ) return;

    const department =
    departmentFilter.value;

    const location =
    locationFilter.value;

    const type =
    typeFilter.value;

    jobs.forEach(job => {

        const jobDepartment =
        job.dataset.department;

        const jobLocation =
        job.dataset.location;

        const jobType =
        job.dataset.type;

        const departmentMatch =
            department === "all" ||
            department === jobDepartment;

        const locationMatch =
            location === "all" ||
            location === jobLocation;

        const typeMatch =
            type === "all" ||
            type === jobType;

        if (
            departmentMatch &&
            locationMatch &&
            typeMatch
        ) {

            job.style.display = "flex";

        } else {

            job.style.display = "none";

        }

    });

}

if(departmentFilter){

    departmentFilter.addEventListener(
        "change",
        filterJobs
    );

    locationFilter.addEventListener(
        "change",
        filterJobs
    );

    typeFilter.addEventListener(
        "change",
        filterJobs
    );

}

/* ==========================================
   BENEFITS SIDEBAR
========================================== */

const panels =
document.querySelectorAll(".benefit-panel");

const links =
document.querySelectorAll(".benefit-link");

const progress =
document.querySelector(".sidebar-progress");

function updateActiveSection() {

    if(
        !panels.length ||
        !links.length ||
        !progress
    ) return;

    let current = 0;

    panels.forEach((panel,index)=>{

        const rect =
        panel.getBoundingClientRect();

        if(
            rect.top <=
            window.innerHeight * 0.4 &&

            rect.bottom >=
            window.innerHeight * 0.2
        ){

            current = index;

        }

    });

    links.forEach(link =>
        link.classList.remove("active")
    );

    links[current]
        .classList.add("active");

    const activeLink =
    links[current];

    progress.style.top =
    activeLink.offsetTop + "px";

}

window.addEventListener(
    "scroll",
    updateActiveSection
);

updateActiveSection();

/* ==========================================
   SIDEBAR CLICK SCROLL
========================================== */

links.forEach((link,index)=>{

    link.addEventListener("click",()=>{

        const panel =
        panels[index];

        if(!panel) return;

        const y =
            panel.getBoundingClientRect().top +
            window.pageYOffset -
            120;

        window.scrollTo({

            top:y,

            behavior:"smooth"

        });

    });

});


});



/* ===================================
   OPENINGS HEADER REVEAL
=================================== */

const openingsHeader =
document.querySelector(".openings-header");

if(openingsHeader){

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                openingsHeader.classList.add("show");

            }

        });

    },{
        threshold:.3
    });

    observer.observe(openingsHeader);
}