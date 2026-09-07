const navSearch = document.getElementById("nav-search");
const navSearchBtn = document.getElementById("nav-search-btn");
const collectionBtn = document.getElementById("collection-btn");
const categoryCard1 = document.getElementById("category-card1");


navSearchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if (navSearch.value === "sofa" || "interwood" || "oxford" || "moltyhome" || "korean") {
        window.location.href = "product.html"
        
    }
    
    
})

collectionBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "product.html"
    
})

categoryCard1.addEventListener("click", (e)=>{
    e.preventDefault()
    const details = document.createElement("div")
    details.innerHTML = ``
    
})
