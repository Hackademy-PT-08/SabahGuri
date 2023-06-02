let container=document.getElementById("container")
fetch("https://dummyjson.com/products?skip=5&limit=20")  
.then(response=>response.json())
.then(products=>{
    let productsArray=products.products
   
   categoryCards(productsArray)
})


function categoryCards(productsArray){
    productsArray.forEach(product=> {
        let category=product.category;
        let row=document.createElement("div")
            row.classList.add("row",)
        if(category.includes("laptops")){
            console.log(product)
            let cardCol=document.createElement("div");
            cardCol.classList.add("col-12","col-lg-4","mb-2");
            let cardTemplate=
            `
            <div class="card myCard" style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text"> ${product.description} </p>
            </div>
           
            <div class="card-body">
            <div><span class="badge bg-primary">Categoria: ${product.category} </span></div>
            <div><span class="badge bg-secondary">Prezzo:€ ${product.price} </span></div>
    
            </div>
          </div>
            
            
            
            `
            cardCol.innerHTML=cardTemplate;
            row.appendChild(cardCol);
            
        }
        container.appendChild(row)
     });
}