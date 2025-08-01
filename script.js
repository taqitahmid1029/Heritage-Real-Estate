let hambergerIcon = document.querySelector('#bars-icon');
let navLinks = document.querySelector('#nav-links');

hambergerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('-left-full');
    navLinks.classList.toggle('left-0');
})