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

  const modal = document.querySelector("#videoModal");
  const videoButton = document.querySelector(".video-preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // VIDEO MODAL
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";
    videoPlayer.src = "https://www.youtube.com/embed/uGNJ5fVZESY";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
  });

  // NAVIGATION LEFT TO TOP FEATURE
  function toggleNavbarLeftTop() {
    if (window.scrollY > 0) {
      header.classList.remove("left-active");
      headerLogo.classList.remove("left-active");
      headerMenu.classList.remove("left-active");
      headerMenuItems.classList.remove("left-active");
      headerMenuSocialItems.classList.remove("left-active");
      header.classList.add("background-active");
    } else {
      header.classList.add("left-active");
      headerLogo.classList.add("left-active");
      headerMenu.classList.add("left-active");
      headerMenuItems.classList.add("left-active");
      headerMenuSocialItems.classList.add("left-active");
      header.classList.remove("background-active");
    }
  }
  window.addEventListener("scroll", toggleNavbarLeftTop);

  //MOBILE NAV TOGGLE
  mobileToggle.addEventListener("click", function () {
    mobileNavContainer.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});

window.onload = function () {
  document.body.style.visibility = "visible"; // Show content after everything loads
};
document.body.style.visibility = "hidden"; // Hide content until page loads

// DATE & TIME REMAINING FUNTION
function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  let targetDate = new Date(year, 4, 5, 0, 0, 0); // May 5 at midnight

  const timeDiff = targetDate - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).textContent = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
