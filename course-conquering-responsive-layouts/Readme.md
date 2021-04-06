## Visit below link and login there.

https://courses.kevinpowell.co/conquering-responsive-layouts

## Alwasy use rem instead of em

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
