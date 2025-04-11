# README

**Quick Links:**

- **TODO: An Interactive Guide to Flexbox ~ Josh W Comeu:** [Click here](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- flexbox, developer.mozilla.org:
  - How to examine flexbox layouts: [Click here](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)
  - `align-items`: [Click here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- nth-of-type selector in CSS:
  - CSS: [w3schools](https://www.w3schools.com/cssref/sel_nth-of-type.asp)
    - My Example: `*:nth-of-type()` function with counter in it: [Click here](https://www.w3schools.com/code/tryit.asp?filename=GP4D48GNQJQ4)
  - MDN: [Click here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)
  - Css Tricks Article: [Click here](https://css-tricks.com/almanac/selectors/n/nth-of-type/)

# Flexbox Zombies Course Notes

## Video 1: `display: flex`

- Flexbox Zombies Game: [Click here](https://mastery.games/flexboxzombies/)

**❤️Note: The headings below contain key-value pairs that represent their default values.**

### `flex-direction: row`

This defines the main axis of flex container. We can apply following properties to flex-direction: `row` (default), `row-reverse`, `column-reverse` and `column`.

### `align-items: stretch` (parent) and `align-self: stretch` (children)

<ins>❤️Note: When `align-items` is set on a parent element, its children use that value as the default for their `align-self` property.</ins>

Defines alignment in cross axis (perpendicular to the main axis). `align-items` is assigned to the cross bow itself, and `align-self` to children elements.

We can apply following properties to both `align-items` and `align-self`: `stretch` (default), `center`, `flex-start`, `flex-end` and `baseline`.

_Note: "baseline" is helpful if you have different font-size elements, and you want them to have their lower bottom of line aligned, just use this thing. Video example usage of `baseline` from Kevin Power (timestamped): [Click here](https://youtu.be/hwbqquXww-U?list=PL4-IK0AVhVjMSb9c06AjRlTpvxL3otpUd&t=762)_

![](./align-items.svg)

([image credits](https://css-tricks.com/almanac/properties/a/align-items/))

### `justify-content: flex-start`

Defines alignment of children of flex in main axis. We can use following values:

`flex-start` (default), `flex-end`, `center`, `space-between`, `space-around `(in this case space will be in the end of each sides too)

## ❤️ `flex-wrap: nowrap` (parent) and `align-content: stretch` (children)

<ins>Note: Using `align-content` is only useful when we set `flex-wrap: wrap` to parent.</ins>

**Both of these properties (`flex-wrap` and `align-content`) are given to the crossbow itself. In flex container we might want the elements to wraps into multiple lines (literally referred as `lines` technically) which are parallel to main axis and we do that by applying `flex-wrap: wrap` to parent. This looks like:**

```txt
flex-direction: row;
flew-wrap: wrap;
1 2
3 4
```

You can assign `flex-wrap` values - `nowrap` (default) and `wrap`.

Other helpful combination example values:

```text
flex-direction: row;
flew-wrap: wrap-reverse;
3 4
1 2

flex-direction: row-reverse;
flew-wrap: wrap;
2 1
4 3

flex-direction: row-reverse;
flew-wrap: wrap-reverse;
4 3
2 1
```

<ins>**❤️Note: `flex-wrap: wrap-reverse` with `align-items: flex-end` makes items go to the top instead of the bottom like it normally would, even when nothing is wrapping!. Pretty crazy! 🚀 TAKE AWAY: When you using `flex-wrap: wrap-reverse` the align-items's `flex-start` and `flex-end` behaves as it they were reversed.**</ins>

```text
*  Tip: With `flex-wrap: wrap;` you can use `justify-content: flex-end;` to make the childdren stick to the end of the flex.

* ✅Note:
flex-direction: column-reverse;
align-items: flex-end;
flex-wrap: wrap-reverse;
Using above css makes the elements align in right most line. That looks like as shown below. (In below figure . represents empty space due to alignment specified via `align-items: flex-end`):

. 4 2
. 3 1



✌🏻 Learn:
flex-driection: row;
justify-content: center;
flex-wrap: wrap;
Using above properties makes content center justified. A commonly used generaly pattern. (In below figure . represents empty spaces due to specified alignment via `justify-content: center`)
. 1 2 .
. 3 4 .

* 🛑 TODO_TEST: LEARN: {flex-wrap}@crossbow and {flex-basis: 50%}@all_element_of_crossbow makes great ui as in two elements per line, yikes!

:🛑 TODO_TEST: flex-grow is still helpful with flex-wrap: wrap.
```

❤️🚀`align-content`: It defines the alignment of lines itself in cross axis (direction perpendicular to axis). [Note: align-content requires that `flex-wrap: wrap` is set on parent].

<ins>Note: If we do not specify `align-content` propery the lines when we have `flex-wrap: wrap` on parent, the lines stretches to fill the container because `align-content: stretch` is the default value.</ins>

We can assign it following values:

```
stretch (default)	  ❤️Lines stretch to fill the container
flex-start	        Pulls all lines to the start of the cross-axis
flex-end	          Pulls all lines to the end of the cross-axis
center	            Centers all lines in the cross-axis
space-between	      Evenly distributes lines, first and last lines at the edges
space-around	      Even spacing around each line
space-evenly	      Equal space between all lines, including edges
```

**❤️ Relation of `align-content` with `align-items`:**

**Awesome Explanation:** 🚀🚀🚀 `align-content` vs. `align-items` (ChatGPT): [Click here](https://chatgpt.com/c/67f6d4f6-3cf0-8007-b0ef-0c38a8031de1)

🚀🚀🚀 `align-items` property aligns the items in the lines itself only when `align-content` is set to its default value i.e., `stretch` and we can set `align items: flex-start` or `flex-end` or `center`. If `align-content` value is not set to `stretch` then setting any value of `align-items` don't do anything at all. [TESTED]

✅LEARN: When `flex-direction: column`, using `align-content: flex-end;` will make lines pulled towards right side.

## Video 2: `flex-grow`, `flex-shrink` and `flex-basis`

```txt
FLEX-GROW: 1;
*DEFAULT value of flex-grow is 0, i.e., items don't auto expand at all.
*flex-grow always has to be applied directly to the targets, not to the crossbow itself.
* Use this to auto children sizing according to space available.

* flex grow works in the expansion (in same axis as the flex-direction)

* If you want them to grow 1st element and 2nd element in proportion 1:2, then define individual `flex-grow` in each of those elements as 1 and 2 in the other one..

*If you want any element to not grow, set flex-grow:0 to that element.

//////////////
* flex-shrink works in the compression in the same axis as flex-direction.
flex-shrink: 1
* If you give flex-shrink (ITS ABOUT RATIOS ONLY) to all elements via a separate class to all the child of the flex with flex-shrink as 1 or 2 or 3 or anything else, its just same, yikes!(coz its after all rations that is assigned to every element.)

*LEARN: DEFAULT value of flex-shrink is 1.
*LEARN: Setting value to 2 will make that particular flex-item to shrink twice as other items coz other items have 1 as their value by default.
*LEARN: You can make a child to refuse to shrink via setting flex-shrink as 0.
*LEARN: The value other
Amazing demonstration @ https://youtu.be/o-dDFSH-BxM

//////////////
FLEX-BASIS (basically it overrides the width property, yikes!)
It is a new and improved version of css width property. e.g. usage: flex-basis: 300px;
*flex-basis is supposed to given to children of the flex, not the container itself.
Also, in below e.g.,
.goo{
    width: 500px;
    flex-basis: 100px;
    //here, flex-basis will win over width property.
}

* min-width acts as lower limit of flex-basis, yikes!(*NOTE : Only min-width is respected where a flex-basis has a lower value is already there.)
* max-width acts as upper limit of flex-basis, yikes!(*NOTE: Only max-width is respected where a flex-basis has a greater value is already there.)
*flex-basis isn't just for width. When shooting vertically(i.e., flex-direction is column or column-reverse) it(flex-basis) deals with height instead of width. In other words flex-basis changes the size of things in the direction of our lazer direction, yo!
*flex-basis can used to set percentage(of the total size of the container) to set its length, for e.g., `flex-basis: 50%; `.
*flex-basis's DEFAULT value is auto, and that means to fallback to using width property, yo!!
*The final `flex-basis` can't be higher than its max-width(or max-height when shooting vertically). If it is higher, the final flex-basis just becomes that max-value.
*The final `flex-basis` can't be lower than its min-width(or min-height when shooting vertically). If it is lower, the final flex-basis just becomes that min value.
*As a trick you can use (flex-direction: column/column-reverse) `max-height` to restrict maximum growing of an element of the flex, yikes!!(Similarly with width if flex-direction is either row or row-reverse).
* flex-basis is a hypothetical size before any growing or shrinking begins.
/////////////////
ORDER, DEFAULT order's value is zero.
* The bigger the order, the farther it'll be in the lazer's direction.
* The elements in the flex are ordered according to the order, i.e., lower first, higher last.
```

### Shortcuts (shorthands)

```text
`flex: 1 1 300px`
This is applicable to a child in flex, yo!! that means,`flex-grow, flex-shrink, flex-basis` in that order. Acronym: grow-shrink-basis, gsb. Another e.g.,
`{flex: 10 auto;}`

// ANOTHER SHORTCUT/SHORTHAND:
LEARN: I can use flex to just specify flex-grow only if I want, and other property i.e., flex-shrink and flex-basis will be defined as shown below-
E.g.,
{flex:1}
will set
{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0px; // Though this is different than flex-basis's default property i.e., auto, yo!
}, yo!!

// ANOTHER SHORTCUT/SHORTHAND:
{flex:auto} on element will set these properties..
{
    flex-grow: 1;
    flex-shrink:1;
    flex-basis: auto;
}

// ANOTHER SHORTCUT/SHORTHAND:
{flex: none} on element will set these properties..
{
    flex-grow: 0
    flex-shrink: 0
    flex-basis: auto
}, So using flex: auto means that we say listen zombie, don't grow, don't shrink, and just use your width as your basis.

// ANOTHER SHORTCUT/SHORTHAND:
flex-direction and flex-wrap
{flex-flow: column wrap;} on crossbow itself will set below properties..
{
    flex-direction: column;
    flex-wrap: wrap
}
```
