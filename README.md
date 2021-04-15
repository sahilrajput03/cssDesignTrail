# CssDesignTrail

This is my personal repo for myself, its kinda cheat sheet.

**TIP**: Use

## FAQ's

### What all do i know in plain css ??

Use command `live-server` to serve the whole project and navigate to different directories to view them.

- Want a color theme: <https://coolors.co/generate> ~ 🛌︎ sleeper.

### What is `:root` and why do we use it?

`:root` css selector has the highest specificity, and we use it define global things, it could be vars or css properties.

### What is `*` and why do we use it?

`*` is a universal selector that selects every css element, yo!

### Want to make font sizes custom for different sizes of devices, just use css vars for that

Source, timestamped in yt video [here](https://youtu.be/ykn4XNDwW7Q?t=1212).

### Want to get a demo image fast..?

**TIP**: Try using the final image link redirected from below urls: (note: each time url is accessed img url changes to new image url, yo!!)

Below will give you a square image, but if you want a custom rectangular shape of photo, you can do that via <https://unsplash.it/300/400>, and it will give you a photo of size
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

**Also**

Use placeholder images from here:

src: <https://placekitten.com/>

E.g., `https://placekitten.com/200/300` will give you image of cat with width of 200 and height 300. But the hack is you may use `https://placekitten.com/200/301` to get different
image of a cat and so on.., to get a list of images.! Yo!!

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

### Depressed of calculating actual width of a HTML element via formula `actual-width= (width+2*padding+2*margin)` and `actual-height= (height+2*padding+2*margin)` , so use border-box from now

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

### Compound selector (said by kevin)

```css
.header h1 {
  color: limegreen;
}
```

### Grouping selector

```css
div,
span {
  color: limegreen;
}
```

### General selectors

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

## Is this thing supported in a particular browser

Simply check the browser support by navigating to - <https://caniuse.com/>

## min, max, clamp function in short

sr: <https://www.youtube.com/watch?v=U9VF-4euyRo>

**min function**

Note: Below snippet is way how a min function can be used to calculates width on event of viewport changing.

```css
p {
  width: min(600px, 100%);
  /* ABOVE IS EQUAL TO BELOW TWO LINES.. */
  width: 100%;
  max-width: 600px;
}
```

**max function**

Note: Below snippet is way how a max function can be used to calculates width on event of viewport changing.

```css
p {
  width: max(200px, 100%);
  /* ABOVE IS EQUAL TO BELOW TWO LINES.. */
  width: 100%;
  max-width: 200px;
}
```

**clamp function**

Note: Below snippet is way how a clamp function can be used to calculates width on event of viewport changing.

```css
p {
  width: clamp(200px, 100%, 600px);
  /* ABOVE IS EQUAL TO BELOW THREE LINES.. */
  min-width: 200px;
  width: 100%;
  max-width: 600px;
}
```

## pseudo elements vs. pseduco class

```bash
a: hover
// here hover is pseudo class.

p::before
// here before is pseudo element.
```

`p::before` means that we care creating a pseudo element inside p tag but before any of its content, and the same applies to `p::after` way.

By default pseudo elements are inline elements i.e., they don't take entire line but share line with other elements. You can make them block elements by `display: block`.

The benefit of using pseudo elements is that we don't need extra markup (i.e., to write html) to get some content on page, we can just do this via pseudo elements only, yikes, so
now you don't need to add empty divs to style them in css, yikes!

**NOTE**

pseudo elements on img tag just doesn't work, so don't try doing that(source: kevin powell)-> check why [here (time stamped)](https://youtu.be/zGiirUiWslI?t=319)?

Text in pseudo elments can't be selected by cursor, as mentioned in this [stackoverlow answer](https://stackoverflow.com/a/27392279/10012446).

- Add image using pseudo element like that

```css
p::after {
  content: url(//unsplash.it/200/200);
}
```

- Add open quotes and close quotes to blockquote text like that -

```css
blockquote::before {
  content: open-quote;
  font-size: 2rem;
}

blockquote::after {
  content: close-quote;
  font-size: 2rem;
}
```

## attribute selector

```html
<style>
  p[popeye] {
    background-color: olive;
    /* So this will set color for p tags having property `popeye`, yikes! */
  }
</style>
<p popeye="yipee!">beautiful paragraph.</p>
```

More on attribute selector from **w3school** and **css-tricks**

Better learn it from css-tricks article as it has very concise exaplanation for all the available options for the **attribute selectors**.

Really impressive article, as it has demonstrated some combining the different selectors too.
Article on attribute selector from **css-tricks** [here](https://css-tricks.com/almanac/selectors/a/attribute/) on attribute selector.

**W3school links:**

- <https://www.w3schools.com/cssref/sel_attribute.asp>
- <https://www.w3schools.com/cssref/sel_attribute_value.asp>
- <https://www.w3schools.com/cssref/sel_attribute_value_contains.asp>
- <https://www.w3schools.com/cssref/sel_attribute_value_lang.asp>
- <https://www.w3schools.com/cssref/sel_attr_begin.asp>
- <https://www.w3schools.com/cssref/sel_attr_end.asp>
- <https://www.w3schools.com/cssref/sel_attr_contain.asp>

## what is .75 rem/em

Its just 75% size of the font-size, yikes!

## pseudo class for first-letter designing

Find the example [my codepen here](https://codepen.io/sahilrajput03/pen/NWdMpBp).
Inspired from kevin's [article](https://www.kevinpowell.co/article/first-letter/).

This thing is popularly known as 'drop case' and you may read more about it [here](https://css-tricks.com/snippets/css/drop-caps/) and there they explain some cross-browser way too but from [can-i-use](https://caniuse.com/?search=first-letter) all current browser support this thing at the time.

## Want to make text not wrap at all

Use

```css
p {
  white-space: nowrap;
}
```

## Transition - love

```html
<style>
  span {
    padding: 30px;
    background-color: red;
    transition: background-color ease-out 1000ms, color ease-out 1000ms;
  }

  span:hover {
    background-color: green;
    color: white;
  }
</style>

<span>I am a span text.</span>
```

In above I have defined two transitions i.e., for background-color and color. (\*color applies to text color in css, yo!)

## shorthand - `inset`

NOTE - shorthand - inset: inset is shorthand for top, left, bottom, right properties.

```css
p {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* Above and below is equivalent. */
  inset: 0 0 0 0;
}
```

## read article on transform property and what are the options available. probably on css-tricks...

eg.1 transform

```css
p {
  /* transform: scale(1, 1); */
  /* This is default ^^^. Yikes! */
  /* First param is x axis width and second param is y-axis width. */
}
```

## what happens when you have a error in your css (typo)

Check it [here (time-stamped)](https://youtu.be/McC4QkCvbaY?t=92).

## specificity luck

```html
<style>
  .boom .shankar {
    color: aqua;
  }

  .shankar {
    color: red;
    /* This ^^ doesn't work even though it comes later in code coz the `.boom .shankar` selector has higher specificity, yo!! */
  }
</style>
<div class="boom">
  <div class="shankar">I am namah.</div>
</div>
```
