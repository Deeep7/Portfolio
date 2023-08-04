//console.log("hallo");
let btn = document.getElementById("dark-btn");
let btnsun = document.getElementById("sun");
let btnmoon = document.getElementById("moon");
let nav = document.getElementById("nav");

let btn1 = document.getElementById("mobile-btn");
let ul = document.getElementById("ul");
let section = document.getElementById("section");
let name = document.getElementById("name");
let x = document.getElementById("x");
let m = document.getElementById("m");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  nav.classList.toggle("bg-dark");
  ul.classList.toggle("bg-dark");
  btnsun.classList.toggle("display-none");
  btnmoon.classList.toggle("display-none");
});

btn1.addEventListener("click", () => {
  ul.classList.toggle("visible");
  section.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});
