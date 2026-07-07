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
        
<li class="mobile-buttons">

    <a href="../support/support.html" class="btn btn-support">
        Support
    </a>

    <a href="../contact/contact.html" class="btn btn-primary">
        Contact Us
    </a>

</li>
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

/* ==========================================
   AMNIKON NAVBAR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("nav-hamburger");
    const nav = document.getElementById("main-nav");

    if (!navbar || !hamburger || !nav) return;

    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    function handleScroll() {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    /* ==========================================
       MOBILE MENU
    ========================================== */

    hamburger.addEventListener("click", function (e) {

        e.stopPropagation();

        hamburger.classList.toggle("open");

        nav.classList.toggle("mobile-open");

    });

    /* ==========================================
       MOBILE DROPDOWN
    ========================================== */

    document.querySelectorAll(".has-dropdown > a").forEach(link => {

        link.addEventListener("click", function (e) {

            if (window.innerWidth > 992) return;

            e.preventDefault();

            const parent = this.parentElement;

            document.querySelectorAll(".has-dropdown").forEach(item => {

                if (item !== parent) {

                    item.classList.remove("open");

                }

            });

            parent.classList.toggle("open");

        });

    });

    /* ==========================================
       CLOSE WHEN LINK CLICKED
    ========================================== */

    document.querySelectorAll(".dropdown-menu a, .nav-menu > li:not(.has-dropdown) > a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth > 992) return;

            closeMenu();

        });

    });

    /* ==========================================
       CLICK OUTSIDE
    ========================================== */

    document.addEventListener("click", function (e) {

        if (window.innerWidth > 992) return;

        if (!navbar.contains(e.target)) {

            closeMenu();

        }

    });

    /* ==========================================
       RESIZE
    ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            closeMenu();

        }

    });

    /* ==========================================
       ESC
    ========================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

    /* ==========================================
       CLOSE MENU
    ========================================== */

    function closeMenu() {

        hamburger.classList.remove("open");

        nav.classList.remove("mobile-open");

        document.querySelectorAll(".has-dropdown").forEach(item => {

            item.classList.remove("open");

        });

    }

});