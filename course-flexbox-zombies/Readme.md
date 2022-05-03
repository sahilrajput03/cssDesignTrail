# Flexboxzombies

Find the game @ [link](https://mastery.games/flexboxzombies/).

[Read about flexbox at firefox](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)

- nth-of-type() function of css example using class: https://www.w3schools.com/code/tryit.asp?filename=GOB930T9J2ZA

- nth-of-type selector in css:

  - CSS: https://www.w3schools.com/cssref/sel_nth-of-type.asp,
  - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type
  - INTERESTINGLY: https://css-tricks.com/almanac/selectors/n/nth-of-type/

## nth of type function

Some custom w3school examples by me

- `*nth-of-type()` function of css example using tag name: https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_nth-of-type_odd_even

- `*nth-of-type()` function with counter in it: https://www.w3schools.com/code/tryit.asp?filename=GP4D48GNQJQ4

- `*nth-of-type()` function with counter in it(different eqn): https://www.w3schools.com/code/tryit.asp?filename=GOB99SS3XAVD

## Everything you need to know

```txt
************
=> BEGINNING OF FLEX
#Defining display: flex  is must for everything you want to do with flex.
.class1{
	display: flex;
}
LEARN:  ^^ Default flex-direction is 'row' .

.class1{
	display: flex;
	flex-direction: row-reverse;
	OtherOptions:
	flex-direction: column-reverse;
	flex-direction: column;
}
*************
=> ALIGN-ITEMS, ALIGN-SELF
`align-items` is assigned to the cross bow itself, and `align-self` is assigned to the flex's items.
*Basically makes things malleable perpendicularly
to the flex-direction, yikes!!

align-items: stretch;(its DEFAULT)
^^ this will make stretch items perpendicularly

align-items: center;
^^ this will too make it compresses to center i guess.

align-items: flex-start;
^^ this will make items align to start perpendicularly
to the flex-direction.

align-items: flex-end;
^^ ^^ this will make items align to end perpendicularly
to the flex-direction.

align-items: baseline;
^^ this is helpful if you have different font-size elements, and you want them to have their lower bottom of line aligned, just use this thing.
Source for baseline: https://youtu.be/hwbqquXww-U?list=PL4-IK0AVhVjMSb9c06AjRlTpvxL3otpUd&t=762
_________
align-self is for individual child, yikes...
^^ all properties are same
as of align-items.

***************
=> JUSTIFY-CONTENT
/* Basically justify-content has to do in same axis as
flex-direction, yikes!!*/
/* justify-content: flex-start is DEFAULT for
justify-content. */
/* justify-content: flex-end */
/* justify-content: center*/
/* justify-content: space-between*/
/* justify-content: space-around , in this case space will be in the end of each sides too, yikes...*/

*********************
*********************

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
/////////////////
FLEX-WRAP
DEFAULT property of flex-wrap is as `flex-wrap: nowrap`, yo!!
This property is given to the crossbow itself, yo!
When elements in the flex wrap into new line if space is not enough, we need
flex-wrap:wrap
, yikes!!! Also, lines made with {flex-wrap: wrap} are always parallel to flex-direction.
* To make new line above current line, use `flex-wrap-wrap-reverse;`
*LEARN: When we use `wrap-reverse`, align-items:flex-start will make its first-line at  bottom(in case of flex-direction row/row-reverse). *Also align-items:flex-start will make its first-line at in top (in case of flex-direction as column/column-reverse), check if thats a little wrong typed :( :LOL:
* flex-wrap: wrap-reverse makes the align-items: flex-end to go to the top instead of the bottom like it normally would, even when nothing was wrapping!. Pretty crazy!
*  {flex-wrap: wrap; justify-content: flex-end;} can act together to make the last child stick to the end of the flex, yo!!
*LEARN: The zombies(elements) treat the line they're on as the only space that matters. So they'll grow to fill up space on their line, and position themselves only within the boundaries of their line.
*LEARN: {flex-wrap}@crossbow and {flex-basis: 50%}@all_element_of_crossbow makes great ui as in two elements per line, yikes!
*LEARN: {align-items: flex-end; flex-wrap: wrap-reverse;flex-direction: column-reverse}@crossbow makes the elements align in right most line and add more items in line in the left direction only, yikes!
*LEARN: {justify-content: center, flex-wrap: wrap}@crossbow makes items in each line center justified, yikes, simple behaviour, yo!
*LEARN: flex-grow is still helpful with flex-wrap: wrap.
//////////////
ALIGN-CONTENT (it defined the arrangement of line in a perpendicular direction of `flex-direction`)
DEFAULT value of align-content is `stretch`. This property works in the perpendicular direction of the flex-direction.

align-items: stretch
^^ this is DEFAULT property.

align-items: flex-start
^^ this will make `lines containing elements` to get attracted toward upwards.

align-items flex-end;
^^ this will make the `lines containing elements` to get attracted towar downwards.

align-items: center;
^^ this makes the `line` attracted towards the center, yikes!

align-items: space-around;
^^ this makes the `line` managed like space around as we learned ealier in other properties.

align-items: space-between;
^^ this makes the `line` managed like space is only between the elements, not in the outer edges of the lines.


*LEARN: When shooting vertically, using {align-items: flex-end;} will make lines attracted towards right side.
*LEARN: What did I learn about `align-items`: When there gets too many zombies to fit in a single line and they start wrapping to new lines, those lines can be arranged in several different ways perpendicular to the direction I'm shooting, along the crossbow's blue Alignment Laser.

**AMAZING: mozilla's documentation for css is just awesome!! Check it out @ https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
 as live updating is there with evey character changed, yikes!!
/////////////////////////
// SHORTCUT/SHORTHAND:
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
