// console.log("hello from js.js file.");

const btnClick = () => {
  console.log("clicked!");

  let cssVar1 = "--clr";

  // getting current value of css variable.
  let currentValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar1).trim(); // Note: trim is necessary to remove unnecessary space we get when we fetch the variable value.
  const nextValue = currentValue === "red" ? "green" : "red";

  console.log({currentValue, flag: currentValue === "red", nextValue});

  // setting new value to css variable.
  document.documentElement.style.setProperty(cssVar1, nextValue);
};
