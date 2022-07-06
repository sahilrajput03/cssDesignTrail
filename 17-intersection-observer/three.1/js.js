// @ts-nocheck
let log = console.log

const images = document.querySelectorAll('[data-src]')

log(images)

const preloadImage = (img) => {
	const src = img.getAttribute('data-src')
	if (!src) {
		return
	}
	img.src = src
	// log('set src', src)
}
const imgOptions = {
	//? `rootMargin`: Learn: we can give values in px or % only.
	// rootMargin: '0px 0px -400px 0px',
	rootMargin: '-250px',
	threshold: 0,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	log({entries})

	entries.forEach((entry, idx) => {
		const isOnPage = entry.isIntersecting

		if (isOnPage) {
			preloadImage(entry.target)
			log('Img loaded for:', idx)
			entry.target.classList.add('slide')

			// Unobserve now:
			// imgObserver.unobserve(entry.target)
		} else {
			entry.target.classList.remove('slide')
		}
	})
}, imgOptions)

images.forEach((image) => {
	imgObserver.observe(image)
})
