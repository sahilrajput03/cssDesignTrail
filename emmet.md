<!-- src: https://youtu.be/EhRPdUv1ZrA -->
<!-- NOTE: I have disable autoformatting via prettier using .prettierignore file, so you don't mess up with formatting. -->
<!-- Use `ctrl+space tab` to expand each abbrev. below... -->
<!-- Or you use your customized ctrl+e to expand emmet directly. -->

```html
!
<!-- or -->
html:5
<!-- Both do same.. -->

header
<header></header>

btn
<button></button>

img
<img src="" alt="" />

nav
<nav></nav>

header.primary-header
<header class="primary-header"></header>

img.logo
<img src="" alt="" class="logo" />

.container
<div class="container"></div>

section#intro
<section id="intro"></section>

h2.section-title
<h2 class="section-title"></h2>

header.primary-header>img.logo
<header class="primary-header">
  <img src="" alt="" class="logo" />
</header>

nav>ul
<nav>
  <ul></ul>
</nav>

li*5
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>

li*3>a
<li><a href=""></a></li>
<li><a href=""></a></li>
<li><a href=""></a></li>

header.primary-header>.container>img.logo+nav>ul>li*3>a
<header class="primary-header">
  <div class="container">
    <img src="h" alt="" class="logo" />
    <nav>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </nav>
  </div>
</header>

section#intro>.container>h2.section-title.text-accent+p.section-subtitle+.row>.col*3>h3+p*2
<section id="intro">
  <div class="container">
    <h2 class="section-title text-accent"></h2>
    <p class="section-subtitle"></p>
    <div class="row">
      <div class="col">
        <h3></h3>
        <p></p>
        <p></p>
      </div>
      <div class="col">
        <h3></h3>
        <p></p>
        <p></p>
      </div>
      <div class="col">
        <h3></h3>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</section>

link
<link rel="stylesheet" href="" />

link:css
<link rel="stylesheet" href="style.css" />

lorem10
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga!

li*5>a>lorem1
<li><a href="">Lorem.</a></li>
<li><a href="">Ratione.</a></li>
<li><a href="">Harum!</a></li>
<li><a href="">Consequuntur?</a></li>
<li><a href="">Error?</a></li>

.col*3>h3+p*2>lorem15
<div class="col">
  <h3></h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed
    magnam, ratione cum repudiandae fuga!
  </p>
  <p>
    Explicabo repellat reprehenderit magnam, reiciendis deserunt rerum ab, sint
    ipsa sapiente earum unde sunt ducimus.
  </p>
</div>
<div class="col">
  <h3></h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos nisi
    quisquam illum tenetur deserunt?
  </p>
  <p>
    Minus, animi aliquid voluptas dignissimos mollitia beatae doloremque in!
    Optio ea blanditiis unde ipsa animi!
  </p>
</div>
<div class="col">
  <h3></h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore
    aperiam voluptas ullam officiis amet.
  </p>
  <p>
    Illo, eum, incidunt placeat cum veritatis non voluptate quidem quod totam
    mollitia nisi rerum fugit?
  </p>
</div>
```
