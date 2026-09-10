const modeBtn = document.getElementById("mode")
const cartBtn = document.querySelector(".cart")
const cartCount = document.querySelector(".cart-count")
const cartMode = document.querySelector(".chart-mode")


modeBtn.addEventListener("click", (e)=>{
    const body = document.querySelector("body")
    body.classList.toggle("black")
    if (body.classList.contains("black") === true) {
        cartMode.classList.add("white")

        
    }

})
