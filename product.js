const modeBtn = document.getElementById("mode");
const cartBtn = document.querySelector(".cart");
const cartCount = document.querySelector(".cart-count");
const rangeInput = document.getElementById("form-range");
const rangeInput2 = document.getElementById("form-range2");
const cardContainer = document.querySelector(".card-container");

rangeInput.addEventListener("input", (e) => {
  const minPrice = document.getElementById("price-min");
  if (rangeInput.value) {
    minPrice.innerHTML = rangeInput.value;
  }
});
rangeInput2.addEventListener("input", (e) => {
  const maxPrice = document.getElementById("price-max");
  if (rangeInput2) {
    maxPrice.innerHTML = rangeInput2.value;
  }
});

const cardData = [
  {
    title: "oxford",
    price: 90000,
    Image: "assets/best-image3.last.jpg",
  },
  {
    title: "Interwood",
    price: 450000,
    Image: "assets/best-image2.jpg",
  },
  {
    title: "Korean",
    price: 200000,
    Image: "assets/contact-bg.jpg",
  },
  {
    title: "MoltyHome",
    price: 150000,
    Image: "assets/best-image1.jpg",
  },
];

cardData.forEach((data) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "19rem";
  card.style.backgroundImage = `url("${data.Image}")`;
  card.style.backgroundPosition = "center";

  const cardHtml = `
        <div class="card-body" id="card-body">
          <p class="card-title">${data.title}</p>
          <p class="card-price">Rs <span id="price">${data.price}</span></p>
          <button type="button" class="btn add-to-cart-btn">Add to cart</button>
        </div>
      `;
 

  card.innerHTML = cardHtml;
  cardContainer.appendChild(card);

  card.addEventListener("click", (e) => {
    const cardBody = document.querySelector(".card-body")
    cardBody.classList.toggle("card-click")
  });
});
