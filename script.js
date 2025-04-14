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
  const mobileMenuButtons = document.querySelectorAll(
    ".navigation__mobile-menu-buttons"
  );

  const modal = document.querySelector("#videoModal");
  const videoButton = document.querySelector(".video-preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Storing Name
  // const openInviteButton = document.querySelector("#openInvitation");

  // openInviteButton.addEventListener("click", function () {
  //   const firstName = document.getElementById("name").value;
  //   alert(firstName);
  // });

  const openInviteButton = document.getElementById("openInvitation");
  if (openInviteButton) {
    openInviteButton.addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      if (name) {
        sessionStorage.setItem("guestFirstName", name);
        window.location.href = "home.html";
      } else {
        alert("Please enter your name.");
      }
    });
  }

  const firstName = document.getElementById("firstName");
  const guest = document.getElementById("guest");
  if (firstName) {
    const guestFirstName = sessionStorage.getItem("guestFirstName");
    if (guestFirstName) {
      firstName.textContent = guestFirstName;
      guest.textContent = guestFirstName;
      guest.value = guestFirstName;
    }
  }

  // RSVP Pop-out
  const rsvp = document.querySelector(".rsvp");
  const rsvpButton = document.querySelector(".rsvp-button");
  const rsvpClose = document.querySelector(".rsvp__close-button");
  const rsvpMobileButton = document.querySelector(".rsvp-mobile-button");

  rsvpButton.addEventListener("click", function () {
    openRSVP();
  });

  openRSVP = function () {
    rsvp.classList.add("active");
    venue.classList.remove("active");
    header.classList.remove("left-active");
    headerLogo.classList.remove("left-active");
    headerMenu.classList.remove("left-active");
    headerMenuItems.classList.remove("left-active");
    headerMenuSocialItems.classList.remove("left-active");
    header.classList.add("background-active");
  };

  rsvpMobileButton.addEventListener("click", function () {
    rsvp.classList.add("active");
  });

  rsvpClose.addEventListener("click", function () {
    closeRSVP();
  });

  closeRSVP = function () {
    rsvp.classList.remove("active");
    header.classList.remove("left-active");
    headerLogo.classList.remove("left-active");
    headerMenu.classList.remove("left-active");
    headerMenuItems.classList.remove("left-active");
    headerMenuSocialItems.classList.remove("left-active");
    header.classList.add("background-active");
  };

  // VENUE Pop-out
  const venue = document.querySelector(".venue");
  const venueButton = document.querySelector(".venue-button");
  const venueMobileButton = document.querySelector(".venue-mobile-button");
  const venueClose = document.querySelector(".venue__close-button");

  venueButton.addEventListener("click", function () {
    venue.classList.add("active");
    rsvp.classList.remove("active");
    header.classList.remove("left-active");
    headerLogo.classList.remove("left-active");
    headerMenu.classList.remove("left-active");
    headerMenuItems.classList.remove("left-active");
    headerMenuSocialItems.classList.remove("left-active");
    header.classList.add("background-active");
  });

  venueMobileButton.addEventListener("click", function () {
    venue.classList.add("active");
  });

  venueClose.addEventListener("click", function () {
    venue.classList.remove("active");
    header.classList.remove("left-active");
    headerLogo.classList.remove("left-active");
    headerMenu.classList.remove("left-active");
    headerMenuItems.classList.remove("left-active");
    headerMenuSocialItems.classList.remove("left-active");
    header.classList.add("background-active");
  });

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
    // Check if RSVP is active
    const isRSVPActive = rsvp.classList.contains("active");
    const isVenueActive = venue.classList.contains("active");
    // If RSVP is active, do not apply scroll changes
    if (isRSVPActive || isVenueActive) {
      return;
    }
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

  const notRSVPMobilebutton = document.querySelectorAll(".ex-rsvp");
  const notVenueMobilebutton = document.querySelectorAll(".ex-venue");

  mobileToggle.addEventListener("click", function () {
    mobileNavContainer.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  mobileMenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      mobileNavContainer.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  notRSVPMobilebutton.forEach((button1) => {
    button1.addEventListener("click", function () {
      rsvp.classList.remove("active");
    });
  });

  notVenueMobilebutton.forEach((button2) => {
    button2.addEventListener("click", function () {
      venue.classList.remove("active");
    });
  });

  let timeout;

  function startInactivityTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      window.location.href = "index.html";
    }, 120000); // 2 minutes
  }

  // Listen for activity
  ["click", "mousemove", "keydown", "touchstart"].forEach((event) => {
    document.addEventListener(event, startInactivityTimer);
  });

  startInactivityTimer();
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
