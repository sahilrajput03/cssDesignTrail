const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', function (){
    document.body.classList.toggle('nav-is-open')
    // arrow function example: https://www.w3schools.com/js/js_arrow_function.asp
})



nav.addEventListener('click', function()
{
    document.body.classList.remove('nav-is-open')
})