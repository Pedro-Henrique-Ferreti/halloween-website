/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink =  document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  (this.scrollY >= 50)
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: 'true',
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/