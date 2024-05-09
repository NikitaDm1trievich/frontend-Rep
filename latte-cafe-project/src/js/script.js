
/* Настраиваем показ меню */
let menuButton = document.querySelectorAll('.menu__button');
menuButton.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('._menu-button-active').classList.remove('_menu-button-active');
        element.classList.add('_menu-button-active');
        document.querySelector('._menu-img-active').classList.remove('_menu-img-active');
        document.querySelector(`#${element.dataset.menu}`).classList.add('_menu-img-active');
    }) 
});