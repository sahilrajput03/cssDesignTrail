# Learn bootstrap

**Quick Links:**
- **React Bootstrap Docs: [Click here](https://react-bootstrap.netlify.app/components/alerts)**
- Docs: [Click here](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- Amazing use of negative margins, source: css-tricks: [Click here](https://css-tricks.com/negative-margins/)
- Redmi Note 5: Width `515px`

## ❤️ Show/hide elements on the basis of screen sizes ❤️ 

Source: [Hiding Elements](https://getbootstrap.com/docs/5.2/utilities/display/#hiding-elements)

![image](https://user-images.githubusercontent.com/31458531/206022408-c5d8917e-4a1f-46e1-8c0d-442ff01896d3.png)


## Default heading styles?

W3schools: [Click here](https://www.w3schools.com/tags/tag_hn.asp)

tldr;
```
h1  2rem    = 32px
h2  1.5rem  = 24px
h3  1.17rem = 19px (approx)
h4  1rem    = 16px
h5  0.83rem = 13px (approx)
h6  0.67rem = 11px (approx)
```


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

***NOTE: There is not `ml-0`, `pl-1`, `mr-2`, `pr-3` becoz you need to use `ms-0`, `ps-1`, `me-2`, `pe-3`, `px-4`, `my-5` respectively.***

[Docs](https://getbootstrap.com/docs/5.2/utilities/spacing/)

![image](https://user-images.githubusercontent.com/31458531/202123950-bb7d9522-fe50-4f59-a660-2ef09c417fd0.png)

Source of below image: [SASS Options](https://getbootstrap.com/docs/4.3/getting-started/theming/#sass-options)

![image](https://user-images.githubusercontent.com/31458531/202123028-8701e637-795d-46dc-a589-c0aad1572301.png)

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

Q. How do breakpoints work?

*Ans. If you have a column in a grid with column `<Col sm={6} lg={12} xl={6} className="mb-4">` so this works like in senority way i.e,*

 FYI: This is `Col` component from `import {Col} from 'react-bootstrap';`

- with: sm and above size use column as 6
- for large and above use column 12
- for extra-large and above use 6 columns

  ![image](https://user-images.githubusercontent.com/31458531/195975354-be038cab-ca98-4dc1-bc76-9a21349329e5.png)


## `grid`

**Fun Fact: ❤️ grid in bootstrap is made using flexbox only, i.e., grid doesn't uses grid css property at all. Refer below screenshot.**

![image](https://user-images.githubusercontent.com/31458531/206267965-0d98d7b1-d33b-4e61-a767-676450551ec1.png)


Docs: **[Columns](https://getbootstrap.com/docs/5.2/layout/columns/#how-they-work)**

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

  Update: 7 Dec, 2022. Realization that we provide **total number of columns we want** when we do like `row-cols-3` to a `row` whereas we provide **the occupying number of column space out of 12** when we specify **col** value to a **single column** i.e, `col-3` which says we'll have 4 cols in total(each occupying 3/12 = 1/4 space).

  ```html
        <!-- So in below case we're saying that: -->
        <!-- we want 3 columns in total in xs and above -->
        <!-- we want 4 columns in total in sm and above -->
        <!-- we want 3 columns in total in md and above -->

        <!-- <Row className="mt-3 gy-3 justify-content-start row-cols-3 row-cols-sm-4 row-cols-md-3"> -->
        <!-- Above works same as below. Also, using below makes more sense as it component's featre and much cleaner as well. -->
        <Row className="mt-3 gy-3 justify-content-start" xs="3" sm="4" md="3">
          <Col><img className="rounded-3 d-block m-auto" src={profileImg2} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
          <Col><img className="rounded-3 d-block m-auto" src={profileImg3} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
          <Col><img className="rounded-3 d-block m-auto" src={profileImg4} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
          <Col><img className="rounded-3 d-block m-auto" src={profileImg5} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
          <Col><img className="rounded-3 d-block m-auto" src={profileImg6} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
          <Col><img className="rounded-3 d-block m-auto" src={profileImg7} alt="Profile Here" style={{ maxWidth: '92px' }} /></Col>
        </Row>
  ```

  ![image](https://user-images.githubusercontent.com/31458531/195980411-f475ed02-bf89-49c9-a602-5a1fa6dd27f7.png)

- Nesting [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#nesting), Stackblitz: [Click here](https://stackblitz.com/run?file=index.html)
  
  ![image](https://user-images.githubusercontent.com/31458531/195980651-706a58c3-2fec-4ea7-bf79-c153580dbc16.png)

- Sass, variables, and mixins

![image](https://user-images.githubusercontent.com/31458531/195980916-1938345c-a843-4d92-b666-3996f6cecd7b.png)

- Example (working with sass mixins) [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#example-usage):

![image](https://user-images.githubusercontent.com/31458531/195980858-6984161b-cef5-46df-b2c4-cba3a838ea08.png)

- Customizing the grid [Docs](https://getbootstrap.com/docs/5.2/layout/grid/#customizing-the-grid)

![image](https://user-images.githubusercontent.com/31458531/195980981-c2b0da15-b6a6-4b44-bacd-efcd500fe052.png)


## Thats how container, container-fluid works

Source: [Click here](https://getbootstrap.com/docs/5.2/layout/containers/#default-container)

![image](https://user-images.githubusercontent.com/31458531/205707040-fb000384-2201-41fa-9338-097bcab095c2.png)

## Amazin bootstrap that you can add responsiveness to almost any breakpoint as wish

Source(inspiration): [Click here](https://stackoverflow.com/a/71392811)

Source(bootstrap): [Click here](https://getbootstrap.com/docs/5.0/utilities/api/#enable-responsive)

![image](https://user-images.githubusercontent.com/31458531/208155380-ea58192d-174a-4369-8505-da9dca306c0d.png)

## Amazing hack for making w-md-75 work (see above heading as well to actually make such properties truly responsive entities)

Source: [Click here](https://stackoverflow.com/a/68552089)

![image](https://user-images.githubusercontent.com/31458531/208157914-73eec3b8-3324-4498-8e4a-99f7ac1888ee.png)

## Get bootstrap/any css variable value in javascript

Source: [Click here](https://stackoverflow.com/a/41725782)

![image](https://user-images.githubusercontent.com/31458531/208726774-cc215f0d-1353-42ad-881b-3a68a67478ea.png)
