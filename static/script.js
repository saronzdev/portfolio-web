const mobileMenu = document.getElementById("mobileMenu")
const mobileSidebar = document.getElementById("mobileSidebar")
const mobileCloseBtn = document.getElementById("mobileCloseBtn")

function openMobileMenu() {
  mobileSidebar.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeMobileMenu() {
  mobileSidebar.classList.remove("active")
  document.body.style.overflow = ""
}

mobileMenu.addEventListener("click", openMobileMenu)
mobileCloseBtn.addEventListener("click", closeMobileMenu)

const portfolio = document.getElementById("proj-portfolio")
const jewelry = document.getElementById("proj-jewelry")
const blog = document.getElementById("proj-blog")

portfolio.addEventListener("click", () => alert("Ya estás aquí! :)"))
jewelry.addEventListener("click", () => window.open("https://frank-jewelry.vercel.app/", "_blank"))
blog.addEventListener("click", () => window.open("https://infonethack.vercel.app/", "_blank"))

function handleClickOutside(event) {
  if (
    mobileSidebar.classList.contains("active") &&
    !mobileSidebar.contains(event.target) &&
    event.target !== mobileMenu
  ) {
    closeMobileMenu()
  }
}

document.addEventListener("mousedown", handleClickOutside)