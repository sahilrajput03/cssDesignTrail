// src: https://youtu.be/T8EYosX4NOo
let log = console.log
// log('hello world and things to happen')

const sectionOne = document.querySelector('.section1') // in our case we have only one `.section1` class element but it there can be a number of elements with class `.section1` as well and it would work like this only.
// const sectionOne = document.querySelectorAll('.section1') // this will get all the elements with this class, instead of just one element.

// log(sectionOne)

const options = {
	root: null, // it is the view port
	threshold: 0, // default: 0, i.e.,with value as 0 the event will fire even when the smallest part is visible on viewport we have framed for our observer. (default is complete viewport)
	// you need threshold to be 1 when you want to trigger the callback when the whole item is on the screen.
	// `threshold`: Actually its the ratio of the element size, and on visibility of that region the cb will be triggered. ~sahil
	// `threshold`: value can range from 0 to 1, i.e., 0.25 would mean 25% of the element size.

	rootMargin: '0px', // default: 0px
	// rootMargin: '-150px', // this reduces the viewport to be taken into account to be 150px smaller i.e., 150px shorter from each side i.e., top, bottom, right and left.
	// rootMargin: '-150px 0px -200px 8px', // it would shrink the view port from all sides then.
}
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		// log('got entry:', entry)
		log('got entry:', entry.isIntersecting) //? isIntersection (boolean), if true means element(even if small part of it) in on screen, false means element has disappered completely from the screen.

		if (entry.isIntersecting) {
			// we can do something on the element enters the screen.
		} else {
			// we can do something on the element leaves the screen.
		}

		// we can do something on the element leaves the screen explicitly like this if we want to:
		if (!entry.isIntersecting) {
		}

		// For some reason we can unobserve any element as well:
		// observer.unobserve(entry.target)

		// We can use some methods like this as well:
		// element.classList.remove('someClass')
		// element.classList.add('someClass')
		// element.classList.toggle('someClass')
	})
}, options)

observer.observe(sectionOne)
