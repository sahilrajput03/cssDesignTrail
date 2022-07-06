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
	rootMargin: '0px 0px -200px 0px',
	threshold: 0,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach((entry, idx) => {
		const isOnPage = entry.isIntersecting

		if (isOnPage) {
			preloadImage(entry.target)
			log('Img loaded for:', idx)
			entry.target.classList.add('.slide')
			imgObserver.unobserve(entry.target)
		} else {
			return
		}
	})
}, imgOptions)

images.forEach((image) => {
	imgObserver.observe(image)
})
