# Readme

## Visit below link and login there

<https://courses.kevinpowell.co/conquering-responsive-layouts>

## Always use rem instead of em

Coz, em's compound on each other. But that doesn't mean you should not use em at all, but use em for margins and paddings things as margin and padding will auto scale based on the
font-size of that element.

## :root is just html element

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
