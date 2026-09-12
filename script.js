document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     Mobile Menu
  ========================= */

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (mobileMenu) {
        mobileMenu.classList.remove("open");
      }

      document.body.style.overflow = "";
    });
  });


  /* =========================
     Product Filters
  ========================= */

  const filterButtons = document.querySelectorAll(".filter-button");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedFilter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");

      productCards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");

        if (
          selectedFilter === "all" ||
          selectedFilter === cardCategory
        ) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });


  /* =========================
     Close Menu with Escape
  ========================= */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });


  /* =========================
     Smooth Anchor Scroll
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
