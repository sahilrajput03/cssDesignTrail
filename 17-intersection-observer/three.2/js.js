// @ts-nocheck
let log = console.log

const images = document.querySelectorAll('[data-src]')

// log(images)

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
	// rootMargin: '-250px',
	rootMargin: '-250px 0px', // i.e., 'top+bottom left+righ'
	threshold: 0,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	// ? Note I am not using entries.forEach here?
	// ? Learn: This setup seems to work but kevin used that way and i think kevin's way is doing extra work by calling callback for
	// Note: On page load this callback will get all elements i.e, each 5 img tags but after that the callback will have only single entry in the `entries` binding i.e., for which the intersection event has happened or not.
	log({entries})

	// log({entries})

	const entry = entries[0]
	const isOnPage = entry.isIntersecting

	if (isOnPage) {
		log('OnPage')
		preloadImage(entry.target)
		// log('Img loaded for:', idx)
		entry.target.classList.add('slide')

		// Unobserve now:
		// imgObserver.unobserve(entry.target)
	} else {
		entry.target.classList.remove('slide')
		log('NotOnPage')
	}
}, imgOptions)

images.forEach((image) => {
	imgObserver.observe(image)
})

//! Alert: This throws error:
//! Uncaught TypeError: Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'Element'.
// imgObserver.observe(images)
