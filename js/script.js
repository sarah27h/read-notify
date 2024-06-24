// grab element from dom
const navToggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar__links');


navToggleBtn.addEventListener('click', ( e => {
    navLinks.classList.toggle('navbar__links--visible');
}))