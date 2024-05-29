'use strict'

// ELEMENT TOGGLE FUNCTION

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// NAVBAR TOGGLE 

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
console.log(navbarLinks)

const navElemArr = [overlay, navCloseBtn, navOpenBtn]

// CLOSE NAVBAR WHEN WHEN CLICK ON ANY NAVBAR LINK

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

// ADD EVENT ON ALL ELEMENTS FOR TOGGLING NAVBAR

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    })
}



//  HEADER ACTIVE STATE : STICKY NAVBAR

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove("active");
})




