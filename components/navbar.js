/* Navbar component — injected into every page via this script */
(function () {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
<header class="navbar" id="navbar">
  <div class="nav-container">

    <a href="../home/index.html" class="nav-logo">
      <img
        src="../../assets/logos/amnikon-logo.png"
        alt="AMNIKON Technologies"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <span class="nav-logo-text" style="display:none;">
        <span class="logo-main">AMNIKON</span>
        <span class="logo-sub">Technologies</span>
      </span>
    </a>

    <nav>
      <ul class="nav-menu">

        <li class="has-dropdown">
          <a href="#">About</a>
          <ul class="dropdown-menu">
            <li><a href="../about/company.html">Our Company</a></li>
            <li><a href="../about/team.html">Our Team</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="#">Services</a>
          <ul class="dropdown-menu">
            <li><a href="../services/services.html">All Services</a></li>
            <li><a href="../services/managed-it.html">Managed IT</a></li>
            <li><a href="../services/cloud.html">Cloud Solutions</a></li>
            <li><a href="../services/cybersecurity.html">Cybersecurity</a></li>
            <li><a href="../services/advisory.html">Advisory</a></li>
          </ul>
        </li>

        <li><a href="../industries/industries.html">Industries</a></li>
        <li><a href="../projects/index.html">Projects</a></li>
        <li><a href="../careers/careers.html">Careers</a></li>
        

      </ul>
    </nav>

    <div class="nav-actions">
      <a href="../support/support.html" class="btn btn-support">Support</a>
      <a href="../contact/contact.html" class="btn btn-primary">Contact Us</a>
    </div>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</header>
`;
})();



window.addEventListener("scroll", () => {

    const navbar =
    document.getElementById("navbar");

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener("click", (e) => {

    const hamburger =
    document.getElementById("nav-hamburger");

    const navMenu =
    document.querySelector(".nav-menu");

    if(!hamburger || !navMenu) return;

    if(e.target.closest("#nav-hamburger")){

        hamburger.classList.toggle("open");

        navMenu.classList.toggle("mobile-open");
    }

});

/* ==========================================
   MOBILE DROPDOWNS
========================================== */

/* ==========================================
NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {

  
const navbar =
document.getElementById("navbar");

if(!navbar) return;

if(window.scrollY > 80){

    navbar.classList.add("scrolled");

}else{

    navbar.classList.remove("scrolled");

}
  

});

/* ==========================================
MOBILE HAMBURGER MENU
========================================== */

document.addEventListener("click", (e) => {

  
const hamburger =
document.getElementById("nav-hamburger");

const navMenu =
document.querySelector(".nav-menu");

if(!hamburger || !navMenu) return;

if(e.target.closest("#nav-hamburger")){

    hamburger.classList.toggle("open");

    navMenu.classList.toggle("mobile-open");
}
  

});

/* ==========================================
MOBILE DROPDOWNS
========================================== */

document.addEventListener("click", (e) => {

  
if(window.innerWidth > 992) return;

const dropdownLink =
e.target.closest(".has-dropdown > a");

if(!dropdownLink) return;

e.preventDefault();

dropdownLink
    .parentElement
    .classList
    .toggle("open");
  

});

/* ==========================================
CLOSE MENU WHEN RESIZING TO DESKTOP
========================================== */

window.addEventListener("resize", () => {

  
const hamburger =
document.getElementById("nav-hamburger");

const navMenu =
document.querySelector(".nav-menu");

if(window.innerWidth > 992){

    hamburger?.classList.remove("open");

    navMenu?.classList.remove("mobile-open");

    document
        .querySelectorAll(".has-dropdown")
        .forEach(item => {

            item.classList.remove("open");

        });
}
  

});







/* ==========================================
PREMIUM NAVBAR SCROLL
========================================== */

/* ==========================================
   PREMIUM NAVBAR SCROLL
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});