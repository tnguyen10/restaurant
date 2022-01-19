const data = [
  {
    title: "Beauty Burger",
    description:
      "Handcrafted with the best ingredients, this burger is our premium choice",
    image: "burger2",
  },
  {
    title: "Berry Cheesecake",
    description:
      "Enjoy this tradition dessert that will guarantee to fill your stomach ",
    image: "berryCheesecake",
  },
  {
    title: "Mushroom Pasta",
    description: "A classic choice, hearty and foresty",
    image: "mushroomPasta",
  },
  {
    title: "Roasted Turkey",
    description:
      "Enjoy with friends and family with the traditional Thanksgiving dinner, or buy one just all for yourself",
    image: "turkey",
  },
];

const fillCard = (cardHTML, info) => {
  const template = document.createElement("template");
  template.innerHTML = cardHTML.trim();
  const card = template.content.firstChild;
  card.querySelector(".card-front .card-title").innerText = info.title;
  card.querySelector(".card-front .card-description").innerText =
    info.description;
  card.querySelector(".card-front .card-image").src =
    "../images/" + info.image + ".png";
  return card;
};

const addFlipListener = (card) => {
  card.addEventListener("click", function (event) {
    card.querySelector(".card-inner").classList.toggle("flip");
  });
  return card;
};

const loadMenu = (info) => {
  fetch("../htmls/card.html")
    .then((data) => data.text())
    .then(function (html) {
      data.forEach(function (info) {
        let card = fillCard(html, info);
        card = addFlipListener(card);
        document.querySelector(".menu-content").appendChild(card);
      });
    });
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    loadMenu(data);
  },
  false
);
