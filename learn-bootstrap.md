# Learn bootstrap

**Quick Links:**
- Docs: [Click here](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- Amazing use of negative margins, source: css-tricks: [Click here](https://css-tricks.com/negative-margins/)
- Redmi Note 5: Width `515px`

## Card header and footer

Docs: [Click here](https://getbootstrap.com/docs/5.2/components/card/#header-and-footer)

![image](https://user-images.githubusercontent.com/31458531/196928522-74132390-ac29-4fe0-9805-30cd19db56c8.png)


## Shadows

Docs: [Click here](https://getbootstrap.com/docs/5.2/utilities/shadows/#examples)

![image](https://user-images.githubusercontent.com/31458531/196714849-4e74e2b4-3fad-4b19-8afe-a39710991e22.png)

## overflow, primary?, negative margins

- [overflow](https://getbootstrap.com/docs/5.2/utilities/overflow/)
- [negative margins](https://getbootstrap.com/docs/5.2/utilities/spacing/#negative-margin)

```
OVERFLOW:
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>


USING PRIMARY COLOR:
bg-primary
text-primary
border-primary


NEGATIVE MARGINS (mx-n5):
<SimpleCard className='card p-5 pt-0 overflow-hidden'>
  <h1 className='h1 mx-n5' > Multisig Wallet</h1>
```

## Customizing bootstrap primary, secondary, etc colors and values of of others default classes

Source: [Click here](https://getbootstrap.com/docs/4.0/getting-started/theming/)

![image](https://user-images.githubusercontent.com/31458531/196671984-1ac43706-5455-40a8-a5aa-1dba1983274e.png)

## border

Source: [Click here](https://getbootstrap.com/docs/5.2/utilities/borders/#border)

`border-primary border-bottom border-5` for a bottom border on an element.

## Spacing - Margins and Paddings

***NOTE: There is not `ml-0`, `pl-1`, `mr-2`, `pr-3` becoz you need to use `ms-0`, `ps-1`, `me-2`, `pe-3` respectively.***

[Docs](https://getbootstrap.com/docs/5.2/utilities/spacing/)

![image](https://user-images.githubusercontent.com/31458531/195986672-48239fd6-0ad1-4178-95cd-718f527acc73.png)

**Grid with gap (spacing)**

![image](https://user-images.githubusercontent.com/31458531/195986827-871be08c-5071-499f-9bfb-563a6db2c72a.png)


## Flex

Flex [Docs](https://getbootstrap.com/docs/5.2/utilities/flex/)

```html
<!-- Make a item flex and it has `flex-direction: row` by default -->
<div class="d-flex">...</div>

<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
<div class="d-flex justify-content-evenly">...</div>

<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
```
## Font

Text: [Docs](https://getbootstrap.com/docs/5.2/utilities/text/)

![image](https://user-images.githubusercontent.com/31458531/195984329-19e474cb-5fdd-4ae6-9271-d9297e048f40.png)

![image](https://user-images.githubusercontent.com/31458531/195984350-785f0c34-c3cc-4bff-8af5-34c5191327df.png)

![image](https://user-images.githubusercontent.com/31458531/195984384-4bcd6919-0318-4288-83fe-48cc8fd354c3.png)

![image](https://user-images.githubusercontent.com/31458531/195984406-fff0b681-020b-4634-9a1e-25a18752bee8.png)

![image](https://user-images.githubusercontent.com/31458531/195984467-1066ea19-15ee-4b83-a1ce-8347aade499b.png)

![image](https://user-images.githubusercontent.com/31458531/195984540-9016e67a-ecdb-4026-89a5-e3ed46e78514.png)


## Breakpoints: [Docs](https://getbootstrap.com/docs/5.2/layout/breakpoints/)

  ![image](https://user-images.githubusercontent.com/31458531/195975354-be038cab-ca98-4dc1-bc76-9a21349329e5.png)


## `grid`

[Docs](https://getbootstrap.com/docs/5.2/layout/grid/)
  
  - `container` class centers the element.

  ![image](https://user-images.githubusercontent.com/31458531/195975004-ce042f20-29a4-4374-8bc7-2b1ed0434c76.png)

  ![image](https://user-images.githubusercontent.com/31458531/195977149-fd52032a-fd8e-4e09-959f-4d7d3617a015.png)

  ![image](https://user-images.githubusercontent.com/31458531/195977427-527dd32e-d9a9-40b1-bb19-193d3365c84c.png)
  
  - Stacked to horizontal [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#stacked-to-horizontal), Stackblitz: [Click here](https://stackblitz.com/run?file=index.html) (**Simple yet powerful and quite impressive ~Sahil**)
  
    ***FYI: Stacked here means placing items vertically i.e., one above other on extra small screens and show as columns as desired on small and up sized-screens.***

    ![image](https://user-images.githubusercontent.com/31458531/195979470-26e5cc76-cac6-41ab-b3ad-a0a7c018857f.png)

  
  - Variable width content (Grid): [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#variable-width-content), Stackblitz [Click here](https://stackblitz.com/run?file=index.html) Tip: You can use that blue lightning icon to get this sandbox anytime as you can seee in below SS.
  
      - i. a.) ![image](https://user-images.githubusercontent.com/31458531/195977811-46fa7415-72c0-4a4d-a762-5cd196d5e962.png)

      - i. b.) ![image](https://user-images.githubusercontent.com/31458531/195977861-1655755a-c069-4fa9-a4a1-b2846f204b75.png)
  
  - Mix and match (Grid): [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#mix-and-match), Stackblitz [Click here](https://stackblitz.com/run?file=index.html)

    - ii. a.)  ![image](https://user-images.githubusercontent.com/31458531/195979093-d6a8efb4-1fde-4dc1-b2a0-aeed59f1ac47.png)

    - ii. b.) ![image](https://user-images.githubusercontent.com/31458531/195979164-5f73a4c8-0dfc-4964-901e-10ca5f6705c0.png)

  - Row Columns [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#row-columns): (**Tip: Open image in new to see clearly**)

  ![image](https://user-images.githubusercontent.com/31458531/195980411-f475ed02-bf89-49c9-a602-5a1fa6dd27f7.png)

- Nesting [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#nesting), Stackblitz: [Click here](https://stackblitz.com/run?file=index.html)
  
  ![image](https://user-images.githubusercontent.com/31458531/195980651-706a58c3-2fec-4ea7-bf79-c153580dbc16.png)

- Sass, variables, and mixins

![image](https://user-images.githubusercontent.com/31458531/195980916-1938345c-a843-4d92-b666-3996f6cecd7b.png)

- Example (working with sass mixins) [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#example-usage):

![image](https://user-images.githubusercontent.com/31458531/195980858-6984161b-cef5-46df-b2c4-cba3a838ea08.png)

- Customizing the grid [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#customizing-the-grid)

![image](https://user-images.githubusercontent.com/31458531/195980981-c2b0da15-b6a6-4b44-bacd-efcd500fe052.png)