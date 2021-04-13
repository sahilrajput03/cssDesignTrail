# CssDesignTrail

This is my personal repo for myself, its kinda cheat sheet.

**TIP**: Use

## FAQ's

### What all do i know in plain css ??

Use command `live-server` to serve the whole project and navigate to different directories to view them.

- Want a color theme: https://coolors.co/generate ~ 🛌︎ sleeper.

### What is `:root` and why do we use it?

`:root` css selector has the highest specificity, and we use it define global things, it could be vars or css properties.

### What is `*` and why do we use it?

`*` is a universal selector that selects every css element, yo!

### Want to make font sizes custom for different sizes of devices, just use css vars for that.

Source, timestamped in yt video [here](https://youtu.be/ykn4XNDwW7Q?t=1212).

### Want to get a demo image fast..?

Try downloading image from below urls: (note: each time url is accessed img changes, so better download it and have it locally.)

Below will give you a square image, but if you want a custom rectangular shape of photo, you can do that via https://unsplash.it/300/400, and it will give you a photo of size
width:height as 300:400.

```bash
https://unsplash.it/100
https://unsplash.it/200
https://unsplash.it/300
...
https://unsplash.it/900
https://unsplash.it/1000
https://unsplash.it/... and so on...

###
#Get a custom sized photo instead of square one via below:
https://unsplash.it/300/400
```

### What is that called when you get to scroll horizontal scroll.?

Side scrolling.

### Specificity

Learn about specificity [here](https://www.youtube.com/watch?v=c0kfcP_nD9E&ab_channel=KevinPowell), amazing exaplanation about inline style, internal css, external style sheets,
and what now, say: classes or id or selector(say (div p p)) or `!important`, this vid is all you need to know about specificity.

### Tip: Use colors with hash

```bash
#000 black
#111
...
#999
#aaa
...
#eee
#fff white
* All in-between shades are grey shades.

```

### Depressed of calculating actual width of a HTML element via formula `actual-width= (width+2*padding+2*margin)` and `actual-height= (height+2*padding+2*margin)` , so use border-box from now!!

[source](https://youtu.be/WlGQdgy-M6w).

#### Way 1

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

#### Way 2

- The benefit of using below code way `i.e., inherit way` is that all lower elements of a element that you define with `box-sizing: content-box;` explicitly to be able to use that,
  then all the children elements in that would use that too, as with universal selector we are saying to all elements to just inherit from its parent in the hierarchy. Hacky, isn't
  it..? If you feel its Hacky, simply use the **Way 1** though.

```css
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
```

Note: Default value of `box-sizing is content-box`, so you must hate it. :D

### Other things

- Browser fallback(i.e, to make Internet explore work with css variables too. ) - Watch it out here
  [how to fix](https://www.youtube.com/watch?v=kCmL-O2T7DY&ab_channel=KevinPowell). Also, you may use SASS to fix browser fallback pretty nicely as kevin suggets
  [here](https://youtu.be/wI80oS3KLxY), I didn't look at that though..

- Manipulating css variables with js [here](https://www.youtube.com/watch?v=cZ0yt67A7OM&ab_channel=KevinPowell).

- Browse css variables playlist from kevin [here](https://www.youtube.com/playlist?list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi).

- Checkout my codesandbox example for cssvars using react(it has the plain html represetation too(i.e., without styled components too)),
  [get it here](https://codesandbox.io/s/css-variables-vs-themeprovider-with-my-custom-bare-popeye-class-addition-j16bc?file=/src/css-vars/vars.css).

## Free ?

Watch video [here](https://youtu.be/KYFwcIRx16g).

## what is rem/em ?

1 em/rem = 16px

## Selectors

```css
/* src: https://www.w3schools.com/css/css_selectors.asp */
/* in this example only <p> elements with class="center" will be red and center-aligned: */
p.center {
  text-align: center;
  color: red;
}

/* ******** */
.split > * + * {
  /* This above selector is adjacent item selector, that means that only second element will be selected. */
  margin-left: 2em;
  /* If i had "> * + * + *" as selector, then the third element will be selected, yo!! */
}
/* implemented in 01-design-with-notes */
/* ******** */

/* For debugging... */
debug {
  border: 5px solid deeppink;
}
```

## Woop.css

```css
/* continue from here: https://youtu.be/bn-DQCifeQQ?t=1772 */
/* units: 5vh = 5 viewport height, 5vw = 5 viewport width. */
/** SHORTHANDS */
/* the keyword e1, e2 means example1, example2, etc. */
.e1-shorthand {
  width: min(90%, 70.5rem);
}
.e1 {
  width: 90%;
  max-width: 70.5rem;
}
/*  */
.e2 {
  margin-bottom: 1rem;
  /* rem basically means equal to the font size, yikes!! */
}
/*  */

/* Notes .. */
/* Notes .. */
/* Notes .. */
/* Notes .. */
/* TODO */
/* look at min-max video of kevin powell now...! */
/* watch the rem video of kevin powell.. */

img {
  /* This sets the width of image to be automatic aligned to 100% of the width of screen, yo!! */
  max-width: 100%;
}

/* ******** */
/* shorthand */
img {
  width: 70%;
  max-width: 600px;
}
img {
  width: min(500px, 70%);
  /* min function basically computed 70% of the available area and check what is minimum i.e., 500px or our calculated 70%. */
  /* This is shorthand of above, yikes!! */
}
/* ****** */
img {
  width: max(500px, 70%);
}
img {
  width: 70%;
  min-width: 500px;
  /* This is shorthand way, yo!! */
}

/* ************ */

img {
  width: min(500px + 10%, 600px);
  /* Note you must have space around `+` otherwise math won't work! */
}
/* ************ */
img {
  width: clamp(200px, 50%, 20rem);
}

img {
  width: 50%;
  /*(test by shrinking the viewport) if 50% of width is less than 200px, then set `width: 200px;` otherwise `width: 50%;` */
  min-width: 200px;
  /*(test by growing the viewport) if 50% of width is greater than 25rem, then set `width: 25rem;` otherwise use `width: 50%;`*/
  max-width: 25rem;
  /* You may also test this via `max-width: 700px;` */
}
```

## em vs. rem

```css
/* 1em = 16px unless the element's parent has a value for that property set. */
/* The interesting thing about em is that it compounds over children(nesting makes the size multiply by the parent and so on.. */
/* Another interesting thing about em is that if setting property for padding/magin/etc. their value gets evaluated using the font-size value of that element if set(otherwise using the value set in parent). */

/* * em is really really good, as it allows us to size margins/paddings automatically proportional to our font-sizes. */
/* more.. */
/* padding: 1em 3em; */
/* more.. */

/*  */

/* 2em=32px */

/* *********************8 */
/* rem stands for root em, yo! */

/*  */

p {
  margin: 2rem;
  /* here, 2rem evaluates by looking what value for font-size we have set for html i.e., html{font-size: ** } */
  /* And that makes rem to be absolute(only relative to html tag), and thats why its good!! */
  /* Though, em is always gets multiplied from the parent's evaluated value(and parent too gets evaluate its value from its parent, and so on..). */
}

/* valid shorthands i.e., without preceiding 0 before the dot. */
p {
  margin: 0.2rem;
}

p {
  margin: 0.2em;
  text-transform: uppercase;
  letter-spacing: 5px;
  /* ^^ This is useful say for a `BUY NOW` button in html. */
}
/* src: amazing video about em and rem from kevin powell: https://www.youtube.com/watch?v=_-aDOAMmDHI */
```
