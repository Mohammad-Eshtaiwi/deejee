'use strict';

// nav bar menu
const menu = document.querySelector('.burger');
const navList = document.querySelector('.main-nav');
const closeBtn = document.querySelector('.close');
const body = document.querySelector('body');

function toggleNavList() {
  console.log('hi');
  navList.classList.toggle('show-list');
  navList.classList.toggle('right-to-left-f');
  body.classList.toggle('overflow-hidden');
}
menu.addEventListener('click', toggleNavList);
function close() {
  console.log('hi');
  navList.classList.toggle('show-list');
  navList.classList.toggle('right-to-left-f');
  body.classList.toggle('overflow-hidden');
}
closeBtn.addEventListener('click', close);

function hideDropdown(event) {
  console.log('hi');
  console.log(event.path[0].children);
  event.path[0].children[0].style.display = 'none';
}

// Glide
// const glide = document.querySelector('.glide');
new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  gap: 20,
  bound: true,
  autoplay: 3000,
  breakpoints: {
    955: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
}).mount();
