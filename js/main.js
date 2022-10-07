var myNav = document.getElementById('navbar');
const myMenu = document.getElementById('hamburger');
const myHam = document.getElementById('hamburger-line');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        
    }
};

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper('.testimonial-container', {
//     loop: true,
//     grabCursor: true,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynmaicBullets: true,
//     },

//     breakpoints:{
//         568:{
//             slidesPerView: 3,
//         }
//     },
//     spaceBetween: 48,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
    
// });

// mobile navbar toggle
// const menuToggler = document.getElementById('link-toggle');
// const menuToggle = document.getElementById('menu-tog');

// menuToggler.addEventListener('click', () =>{
//     menuToggle.classList.add('menu-toggle');
// })


const navLink = document.querySelectorAll('.link-toggle')

function linkAction(){
    const navMenu = document.getElementById('menu-tog')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('menu')

}
navLink.forEach( n => n.addEventListener('click', linkAction));