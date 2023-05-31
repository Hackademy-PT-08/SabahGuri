let cardContainer = document.getElementById("myCardsContainer");
let row=document.createElement("div");
row.classList.add("row");


function createMyCards(target,products){
    products.forEach(product=>{
       console.log(product);
        let row=document.createElement("div");
        row.classList.add("col-md-4","mb-3");
        let cardTemplate=`
        <div class="card" style="width: 18rem;" id="${product.id}">
            <img src=${product.image} class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text"> ${product.description} </p>
            </div>
           
            <div class="card-body">
                <p class="category">Category: ${product.category}</p>
                <p class="price">Price: ${product.price} </p>
                <p class="rating">Rating: ${product.rating.rate} </p>
            </div>
          </div>
        `
        row.innerHTML=cardTemplate

        
        target.appendChild(row)
    });
};









// invoco la funzione
createMyCards(cardContainer,products);
