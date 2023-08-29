let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
btn.addEventListener("click", function () {
  btn.classList.toggle("active-mobile");
  menu.classList.toggle("active-mobile");
});
