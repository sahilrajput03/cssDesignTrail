const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const containerAll = document.querySelector('.container-all')

const containerAllstyle = containerAll.style
const bodyClassList = document.body.classList

navToggle.addEventListener('click', function () {
	//containerAllstyle.transition = 'transform 250ms ease-in-out' in  _nav.scss file we need to remove the code for transition for containerAll class
	bodyClassList.toggle('nav-is-open')
	// arrow function example: https://www.w3schools.com/js/js_arrow_function.asp
})

nav.addEventListener('click', function () {
	//containerAllstyle.transition = '0ms'
	bodyClassList.remove('nav-is-open')
})
