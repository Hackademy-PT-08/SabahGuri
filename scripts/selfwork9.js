const products = [
	{
		"id": 1,
		"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		"price": 109.95,
		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		"rating": {
			"rate": 3.9,
			"count": 120
		}
	},
	{
		"id": 2,
		"title": "Mens Casual Premium Slim Fit T-Shirts ",
		"price": 22.3,
		"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		"rating": {
			"rate": 4.1,
			"count": 259
		}
	},
	{
		"id": 3,
		"title": "Mens Cotton Jacket",
		"price": 55.99,
		"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		"rating": {
			"rate": 4.7,
			"count": 500
		}
	},
	{
		"id": 8,
		"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
		"price": 10.99,
		"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 1.9,
			"count": 100
		}
	},
	{
		"id": 9,
		"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
		"price": 64,
		"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
		"rating": {
			"rate": 3.3,
			"count": 203
		}
	}, 
	{
		"id": 10,
		"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		"price": 109,
		"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
		"rating": {
			"rate": 2.9,
			"count": 470
		}
	},
	{
		"id": 6,
		"title": "Solid Gold Petite Micropave ",
		"price": 168,
		"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 3.9,
			"count": 70
		}
	}
];



class Product {
    constructor(id, title, price, description, category, image, rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}
let mappedProducts = products.map(product=>new Product(
    product.id,
    product.title,
    product.price,
    product.description,
    product.category,
	product.image
)
    );


    
let container = document.getElementById("container");
let row=document.createElement("div");
row.classList.add("row");
//funzione per iniettare gli articoli in html


// creazione filterbar
let filterbar=document.createElement("div")
filterbar.classList.add("col-sm-12","mb-3");

let select=document.createElement("select");
select.classList.add("form-control");
let categoriesArray=[];
mappedProducts.forEach(product => {
	//console.log(product)
	if(!categoriesArray.includes(product.category)){
		categoriesArray.push(product.category)
	};

});
//console.log(categoriesArray)
categoriesArray.forEach(category=>{
	//console.log(category)

	let option=document.createElement("option");
	option.value=category
	option.text=category
	select.appendChild(option)
});

select.addEventListener("change",()=>{
	let selectedCategory=select.value
	let filteredProducts=mappedProducts.filter(product=>product.category===selectedCategory)
	renderProducts(filteredProducts)
});
filterbar.appendChild(select);
row.appendChild(filterbar);
container.appendChild(row)
//console.log(container)

//funzione per iniettare gli articoli in html
function renderProducts(products){
	let cardDeck=document.createElement("div");
	cardDeck.classList.add("card-deck")
	products.forEach(product=>{
		let cardTemplate=
		`
		<div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text"> ${product.description} </p>
        </div>
       
        <div class="card-body">
        <a href=""><span class="badge bg-secondary"></span></a>
        <a href=""><span class="badge bg-primary">${product.category}</span></a>
         
        </div>
      </div>
		`
		let cardDiv=document.createElement("div")
		cardDiv.classList.add("col-12","col-md-4")
		cardDiv.innerHTML=cardTemplate;
		cardDeck.appendChild(cardDiv);
		row.appendChild(cardDeck)
	})
};
renderProducts(mappedProducts)
//console.log(container)









    

    //creo una funzione che mi permette di crare delle card dove inserire i vari prodotti

    

