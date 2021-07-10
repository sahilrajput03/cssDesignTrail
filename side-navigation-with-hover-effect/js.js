const menuIcon = document.querySelector('.hamburger')
const allItems = document.querySelector('.all-items')
const sideContainer = document.querySelector('.side-container')
const mainContent = document.querySelector('.main-content')
const subItems = document.querySelectorAll('.sub-items')
const itemContainers = document.querySelectorAll(
	'.item-container + .item-container'
)

menuIcon.addEventListener('click', () => {
	allItems.classList.toggle('toggle-visibility')
	sideContainer.classList.toggle('bg-white')
	//// allItems.offsetWidth
	mainContent.classList.toggle('toggle-translate-x')

	subItems.forEach(function (item) {
		item.classList.toggle('sub-items-extended')
	})

	itemContainers.forEach(function (item) {
		item.classList.toggle('toggle-margin-top-100px')
	})
})
