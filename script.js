"use strict";

let togglebtn = document.querySelector(".nav__togglebtn");
let navbar = document.querySelector(".nav");
let navMenu = document.querySelector(".nav__menu");
let navEtc = document.querySelector(".nav__etc");
togglebtn.onclick = function () {
  navbar.classList.toggle("active");
  navMenu.classList.toggle("active");
  navEtc.classList.toggle("active");
};
