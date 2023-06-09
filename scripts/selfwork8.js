/*
**Esercizio 1**

- Crea un oggetto attraverso il metodo costruttore (o function o class) di un Garage.
- Nel Garage ci dovranno essere almeno le seguenti proprietà:
    - Nome del Garage
    - Max posti disponibili: 10
    - Array di veicoli
- Creare poi un costruttore di un Automobile con le seguenti proprietà:
    - Brand
    - Model
    - Year
- Fare una funzione che aggiunga dinamicamente le automobili all’array di veicoli del Garage.
- Nell’esecuzione della precedente funzione tenere in considerazione i max posti disponibili ed intercettare l’errore.

TIP: potete approcciare all’esercizio in diversi modi. O create semplicemente delle funzioni per aggiungere il veicolo oppure potete sbizzarrirvi con il prompt e far inserire all’utente i dati del veicolo. (ricordatevi che potrebbe esservi d’aiuto il while).
*/
// function Garage(garageName,maxFreePositions,cars){
//     this.name = garageName;
//     this.maxFreePositions = maxFreePositions;
//     this.cars = cars;
// }

// let garageSabah=new Garage("Sabah",10,[]);

// console.log(garageSabah);
 

// function Car(brand,model,year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//  }

//  let fiat=new Car("fiat","Panda",2021);
//  let mercedes=new Car("mercedes","c-class",2004);
//  let audi=new Car("audi","Q7",2019);

// function addCar(car){
//     garageSabah.cars.push(car);

//     if(garageSabah.cars.length>garageSabah.maxFreePositions){
//         console.log("non ci sono più posti disponibili");
//     }else{
//         console.log(`abbiamo ancora:`,garageSabah.maxFreePositions-garageSabah.cars.length,`posti disponibili`);
//     }

// };

// addCar(fiat);

// addCar(mercedes);

// addCar(audi);


//Esercizio 2

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
]

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

const productsArray = products.map(product => new Product(product.id, product.title, product.price, product.description, product.category, product.image, product.rating.rate));

console.log(productsArray);

/*
Creare una funzione che mi restituisca in output (come array) tutti gli oggetti filtrati sulla base della categoria che gli passerò come input (parametro in ingresso).
*/
function filterCategory(ProductsArray,category) {
    return ProductsArray.filter(product => product.category === category);

}

console.log(filterCategory(productsArray,"clothing"));

console.log(filterCategory(productsArray,"electronics"));

console.log(filterCategory(productsArray,"jewelery"));

/*
Creare una funzione che mi restituisca in output (come array) tutti gli oggetti che hanno un voto maggiore o uguale al voto che gli passerò come input (parametro in ingresso).
*/
function filterRating(ProductsArray,rating) {
    return ProductsArray.filter(product => product.rating.rate >= rating);
}

;
filterRating(productsArray, rating);
/*
Creare una funzione che mi restituisca in output (come array) tutti i prodotti che hanno un prezzo maggiore uguale a quello passato come input (parametro in ingresso).
*/
function filterByPrice(ProductsArray,price) {
	return ProductsArray.filter(product => product.price >= price);
}

filterByPrice(productsArray,price);





   



 