// grab element from dom
const navToggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar__links');


navToggleBtn.addEventListener('click', ( e => {
    navLinks.classList.toggle('navbar__links--visible');
}))


// update copyright year automatically
// get year updated using getFullYear() js function
const copyrightYear = document.getElementById('js-update-year');
const theCurrentDate = new Date();

const theCurrentYear = theCurrentDate.getFullYear();
copyrightYear.textContent = theCurrentYear;

