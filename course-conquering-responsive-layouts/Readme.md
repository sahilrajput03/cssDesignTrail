# Readme

## Visit below link and login there

CONTINUE FROM HERE: <https://courses.kevinpowell.co/courses/conquering-responsive-layouts/269778-day-15-intro-to-media-queries/779604-adding-one-to-our-layout>

<https://courses.kevinpowell.co/conquering-responsive-layouts>

## Always use rem instead of em

Coz, em's compound on each other. But that doesn't mean you should not use em at all, but use em for margins and paddings things as margin and padding will auto scale based on the
font-size of that element.

## :root vs html tag ? They are just same things

```css
:root {
}
/* Both these are one thing. */
html {
}
```

## Some links

- [box-sizing](https://youtu.be/WlGQdgy-M6w)
- kevin's bem guide [video](https://youtu.be/SLjHSVwXYq4).
- Emmet [docs](https://docs.emmet.io/).

## Use figma to prototype fast

[figma.com](https://www.figma.com/)

## Used block-inline in challenge03

Used it for a tag with class `btn` and i have display property like:

```css
display: inline-block;
/* ^^ this is really cool. */
```

## In flex

Give children columns a width of 100% so they'll occupy equal widths, as with flexbox by default the columns tend to occupy least possible width can cause issue with column that
has very less content.

## Css vars

```css
:root {
  --bg-clr: #23424a;
  --bg-clr2: skyblue;
  --ff: Geneva, Verdana, sans-serif;
}

.container {
  font-family: var(--ff);
  color: var(--bg-clr);
  background-color: var(--bg-clr2);
}
```

## check for any property is you can use it any browser or not

Browse: https://caniuse.com

**Tip**: Search for `gap` for flexbox, and see if safari supports it ? Ans. NO!

## Combinator selector

```css
.col + .col {
  background-color: skyblue;
  /* above will select all columns except one. */
  margin-left: 100px;
}
```

## Awesome delay thing in css, love 🏩

Browser my w3school [saved instance here](https://www.w3schools.com/code/tryit.asp?filename=GPBKMEJQZWQZ) and you might wanna see the
[original here](https://www.w3schools.com/cssref/css3_pr_transition-delay.asp).

Basically you may analyse like this quick recap:

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  /* below properties in focus */
  transition-property: background;
  transition-duration: 2s;
  transition-delay: 0s;
}

div:hover {
  /* below properties in focus */
  background: green;
  /* So on hover, the div's color will be change in a very slow motion manner(time taken would be 2s, and the delay would be 0s, yo!) */
}
```

## most used flex-box things ?

- `justify-content: space-between`, when using this make sure you DON'T GIVE children items a width of 100% each, coz space in between is only managed if there is any space at all,
  so don't give width: 100%.
- `align-items` on container itself, and `self-align` on individual children.
- Reduce the image size via percentage by using percentage in `width` of the img, and img will scale its height accordingly as well. Yikes! For e.g., below is a common snippet to
  use image in a flex.

```css
.hero_img {
  width: 32%;
  align-self: flex-start;
}
```

Another hack by kevin powell: If you don't want your image to get stretched by the default property on children by a parent flex, you can wrap the img in a div, and then the div
will be stretched but the img will be just the regular behaviour of img(i.e., not stretching, which is implemented by the flex container).

- Never give `display: flex` directly to any container in css, but do that by specifying another class i.e., `row` or `column` accordingly. So, this way all your containers will be
  shareable among the whole html code, yikes!

## img tags are not sizing accordingly to viewport, fix it via

Browse directory: `09-01`

## flexbox playground is really awesome

I learned about inline flex from the below playground, yikes!

- Access it on: <https://catchmyfame.github.io/flexboxplayground/>

Source on github: https://github.com/catchmyfame/flexboxplayground

- Another playground @ http://flexbox.help/ , this one generates code for graphical things you do, yikes!!

- flexbox turns direct children into columns or rows depending you have set flex-direction: row or column respectively.

## flexbox's baseline thing(not learned in flexbox zomibes, but added to it 'notes' though)

```css
align-items: baseline;
```

^^ this is helpful if you have different font-size elements, and you want them to have their lower bottom of line aligned, just use this thing. Source for baseline:
https://youtu.be/hwbqquXww-U?list=PL4-IK0AVhVjMSb9c06AjRlTpvxL3otpUd&t=762

- Why you should bother using `order: -1` or some +ve value to order to the children of flex, coz you might want to adjust the layout on smaller screen or different screen size
  using media queries. A good practice is to use different positive value of order on each item as required.

- **Shorthand**:

`flex: 1 1 300px`

This is applicable to a child in flex, yo!! that means,`flex-grow, flex-shrink, flex-basis` in that order. Acronym: grow-shrink-basis, gsb. Another e.g.,

`{flex: 10 auto;}`

## html tags

main, section (in main possibly), aside, nav, etc.

## If you want to get rid of bullet points in ul

Just define

```css
ul-class {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

## PRO TIP

Use `margin: 0 auto;` to center the content, yikes!

Also, if you set `margin-left: auto`, then the content will be aligned towards right as margin will be applied to left only. This actually made us some of the li items in the ul
list to get aligned to the right, yikes!

And using some class with more specific meaning makes the class names more logical i.e.,

```css
.nav__item--push-right {
  margin-left: auto;
}
```

## Aligning part of navbar to right

Make two ul list, and give the nav tag

```html
<style>
  .nav {
    display: flex;
    justify-content: space-between;
    /* Now, two ul lists will be aligned to left and right, yikes! */
  }
</style>

<nav class="nav">
  <ul>
    <li></li>
    <li></li>
  </ul>
  <ul>
    <li></li>
    <li></li>
  </ul>
</nav>
```

## Flow of css code execution matters, and works like js code, i.e., the last statement is the effective one

```html
<style>
  .class1 {
    color: red;
  }
  .class2 {
    color: green;
    /* Since this comes last in css execution order, so this would be in power, i.e., text color would be in green. */
  }
</style>

<!-- In both below paragraphs, text-color will be green. -->
<p class="class1 class2">This is paragraph.</p>
<p class="class2 class1">This is paragraph2.</p>
```

Check code @ <https://codepen.io/sahilrajput03/pen/gOgevaR> .
