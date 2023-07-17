const navBar = document.querySelector(".header-section nav .fa-bars");
const navCross = document.querySelector(".header-section nav .fa-xmark");
const navMenu = document.querySelector(".header-section nav ul");
const navLink = document.querySelectorAll(".header-section nav ul a");

navBar.addEventListener("click", ()=> {
  navMenu.classList.add("active");
});
navCross.addEventListener("click", ()=> {
  navMenu.classList.remove("active");
});
navLink.forEach(n => n.addEventListener("click", ()=> {
  navMenu.classList.remove("active");
}));