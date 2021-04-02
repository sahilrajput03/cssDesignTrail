# Wow with clearer css to set data-sets

- Check amazing codepen made by kevin, yikes! : https://codepen.io/sahilrajput03/pen/JjEEWBQ

- Check the wrong practise: https://codepen.io/sahilrajput03/pen/BappRxP

## learn

I tried to change the attribute to root, but didn't succeed, and find out i should only use body from now on.

Trying to change :root's attribute DON'T WORK BUT ONLY MAKES YOU GO CRAZY around it: https://codepen.io/sahilrajput03/pen/BappRxP

mdn links:

- https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
-

```bash
:root isn't body

:root is the html element. So setting the bg colour on body didn't change the html bg colour

https://developer.mozilla.org/en-US/docs/Web/CSS/:root

document.body in the JS code is referring specifically to the body

setting variables in :root is wonderful because they are inherited by everything and thus can be changed on a per-element basis. But you shouldn't set any other properties on :root
unless you really need to. 99.99999999999% of the time you want to modify body instead

me :: ohhhh!!! I get it!!! You mean i am actually changing the body's data-theme property, but can't we change :root's data-theme attribute..? THAT IS WHAT I WANT!!!

Basically, :root = <html>, which is what you set the bg colour on. Since the body element didn't have a bg colour set, adding var(--clr) didn't do anything because the body element
didn't use it Well, yes, you can change :root but it's best practice not to

Like I said above, you should modify body instead. There is no reason I can think of that would require root modification

D, i want to change :root's attribute via js, thats my question :)...

If you want to modify the html element, you use https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement But again, I advise against it. It's better to do all
modifications on the body element instead In any case, I gotta get to a chiropractor appointment. Peace out, y'all :v:

i can't solve it :frowning:

https://codepen.io/sahilrajput03/pen/BappRxP

```
