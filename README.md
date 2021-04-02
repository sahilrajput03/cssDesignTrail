# CssDesignTrail

This is my personal repo for myself, its kinda cheat sheet.

## FAQ's

### What all do i know in plain css ??

Use `live-server folder_name` to serve a folder or simply run `live-server` from inside the folder.

- Want a color theme: https://coolors.co/generate ~ 🛌︎ sleeper.

### What is `:root` and why do we use it?

`:root` css selector has the highest specificity, and we use it define global things, it could be vars or css properties.

### What is `*` and why do we use it?

`*` is a universal selector that selects every css element, yo!

### Want to make font sizes custom for different sizes of devices, just use css vars for that.

Source, timestamped in yt video [here](https://youtu.be/ykn4XNDwW7Q?t=1212).

### Want to get a demo image fast..?

Try downloading image from below urls: (note: each time url is accessed img changes, so better download it and have it locally.)

```bash
https://unsplash.it/100
https://unsplash.it/200
https://unsplash.it/300
...
https://unsplash.it/900
https://unsplash.it/1000
https://unsplash.it/... and so on...
```

### Specificity

Learn about specificity [here](https://www.youtube.com/watch?v=c0kfcP_nD9E&ab_channel=KevinPowell), amazing exaplanation about inline style, internal css, external style sheets,
and what now, say: classes or id or selector(say (div p p)) or `!important`, this vid is all you need to know about specificity.

### Tip: Use colors with hash

```bash
#000 black
#111
...
#999
#aaa
...
#eee
#fff white
* All in-between shades are grey shades.

```

### Depressed of calculating actual width of a HTML element via formula `actual-width= (width+2*padding+2*margin)`, so use border-box from now!!

[source](https://youtu.be/WlGQdgy-M6w).

#### Way 1

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

#### Way 2

- The benefit of using inherit way is that all lower elements of a element that you define with `box-sizing: content-box;` explicitly to be able to use that, then all the children
  elements in that would use that too, as with universal selector we are saying to all elements to just inherit from its parent in the hierarchy. Hacky, isn't it..? If you feel its
  Hacky, simply use the **Way 1** though.

```css
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
```

Note: Default value of `box-sizing is content-box`, so you must hate it. :D

### Other things

- Browser fallback(i.e, to make Internet explore work with css variables too. ) - Watch it out here
  [how to fix](https://www.youtube.com/watch?v=kCmL-O2T7DY&ab_channel=KevinPowell). Also, you may use SASS to fix browser fallback pretty nicely as kevin suggets
  [here](https://youtu.be/wI80oS3KLxY), I didn't look at that though..

- Manipulating css variables with js [here](https://www.youtube.com/watch?v=cZ0yt67A7OM&ab_channel=KevinPowell).

- Browse css variables playlist from kevin [here](https://www.youtube.com/playlist?list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi).

- Checkout my codesandbox example for cssvars using react(it has the plain html represetation too(i.e., without styled components too)),
  [get it here](https://codesandbox.io/s/css-variables-vs-themeprovider-with-my-custom-bare-popeye-class-addition-j16bc?file=/src/css-vars/vars.css).

## Free ?

Watch video [here](https://youtu.be/KYFwcIRx16g).
