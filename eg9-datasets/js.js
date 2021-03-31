let {log} = console;

const changeDataSet = () => {
  // check if `data-theme` key is there in attributes object(coz it doesn't on initial page load.)
  const isdataset = "data-theme" in document.body.attributes;

  log(getDataSet());

  if (!isdataset) {
    log("if");
    setDataSet("dark");
  } else {
    log("else");
    let nextTheme = getDataSet() === "dark" ? "light" : "dark";
    setDataSet(nextTheme);
  }
};

const getDataSet = () => document.body.getAttribute("data-theme");

const setDataSet = (input) => {
  document.body.setAttribute("data-theme", input);
};

// NOTE setAttribute and getAttribute should (99%) work for all elements that you can get by getElementByTag, yikes!!
