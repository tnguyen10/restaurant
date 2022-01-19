function load(element) {
  fetch(`${element}.html`)
    .then((data) => data.text())
    .then((html) => (document.querySelector(element).innerHTML += html));
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    load("head");
    load("header");
    load("footer");
  },
  false
);
