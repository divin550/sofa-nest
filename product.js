const modeBtn = document.getElementById("mode");
const cartBtn = document.querySelector(".cart");
const cartCount = document.querySelector(".cart-count");
const rangeInput = document.getElementById("form-range");
const rangeInput2 = document.getElementById("form-range2");
const cardContainer = document.querySelector(".card-container")

rangeInput.addEventListener("input", (e) => {
  const minPrice = document.getElementById("price-min");
  if (rangeInput.value) {
    minPrice.innerHTML = rangeInput.value;
  }
});
rangeInput2.addEventListener("input", (e) => {
  const maxPrice = document.getElementById("price-max")
  if (rangeInput2) {
    maxPrice.innerHTML = rangeInput2.value
    
  }
});

cardContainer.addEventListener("click", (e)=>{
  const cardBody = document.getElementById("card-body")
  cardBody.classList.toggle("card-click")
  

})
