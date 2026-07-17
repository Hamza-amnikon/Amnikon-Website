/* ===========================================================
   AMNIKON PROJECTS
   Netflix Style Slider + Modal (fixed)
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /*=========================================================
        ELEMENTS
    =========================================================*/
  const slider = document.querySelector(".project-slider");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");
  const cards = document.querySelectorAll(".project-card");
  const modal = document.querySelector(".project-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTech = document.getElementById("modal-tech");
  const demoLink = document.getElementById("demo-link");
  const githubLink = document.getElementById("github-link");
  const closeModal = document.querySelector(".close-modal");

  if (!slider || !modal) {
    console.warn("Slider or modal element not found — check your selectors.");
    return;
  }

  const scrollAmount = 450;
  let activeCard = null;
  let isDragging = false;
  let startX = 0;
  let startScroll = 0;

  /*=========================================================
        SLIDER SCROLL
    =========================================================*/
  function scrollSlider(distance) {
    slider.scrollBy({ left: distance, behavior: "smooth" });
  }

  leftBtn?.addEventListener("click", () => scrollSlider(-scrollAmount));
  rightBtn?.addEventListener("click", () => scrollSlider(scrollAmount));

  /*=========================================================
        SLIDER BUTTON STATE (single source of truth)
    =========================================================*/
  function updateSliderButtons() {
    if (!leftBtn || !rightBtn) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const atStart = slider.scrollLeft <= 5;
    const atEnd = slider.scrollLeft >= maxScroll - 5;

    leftBtn.disabled = atStart;
    leftBtn.style.opacity = atStart ? ".35" : "1";
    leftBtn.style.pointerEvents = atStart ? "none" : "auto";

    rightBtn.disabled = atEnd;
    rightBtn.style.opacity = atEnd ? ".35" : "1";
    rightBtn.style.pointerEvents = atEnd ? "none" : "auto";
  }

  slider.addEventListener("scroll", updateSliderButtons);
  window.addEventListener("resize", updateSliderButtons);
  updateSliderButtons();

  /*=========================================================
        MOUSE WHEEL (horizontal scroll)
    =========================================================*/
  slider.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    },
    { passive: false }
  );

  /*=========================================================
        DRAG SUPPORT
    =========================================================*/
  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScroll = slider.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseleave", () => {
    isDragging = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const distance = (e.pageX - startX) * 2;
    slider.scrollLeft = startScroll - distance;
  });

  /*=========================================================
        CARD HOVER
    =========================================================*/
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (card.classList.contains("active")) return;
      gsap.to(card, { scale: 1.04, duration: 0.25, overwrite: true });
    });

    card.addEventListener("mouseleave", () => {
      if (card.classList.contains("active")) return;
      gsap.to(card, { scale: 1, duration: 0.25, overwrite: true });
    });
  });

  /*=========================================================
        OPEN MODAL
    =========================================================*/
  function openProject(btn) {
    activeCard = btn.closest(".project-card");
    if (!activeCard) return;

    slider.classList.add("active");

    cards.forEach((card) => {
      card.classList.remove("active");
      gsap.set(card, { clearProps: "transform" });
    });

    activeCard.classList.add("active");

    const sliderWidth = slider.clientWidth;
    const cardWidth = activeCard.offsetWidth;
    const cardLeft = activeCard.offsetLeft;

    slider.scrollTo({
      left: cardLeft - sliderWidth / 2 + cardWidth / 2,
      behavior: "smooth",
    });

    // Guarded dataset reads — won't throw or write "undefined" if a card is missing data
    modalTitle.textContent = btn.dataset.title || "";
    modalImage.src = btn.dataset.image || "";
    modalImage.alt = btn.dataset.title || "Project image";
    modalDescription.textContent = btn.dataset.description || "";
    demoLink.href = btn.dataset.demo || "#";
    githubLink.href = btn.dataset.github || "#";

    modalTech.innerHTML = "";
    (btn.dataset.technologies || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((tech) => {
        const badge = document.createElement("span");
        badge.textContent = tech;
        modalTech.appendChild(badge);
      });

    setTimeout(() => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        ".modal-content",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }, 350);
  }

  /*=========================================================
        CARD EVENTS (click + keyboard)
    =========================================================*/
  document.querySelectorAll(".project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openProject(btn);
      btn.blur();
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(btn);
      }
    });

    // Accessibility label
    if (btn.dataset.title) {
      btn.setAttribute("aria-label", btn.dataset.title);
    }
  });

  /*=========================================================
        CLOSE MODAL (single definition)
    =========================================================*/
  function closeProjectModal() {
    gsap.to(".modal-content", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.remove("active");
      },
    });

    document.body.style.overflow = "";
    slider.classList.remove("active");

    cards.forEach((card) => {
      card.classList.remove("active");
      gsap.to(card, {
        scale: 1,
        duration: 0.25,
        overwrite: true,
        clearProps: "transform",
      });
    });

    activeCard = null;
  }

  closeModal?.addEventListener("click", closeProjectModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }

    // Arrow-key slider navigation, only when modal is closed
    if (!modal.classList.contains("active")) {
      if (e.key === "ArrowRight") scrollSlider(scrollAmount);
      if (e.key === "ArrowLeft") scrollSlider(-scrollAmount);
    }
  });

  /*=========================================================
        IMAGE PRELOAD
    =========================================================*/
  document.querySelectorAll(".project-btn").forEach((btn) => {
    if (!btn.dataset.image) return;
    const image = new Image();
    image.src = btn.dataset.image;
  });
});