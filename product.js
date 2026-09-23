const modeBtn = document.getElementById("mode");
const cartBtn = document.querySelector(".cart");
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
let cartCountVal = 0

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
    const cardBody = card.querySelector(".card-body");
    cardBody.classList.toggle("card-click");
  });
  const cartContent = document.createElement("div");
  cartContent.classList.add("cart-content");
  cartContent.style.marginTop = "1rem"
  const cartContentHtml = `
  <img
  class="cart-item-image"
  src="${data.Image}"
  alt="Sofa chair"
  />
  <div class="cart-item-details">
                <h4>${data.title}</h4>
                <div class="cart-price-sec">Rs<span class="sofa-cart-price">${data.price}</span></div>
                <div class="cart-quantity-controls">
                <button type="button" aria-label="Decrease quantity" class="subtract-btn">-</button>
                <span class="cart-quantity-controls-value">0</span>
                <button type="button" aria-label="Increase quantity" class="plus-btn">+</button>
                </div>
                </div>
                <button
                class="cart-delete-button"
                type="button"
                aria-label="Remove Interwood from cart"
                title="Remove from cart"
                >
                <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
                `;
  const addToCartBtn = card.querySelector(".add-to-cart-btn");
  const offcanvasBody = document.querySelector(".offcanvas-body2");
  const cartCount = document.querySelector(".cart-count");
  let isAdded = false
  addToCartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartContent.innerHTML = cartContentHtml;
    console.log(offcanvasBody);
    offcanvasBody.appendChild(cartContent);
    if (!isAdded) {
      isAdded = true
      cartCountVal++
      cartCount.innerHTML = cartCountVal
    }
    
    
    
    const plusBtn = cartContent.querySelector(".plus-btn");
    const subBtn = cartContent.querySelector(".subtract-btn");
    let val = 0;
    let price = data.price;
    plusBtn.addEventListener("click", (e) => {
      const cartQuantityControlsValue = cartContent.querySelector(
        ".cart-quantity-controls-value",
        console.log(plusBtn),
      );
      const sofaCartPrice = cartContent.querySelector(".sofa-cart-price");
      val++;
      cartQuantityControlsValue.innerHTML = val;
      if (val > 0) {
        sofaCartPrice.innerHTML = price * val;
      }
    });
    subBtn.addEventListener("click", (e) => {
      const cartQuantityControlsValue = cartContent.querySelector(
        ".cart-quantity-controls-value",
      );
      const sofaCartPrice = cartContent.querySelector(".sofa-cart-price");
      if (val >= 1) {
        cartQuantityControlsValue.innerHTML = val--;
        sofaCartPrice.innerHTML = price * val;
      } else if (val === 1) {
        sofaCartPrice.innerHTML = price;
      }
    });
    const cartDeleteBtn = cartContent.querySelector(".cart-delete-button");
    cartDeleteBtn.addEventListener("click", (e) => {
      const cartContent = document.querySelector(".cart-content");
      cartContent.remove();
  
      console.log(e);
    });
  });
});
