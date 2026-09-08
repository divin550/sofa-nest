const navSearch = document.getElementById("nav-search");
const navSearchBtn = document.getElementById("nav-search-btn");
const collectionBtn = document.getElementById("collection-btn");
const categoryCard1 = document.getElementById("category-card1");
const categoryCard2 = document.getElementById("category-card2");
const categoryCard3 = document.getElementById("category-card3");
const categoryCard4 = document.getElementById("category-card4");
const interwoodDetails = document.querySelector(".interwood-details")


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
    interwoodDetails.classList.toggle("display-none")
    




   
})

categoryCard2.addEventListener("click", (e)=>{
    e.preventDefault()
    const oxfordDetails = document.querySelector(".oxford-details")
    oxfordDetails.classList.toggle("display-none")
})
categoryCard3.addEventListener("click", (e)=>{
    e.preventDefault()
    const moltyfoamDetails = document.querySelector(".moltyfoam-details")
    moltyfoamDetails.classList.toggle("display-none")
})
categoryCard4.addEventListener("click", (e)=>{
    e.preventDefault()
    const koreanDetails = document.querySelector(".korean-details")
    koreanDetails.classList.toggle("display-none")
})

