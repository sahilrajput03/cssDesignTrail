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

🚀🚀🚀 `align-content` must be set to its default value (`stretch`) if we want `align items` property to work. If `align-content` is not set to its default value `stretch` then setting `align-items` property doesn't work at all. [TESTED] 🚀🚀🚀

✅LEARN: When `flex-direction: column`, using `align-content: flex-end;` will make lines pulled towards right side.

## Video 2: `flex-grow: 0` (child), `flex-shrink: 1` (child), `flex-basis: auto` (child) [fallback to `width`/`height` property] and `order: 0` (child)

**Apply `flex-grow` to children (not to the crossbow itself) to make them auto expand according to space available in main axis.**

❤️The default value `flex-grow: 0` makes items to not auto expand at all.

```txt
* If you want children to grow such that 1st element and 2nd element in proportion 1:2 then we can do:
flex-grow: 1; (on 1st child:)
flex-grow: 2; (on 2nd child:)
```

**Apply `flex-shrink` to children (not to crossbow itself) to make them auto compress (shrink) in main axis. The default value is `flex-shrink: 1` (default).**

_❤️Amazing demonstration @ [Click here](https://youtu.be/o-dDFSH-BxM)._

- LEARN: Setting `flex-shrink: 2` to a child will make that particular child to shrink twice as other items because other items have 1 as their value by default.
- If you give flex-shrink (ITS ABOUT RATIOS ONLY) to all elements via a separate class to all the child of the flex with flex-shrink as 1 or 2 or 3 or anything else, its just same as 1:1:1... and so on --- because after all its all about just ratios.
- LEARN: You can make a child to refuse to shrink by resetting the default value `flex-shrink: 0`.

**Apply `flex-basis` to children (not to the crossbow itself). The default value `flex-basis: auto` means to fallback to using `width` when `flex-direction: row` or `height` property when `flex-direction: column`. `flex-basis` changes the size of items in the direction of main axis. Example: `flex-basis: 300px`, `flex-basis: 50vw`.**

- `flex-basis` overrides (takes precedence) the `width` property when `flex-direction: row`.
- `flex-basis` overrides (takes precedence) the `height` property when `flex-direction: column`.
  - It is a new and improved version of css width/height property.
  - `flex-basis` is a hypothetical size before any growing or shrinking begins.

```txt
Also, in below e.g.,
.goo{
    width: 500px;
    flex-basis: 100px; // ✅ Here, flex-basis takes precedence over width property.
}
```

<ins>**Points to Remember when using `flex-basis`:**</ins>

1. `min-width` and `max-width` also applies to `flex-basis` in the same way as they work with `width` property to restrict the minimum shrinking and maximum growing value in main axis.
   a. And vice-versa for `min-height` and `max-height` when `flex-direction: column`.
2. ❤️ `flex-basis` can be used to set percentage (of total size of the flex container) to set its width (height when `flex-direction: column`) --- just like we use percentage values with `width`/`height` properties.
   a. For e.g., if we set `flex-basis: 50%` to one item in a flex then that item takes 50% of the width of the flex container (considering `flex-direction: row`).

**Apply `order` to children (not to the crossbow itself). The default value is `order: 0`. It can have negative values too which makes them appear at the start.**

- The elements in the flex are ordered according to the order, i.e., lower first, higher last.

### `flex: 0 1 auto` (parent) shorthand for `flex-grow flex-shrink flex-basis`

Docs @ mdn: [Click here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

- `flex: 2`: 2 here means `flex-grow: 2`

```txt
LEARN: I can use flex to just specify `flex-grow` and then other properties `flex-shrink` and `flex-basis` will be default:

{
    flex-grow: 2;
    flex-shrink: 1;   (default)
    flex-basis: 0%; // Note: This is different than flex-basis's default property (`auto`)
}
```

- `flex: 10 auto` will set:

```txt
flex-grow: 10;
flex-shrink: 1;    (default)
flex-basis: auto;
```

- `flex: 1 1 300px` will set:

```txt
flex-grow: 1;
flex-shrink: 1;
flex-basis: 300px;
```

- `flex: auto` will set:

```txt
flex-grow: 1;
flex-shrink:1;
flex-basis: auto;
```

- `flex: none` will set:

```txt
flex-grow: 0
flex-shrink: 0
flex-basis: auto
```

So using `flex: none` means that we say listen zombie, don't grow, don't shrink, and just use your width property.

### `flex-flow: row nowrap` (parent) shorthand for `flex-direction flex-wrap`

- `flex-flow` to specify `flex-direction` and `flex-wrap` for shorthand on the crossbow itself. Example: : `flex-flow: column wrap` will result into:

```txt
flex-direction: column;
flex-wrap: wrap
```

Thanks.
