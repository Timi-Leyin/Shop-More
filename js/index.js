"use strict";
window.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".nav-bar>.hamburger");
    const navlink = document.querySelector(".nav-bar>.nav-links");
    const navlinks = document.querySelectorAll("  .nav-bar>.nav-links li");
    const drkModeSwitch = document.querySelector(".nav-bar .drk");
    const drkModeInfo = document.querySelector(".nav-bar .drk .info");

    const stylesheet = document.querySelector("#stylesheet");

    hamburger.addEventListener("click", function () {
        navlink.classList.toggle("active");
        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.toggle("active");
        }
    });

    // init swipper js
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        slidesPerView: 6,
        centeredSlides: true,
        mousewheel: true,
        loop: true,
        lazy: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
        keyboard: {
            enabled: true,
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
           300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }
      });
    //   check if device is online

if(navigator.onLine){
    console.log('Online')
}else{
    console.log('Offline')
}
// ******************

// onscroll

function init(el,delay, className){
    const elmnt=document.querySelectorAll(el);
    for(let i=0; i< elmnt.length; i++){
        elmnt[i].getBoundingClientRect().top;
    }
}
window.onscroll=function (params) {
    init()
}


//     const preferDarkScheme=window.matchMedia('(prefers-color-scheme: dark)')
// console.log(preferDarkScheme.matches)
// preferDarkScheme.addEventListener('onchange',()=>{

//     preferDarkScheme.matches ? darkModeToggler : console.log('none')
// })

// initDarkMode
    
    if(localStorage){
        let storage = localStorage;
        stylesheet.setAttribute("href", storage.getItem("theme"));
        drkModeInfo.textContent=localStorage.getItem('theme-mode');
    }else{
        localStorage.setItem("theme", stylesheet.getAttribute("href"));
    }

    // dark mode toggler

    function darkModeToggler(){
        if (localStorage.getItem("theme") === "./css/index.css") {
            localStorage.setItem("theme", "./css/dark.css");
            localStorage.setItem('theme-mode', 'Light Mode')
         } else {
             localStorage.setItem("theme", "./css/index.css");
            localStorage.setItem('theme-mode', 'Dark Mode')

         }

         stylesheet.setAttribute("href", localStorage.getItem("theme"));
         drkModeInfo.textContent=localStorage.getItem('theme-mode');
    }
// Dark mode click event
       drkModeSwitch.addEventListener("click",darkModeToggler);
});
