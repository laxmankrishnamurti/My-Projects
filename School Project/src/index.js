// SCRIPT :: Navigation Bar 

const menuButton = document.querySelector('.menu-btn-container');
const navbarWrapper = document.querySelector('.navbar-wrapper')

//Show navigation-bar on Click
function showMenu() {
    navbarWrapper.style.left = '0%';
}

//Hide navigation-bar on Click
function hideMenu() {
    navbarWrapper.style.left = '100%'
}

// SCRIPT :: Crousal (Student's list ) starts here 

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const profile = document.querySelector('.profile');
const images = document.querySelectorAll('.images');

let scroll = 1;
const length = images.length;

const nextSlide = () => {
    profile.style.transform = `translateX(-${scroll * 340}px)`;
    scroll++;
}

const getFirstSlide = () => {
    profile.style.transform = `translateX(0px)`;
    scroll = 1;
}

const prevSlide = () => {
    profile.style.transform = `translateX(-${(scroll - 2) * 340}px)`;
    scroll--;
}

const getLastSlide = () => {
    profile.style.transform = `translateX(-${(length - 3) * 340}px)`;
    scroll = lengths;
}

rightArrow.addEventListener('click', () => {
    if (scroll < length - 2) {
        nextSlide();
    } else {
        getFirstSlide();
    }
})

leftArrow.addEventListener('click', () => {
    if (scroll > 1) {
        prevSlide();
    } else {
        getLastSlide();
    }
})