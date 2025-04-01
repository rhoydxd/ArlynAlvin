document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    ".navigation__mobile-toggle-menu"
  );
  const mobileMenu = document.querySelector(
    ".navigation__mobile-menu-items-container"
  );
  const navigationBar = document.querySelector(".navigation__mobile-flex");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    navigationBar.classList.toggle("active");
  });
});
