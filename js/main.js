const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header')

burger.addEventListener('click', () => {
    //console.log(123);
    header.classList.toggle('active');

})