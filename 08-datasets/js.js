// console.log("test...");
let {log} = console;

const changeDataSet = () => {
  // check if `data-theme` key is there in attributes object(coz it doesn't on initial page load.)
  const isdataset = "data-theme" in document.body.attributes;

  if (!isdataset) {
    setDataSet("dark");
  } else {
    let nextTheme = getDataSet() === "dark" ? "light" : "dark";
    setDataSet(nextTheme);
  }
};

const getDataSet = () => {
  // return document.body.attributes["data-theme"].value; // this works thought, but looks ugly though..!
  return document.body.getAttribute("data-theme"); // this is more generic and easy way, and works for everywhere.!
};

const setDataSet = (input) => {
  // document.body.dataset.theme = input; // somewhat looks ugly, but this works too.
  // Below way is a more classical way to deal with any html node, yikes!!
  document.body.setAttribute("data-theme", input);
};
