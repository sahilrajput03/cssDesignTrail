# Readme

src: http://cssgridgarden.com/

## Everything you need to know

```txt
src: http://cssgridgarden.com/
LEARN: grid values i.e., 2,3,-4, else marks grid lines from the left or right side, yikes!
* There is no 0th line, but there is 1st and -1st line i.e., the left most and right most respectively.
*>> DOUBTFUL (8Sep, 2022): In css grids, rows and columns is exactly opposite of excel.
* `grid-template-rows`: (**row-height**) A grid row is a horizontal track in a CSS Grid Layout, that is the space between two horizontal grid lines. It is defined by the grid-template-rows property or in the shorthand grid or grid-template properties. (mdn)
* `grid-template-columns`: (**column-width**) A grid column is a vertical track in a CSS Grid Layout, and is the space between two vertical grid lines. It is defined by the grid-template-columns property or in the shorthand grid or grid-template properties. (mdn)
* `grid`: (1) The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration. (mdn)
* `grid`: (2)  Using grid you specify one axis using grid-template-rows or grid-template-columns, you then specify how content should auto-repeat in the other axis using the implicit grid properties: grid-auto-rows, grid-auto-columns, and grid-auto-flow. (mdn)

#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


grid-column-start: 3
grid-column-start: 5;

*Using grid-column-end, water all of your carrots while avoiding the dirt. We don't want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.

grid-column-end: 4

*****
*When pairing grid-column-start and grid-column-end, you might assume that the end value has to be greater than the start value. But this turns out not the case!

below works as well:
#water {
  grid-column-start: 5;
  grid-column-end: 2
  }

*****
*If you want to count grid lines from the right instead of the left, you can give grid-column-start and grid-column-end negative values. For example, you can set it to -1 to specify the first grid line from the right.
#water {
  grid-column-start: 1;
grid-column-end: -2
}

******
With grid-column-start, you need to make sure that the line you are specifying with the value, say -3 in blow case would tell to start from that line and draw content its contents towards the right, yo!!
grid-column-start: -3

*Hint: ^^ the grid between line -3 and -2 will be occupied.

*****
Level 7
Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the span keyword. Keep in mind that span only works with positive values.

#water {
  grid-column-start: 2;
  grid-column-end: span 2; /* This just says to occupy a total of 2 grids. */
}

*Hint: ^^^ above will make it occupy grids between line 2 and 4.

*****
Level 9: Below works magically as just you would think:

#water {
grid-column-start: span 3;
  grid-column-end: 6;
}

*Hint: ^^^^ It'll manage to occupy total of 3 grids and will end on line 6.


******
Level: 10: Typing both grid-column-start and grid-column-end every time can get tiring. Fortunately, grid-column is a shorthand property that can accept both values at once, separated by a slash.

grid-column: 2 / 4;

*Hint: This will occupy total of two grids, starting from line 2 and ending on line 4.


Level: 11(I made this on my own though)

grid-column: 1 / -1;

*Hint: This will actually take all the hozirontal space in its row coz column1 is the extreme left vertical line and column -1 is the extreme right vertical line.


*****
Level: 12:
One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. grid-row-start works much like grid-column-start except along the vertical axis.

#water {
  grid-row-start: 3
}


*****
Level: 13
Give shorthand property grid-row a try:

#water {
  grid-row: 3/6
}

*****
Level: 14: Using both dimensions to position:

#poison {
  grid-row-start: 5;
  grid-column-start: 2;
}

*Hint: Using above will make item occcupy one grid only @ position as specified.

*****
Level: 15: If typing out both grid-column and grid-row is too much for you, there's yet another shorthand for that.
`grid-area` accepts four values separated by slashes:
=> grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end.
🤺︎ Learning acronym: RCRC

#water {
  grid-area: 1 / 2 / 4 / 6 ;
}

******

Level: 17: How about multiple items? You can overlap them without any trouble. Use grid-area to define a second area that covers all of the unwatered carrots.

#water-1 {
  grid-area: 1 / 4 / 6 / 5;
}

#water-2 {
  grid-area: 2/3/5/6
}

******
Level: 18: If grid items aren't explicitly placed with grid-area, grid-column, grid-row, etc., they are automatically placed according to their order in the source code. We can override this using the order property, which is one of the advantages of grid over table-based layout.

By default, all grid items have an order of 0, but this can be set to any positive or negative value, similar to z-index.

#poison {
  order: 1
}
*Learn: Greater the order, it'll be attracted towards right.

******
Level: 19:

.poison {
order: -1;
}

******
Level: 20:

grid-template-columns:50% 50%;
*Hint: Above divide the grid into two columns only(with three column lines i.e., 1,2,3).

******
Level:21: We previously defined five 20% columns with the rule grid-template-columns: 20% 20% 20% 20% 20%;. This can be simplified as grid-template-columns: repeat(5, 20%);

#garden {
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

******
Level: 22: grid supports using different units at a same time:

#garden {
  display: grid;
  grid-template-columns: 100px 3em 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


********
Level: 23: Grid also introduces a new unit, the fractional fr. Each fr unit allocates one share of the available space. For example, if two elements are set to 1fr and 3fr respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.

Here, weeds make up the left 1/6 of your first row and carrots the remaining 5/6. Create two columns with these widths using fr units.

#garden {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

********
Level: 24: When columns are set with pixels, percentages, or ems, any other columns set with fr will divvy up the space that's left over.

Here the carrots form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. With grid-template-columns, create these two columns, and use fr to make three more columns that take up the remaining space in between.

#garden {
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}

*********
Level: 25: Now there is a 75 pixel column of weeds on the left side of your garden. 3/5 of the remaining space is growing carrots, while 2/5 has been overrun with weeds.

Use grid-template-columns with a combination of px and fr units to make the necessary columns.

#garden {
  display: grid;
  grid-template-columns: 75px 3fr 2fr;
  grid-template-rows: 100%;
}


*********
Level: 26: grid-template-rows works much the same as grid-template-columns.

Use grid-template-rows to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you'll need to create 5 rows in total.


#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50px 0px 0px 0px 1fr;
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}

************
Level: 27:  grid-template is a shorthand property that combines grid-template-rows and grid-template-columns.

For example, grid-template: 50% 50% / 200px; will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.

Try using grid-template to water an area that includes the top 60% and left 200 pixels of your garden.

#garden {
  display: grid;
  grid-template: 60% 40% / 200px
}

#water {
  grid-column: 1;
  grid-row: 1;
}

***************

Level: 28: Your garden is looking great. Here you've left a 50 pixel path at the bottom of your garden and filled the rest with carrots.

Unfortunately, the left 20% of your carrots have been overrun with weeds. Use CSS grid one last time to treat your garden.

#garden {
  display: grid;
  grid-template: 1fr 50px / 20% 1fr;
}

****************

```

---

## More learnings :

Using `grid-template-areas`

If you hate using `grid-template-columns` and `grid-template-rows` property you can use `grid-template-areas` as a replacement for those.

The good thing about using names in grid-area is that you don't need to use numbers there i.e.,

```css
.item1 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

You don't want to specify `row-start, column-start, row-end, column-end` but name of the area directly. Yikes!

```css
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu    main   main  main   right   right'
    'menu footer footer footer  footer  footer';
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}
```

example source: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-area_named4

w3school content page: https://www.w3schools.com/cssref/pr_grid-area.asp
