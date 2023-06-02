let cardContainer=document.getElementById("cardContainer")
fetch("https://dummyjson.com/products?skip=5&limit=9")
.then(response=>response.json())
.then(products=>{
    //console.log(products) //come ristultato abbiamo ottenuto un oggetto contente un array di oggetti
    let productsArray=products.products
    //console.log(productsArray)
   
    productsCard(productsArray)
   
});

function productsCard(productsArray){
    //console.log(productsArray)
    let row=document.createElement("div")
    row.classList.add("row","card-deck")
    
    
    productsArray.forEach(product=> {
        console.log(product)
        let colElement=document.createElement("div")
    colElement.classList.add("col-sm-12","col-lg-4","mb-2")

        let productCardTemplate=`
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
      </div>`
      colElement.innerHTML=productCardTemplate
      row.appendChild(colElement);
    });
    
    cardContainer.appendChild(row)
}











