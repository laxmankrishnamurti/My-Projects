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