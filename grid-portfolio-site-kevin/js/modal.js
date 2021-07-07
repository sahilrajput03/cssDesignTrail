const portfolioContainer = document.querySelector('.portfolio-items')

portfolioContainer.addEventListener('click', function (e) {
	//console.log(e)
	e.preventDefault()

	const modalToggle = e.target.closest('.portfolio-link')
	//console.log(modalToggle)
	//debugger

	if (!modalToggle) return

	const modal = modalToggle.parentNode.nextElementSibling
	const closeButton = modal.querySelector('.modal-close')

	const modelOpen = () => {
		modal.classList.add('is-open')
		modal.style.animation = 'modalIn 500ms forwards'
		document.body.style.overflowY = 'hidden'
	}

	const modalClose = () => {
		modal.classList.remove('is-open')
		modal.removeEventListener('animationend', modalClose)
	}
	closeButton.addEventListener('click', function () {
		modal.style.animation = 'modalOut 500ms forwards'
		modal.addEventListener('animationend', modalClose)
		document.body.style.overflowY = 'scroll'
	})

	document.addEventListener('keydown', (e) => {
		if (e.keyCode === 27) {
			modal.style.animation = 'modalOut 500ms forwards'
			modal.addEventListener('animationed', modalClose)
			document.body.style.overflowY = 'scroll'
		}
	})

	modelOpen()
})
