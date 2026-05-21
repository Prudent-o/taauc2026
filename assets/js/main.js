(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector("#header");
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function toggleScrolled() {
    if (!header) {
      return;
    }
    if (!header.classList.contains("fixed-top")) {
      return;
    }
    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  }

  function mobileNavToggle() {
    body.classList.toggle("mobile-nav-active");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach((navLink) => {
    navLink.addEventListener("click", () => {
      if (body.classList.contains("mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", () => {
    toggleScrolled();
    initAOS();
  });
})();
