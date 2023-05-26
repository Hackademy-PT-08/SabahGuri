/*Esercizio 1

Definisci un oggetto **playlist** che contiene una proprietà canzoni. La prorietà canzoni dovrà essere un array.

Inserisci una o 2 canzoni in maniera dinamica e ciascuna deve avere le seguenti proprietà:

- titolo
- nomeCantante
- anno

Ad ogni canzone inserita stampa in console tutte le canzoni.
*/ 
//  let playlist={
//     songs:[]
//  }



// let song1=[{
//     titolo:"La certa",
//     nomeCantante:"Caparezza",
//     anno:2021
// }];
// let song2=[{
//     titolo:"Fuori dal tunnel",
//     nomeCantante:"Caparezza",
//     anno:"non me lo ricordo"
// }];
// let song3=[{
//     titolo:"Mica Van Gogh",
//     nomeCantante:"Caprezza",
//     anno:2015
// }];
//  playlist.songs=[...song1,...song2,...song3];
//  console.log(playlist.songs);


/***Esercizio 2**

Definisci un oggetto **rubrica** che ha come proprietà gli **utenti**. Per ogni utente specificare altre proprietà: **nome**, **cognome**, **telefono** e **indirizzo**. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).

- Quindi popolare la rubrica con dei dati a piacere.
- Crea un metodo all’interno dell’oggetto che restituisca nome cognome e telefono.
- Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
- Crea poi una funzione che scorra tutti gli utenti all’interno della rubrica.
*/ 


/*ercizio 2

Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).

- Quindi popolare la rubrica con dei dati a piacere.
- Crea un metodo all’interno dell’oggetto che restituisca nome cognome e telefono.
- Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
- Crea poi una funzione che scorra tutti gli utenti all’interno della rubrica.

*/

// const rubrica={
//     utenti:[],
// };

// let utente=(nome,cognome,telefono,indirizzo)=>{
//     let utente={
//         nome:nome,
//         cognome:cognome,
//         telefono:telefono,
//         indirizzo:indirizzo,
//         info:function(){
//             return `${this.nome}-${this.cognome}:${telefono}`
//         }
//     }
//     return utente

// };
// let user1=utente("sabah","guri",3294820412,"via roma 3");
// let user2=utente("mario","rossi",3294820412,"via roma 4");
// let user3=utente("giovanni","muciaccia",3294820412,"via roma 5");
// let user4=utente("antonio","conte",3294820412,"via roma 6");
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user1.info());
// delete user1.indirizzo;
// console.log(user1);

// rubrica.utenti.forEach((user)=>{
//     console.log(user.info());
// });



/*Esercizio 3

Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage. 
*/
// let garage={
//     automobili:[],
// }

// function Auto(brand,model,year) {
//     this.brand=brand;
//     this.model=model;
//     this.year=year;
//     this.completeInfo=function (){
//         return `${this.brand} - ${this.model} - ${this.year}`;

//     };
//     this.modelInfo=function (){
//         return `${this.brand}`
//     };
// };

// let renault=new Auto("Renault","Twingo",2021);
// let mercedes=new Auto("Mercedes","Glc",2023)
// let bmw=new Auto("BMW","X5",2021);
// let audi=new Auto("Audi","A4",2021);



// garage.automobili.push(renault);
// garage.automobili.push(mercedes);
// garage.automobili.push(bmw);
// garage.automobili.push(audi);

// console.log(garage.automobili);
 
// function modelli(garage){
//    let models=[]
//     for(let i=0;i<garage.automobili.length;i++){
//        let model=garage.automobili[i].modelInfo();
//     models.push(model);
//     }
//     return models;
// }
   

// let myModels=modelli(garage);

// console.log(myModels);// ho immagazinato solo i modelli in un nuovo array attraverso un ciclo for.


/**Esercizio 4**

Scrivi una funzione che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista “libri” ed una “categoria” passata dall’utente. Il programma dovrà ritornare una lista di tag anchor (naturalmente questi devono essere delle semplici stringhe da mostrare in console) con il relativo url e come contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.

La creazione della url dovrà rispettare queste regole:

- tutte le lettere devono essere minuscole
- gli spazi devono essere sostituiti con il simbolo “-”
- la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”
*/



const LIBRI = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy",
      infoComplete: function(){
        return `${this.titolo}-${this.autore}`
      }
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
      
      
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica",
     
      
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza",
      
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna",
     
    }
  ]

  let searchAcategory=prompt(`Cerca una categoria di libri nella nostra libreria`);
  function findBookByCategory(prompt){
    let research = LIBRI.filter(book => book.categoria.toLowerCase().includes(prompt.toLowerCase()));
    //gestiamo prima il caso in cui non sia presente la categoria che ci viene data in input.
    if(research.length===0){
      return console.log(`La categoria ${prompt} non è presente lista`);
    }
    //se invece la categoria è presente in uno o più libri faccio succedere questo
        research.forEach(book=>{
          console.log(`<a href="www.lamiasuperlibreria.aulab/${book.autore.toLowerCase()}/${book.titolo.toLowerCase().replace(" ", "-")}.html">${book.titolo.toLowerCase().replace(" ", "-")}</a>`)

        })    
  };

 console.log(findBookByCategory(searchAcategory));

  

  

  
 
 