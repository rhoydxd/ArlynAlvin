document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".navigation__flex");
  const headerLogo = document.querySelector(".navigation__logo");
  const headerMenu = document.querySelector(".navigation__desktop-menu");
  const headerMenuItems = document.querySelector(
    ".navigation__desktop-menu-items"
  );
  const headerMenuSocialItems = document.querySelector(
    ".navigation__desktop-social-items"
  );
  const mobileToggle = document.querySelector(".navigation__mobile-toggle");
  const mobileNavContainer = document.querySelector(
    ".navigation__mobile-container"
  );
  const navbar = document.querySelector(".navigation__flex");

  // NAVIGATION LEFT TO TOP FEATURE
  function toggleNavbarLeftTop() {
    if (window.scrollY > 0) {
      header.classList.remove("left-active");
      headerLogo.classList.remove("left-active");
      headerMenu.classList.remove("left-active");
      headerMenuItems.classList.remove("left-active");
      headerMenuSocialItems.classList.remove("left-active");
    } else {
      header.classList.add("left-active");
      headerLogo.classList.add("left-active");
      headerMenu.classList.add("left-active");
      headerMenuItems.classList.add("left-active");
      headerMenuSocialItems.classList.add("left-active");
    }
  }
  window.addEventListener("scroll", toggleNavbarLeftTop);

  //MOBILE NAV TOGGLE
  mobileToggle.addEventListener("click", function () {
    mobileNavContainer.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});
