const mobileMenu = document.getElementById("mobileMenu");
const mobileSidebar = document.getElementById("mobileSidebar");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function openMobileMenu() {
  mobileSidebar.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileSidebar.classList.remove("active");
  document.body.style.overflow = "";
}

function handleClickOutside(event) {
  if (
    mobileSidebar.classList.contains("active") &&
    !mobileSidebar.contains(event.target) &&
    event.target !== mobileMenu
  ) {
    closeMobileMenu();
  }
}

// Event Listeners
mobileMenu.addEventListener("click", openMobileMenu);
mobileCloseBtn.addEventListener("click", closeMobileMenu);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && mobileSidebar.classList.contains("active")) {
    closeMobileMenu();
  }
});

document.addEventListener("mousedown", handleClickOutside);
