export const toggleNav = () => {
    const burgerButton = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav')

    burgerButton?.addEventListener('click', () => {
        nav?.classList.toggle('header__nav_active');
        burgerButton?.classList.toggle('header__burger_active');
    })
}