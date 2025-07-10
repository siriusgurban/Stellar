"use strict";

AOS.init();

const hero = document.querySelector("#hero"); // your hero section
const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector("#ham_menu");
  const hamIcon = document.querySelector("#ham_icon");
  const sideNav = document.querySelector("#sideNav");
  const navLinks = sideNav.querySelectorAll(".nav_item a");

  hamMenu.addEventListener("click", function () {
    hamIcon.classList.toggle("open"); // Toggle hamburger icon state
    sideNav.classList.toggle("side_nav");
    header.classList.toggle("nav_header");
  });

  // Close menu when any nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamIcon.classList.remove("open");
      sideNav.classList.remove("side_nav");
      header.classList.remove("nav_header");
    });
  });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav_item");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    const anchor = item.querySelector("a");

    const href = anchor.getAttribute("href");

    item.classList.remove("nav_active");

    // Check if href matches current section
    if (href === `#${currentSectionId}`) {
      item.classList.add("nav_active");
    }

    // Optional: reset to 'Home' if scrolled to top
    if (window.scrollY < 200 && href === "./index.html") {
      item.classList.add("nav_active");
    }
  });
});
