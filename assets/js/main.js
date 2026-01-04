(function () {
  "use strict";

  /* ===============================
     Header toggle
  =============================== */
  const headerToggleBtn = document.querySelector(".header-toggle");

  if (headerToggleBtn) {
    headerToggleBtn.addEventListener("click", () => {
      document.querySelector("#header").classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    });
  }

  /* ===============================
     Hide mobile nav on link click
  =============================== */
  document.querySelectorAll("#navmenu a").forEach(link => {
    link.addEventListener("click", () => {
      if (document.querySelector("#header").classList.contains("header-show")) {
        headerToggleBtn.click();
      }
    });
  });

  /* ===============================
     Scroll-to-top button (safe)
  =============================== */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    scrollTop.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      scrollTop.classList.toggle("active", window.scrollY > 100);
    });
  }

  /* ===============================
     AOS (safe)
  =============================== */
  if (typeof AOS !== "undefined") {
    window.addEventListener("load", () => {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  }

  /* ===============================
     Typed.js (safe)
  =============================== */
  const typedEl = document.querySelector(".typed");
  if (typedEl && typeof Typed !== "undefined") {
    const strings = typedEl.getAttribute("data-typed-items").split(",");
    new Typed(".typed", {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /* ===============================
     Navmenu Scrollspy (THIS FIXES TABS)
  =============================== */
  const navLinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    const position = window.scrollY + 200;

    navLinks.forEach(link => {
      if (!link.hash) return;

      const section = document.querySelector(link.hash);
      if (!section) return;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

})();
