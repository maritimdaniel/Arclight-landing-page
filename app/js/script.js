const menu = document.querySelector(".hamburger-menu");
const navContainer = document.querySelector(".navigation");
const closeBtn = document.querySelector(".close-menu");

menu.addEventListener("click", function (e) {
  navContainer.style.display = "block";
  menu.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  navContainer.style.display = "none";
  menu.style.display = "block";
  closeBtn.style.display = "none";
});
