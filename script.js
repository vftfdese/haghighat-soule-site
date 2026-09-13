document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });


  /* PRODUCT FILTERS */

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


  /* SMOOTH SCROLL */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

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
