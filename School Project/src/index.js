const menuButton = document.querySelector('.menu-btn-container');
const navbarWrapper = document.querySelector('.navbar-wrapper')

function showMenu() {
    navbarWrapper.style.left = '0%';
}

function hideMenu() {
    navbarWrapper.style.left = '100%'
}