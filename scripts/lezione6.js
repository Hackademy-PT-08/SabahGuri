// metodi array
/*il metodo .map() serve per creare un nuovo array applicando una funzione, questo lo si fa attraverso una arrow finction che puo avere una forma compatta e una forma estesa
 */
//esempio
//const numbers=[1,2,3,4,5];
// se utilizziamo il metodo .map avremo ==>
//let result=numbers.map(num=>num*2);
//il map va a fare un ciclo for each..
//il parametro num è come se fosse la (i) del ciclo for e quindi il paramaetro num va a mappare ogni elemento dell'arrai e di quell'elemento ne resitutisce quello che noi indichiamo nell a arrowfunction.
//map quindi ci da un nuovo array modificato
//console.log(result)//==> avremo un nuovo array i cui elementi sono raddoppiati

// poi abbiamo il metodo filter() serve quindi per creare un nuovo array che però deve rispettare una data condizione ovvero deve vontenere il filto che noi gli diamo
//questo metodo lo possiamo intendere come un ciclo for che prevede anche un if==>for(if)

/*abbiamo quindi la*/ //const numbers=[1,2,3,4,5,6,7,8,9,10];
//let result=numbers.filter(num=>num%2===0)
//console.log(result)//==>in console avro solo numero pati
//avro un nuovo array trasformato
//questi due metodi sono molto utilizzati nel funtional programming.

//poi abbiamo il metodo .reduce() che esegue una FUNZIONE su tutti gli elementi dell'array e restituisce un valore unico
//const numbers=[1,2,3,4,5,6,7,8,9,10];
////const sum=numbers.reduce((accumalator,number)=>accumalator+number,0)
//accumulator e number sono i due parametri della funzione

// let book={
//     title:"le notti bianche",
//     author:"dostojevskij",
//     pages:120,
//     info: function(){
//         return `${this.title}-${this.author} \n${this.pages}`
//     }
// }
//  console.log(book.info())

//console.log(book);
// //qui ho moficato il valore delle chiavi
// book.pages=130
// book.title="nuovo titolo";
// book.author="io";
// console.log(book);
// //nello stesso mod oposo anche aggiungere nuove chiavi con annessi valori
// book.year=1860
// console.log(book);
// book.edizioni=[`edizione1`,`edizione2`,`edizione3`]
// console.log(book);

//lezione di RECAP
//javascript è debolmente tipizato quindi non c'è bisogo di dichiarare il tipo di dato.

//tipi di dato di riferimento ci sono gli Array- Oggetti-Funzioni

// const parole ={
//     testo:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure soluta ipsam saepe minima officia omnis illo animi blanditiis maiores quaerat dolorem esse reiciendis eos quod odio sit assumenda quo accusamus ipsa tempora! Minus quos perspiciatis beatae deleniti impedit, doloremque et! In sequi ad laborum quod, quidem, dolores itaque, animi vero exercitationem provident nihil libero. Non illum sapiente deleniti autem ex, officiis dicta nemo molestias quis explicabo architecto voluptatem accusamus et tenetur alias doloribus, eos tempora odio fuga ipsam fugiat. Ducimus, optio! Reiciendis blanditiis eveniet cumque earum. Est fuga blanditiis dolorum nihil sed laborum rem iusto eos sequi, at quas exercitationem inventore itaque similique saepe ipsum? Voluptate, modi impedit! Vitae placeat aliquam eligendi, maiores quo eos repellat blanditiis illum repellendus!`,
//     contaVocali:function(){
//         const vocali=["a","e","i","o","u"];
//         let conteggio=0;
//         for(let i=0;i<this.testo.length;i++){
//             if(vocali.includes(this.testo[i])){
//                 conteggio++
//             }
//         }
//         return conteggio;
//     }
// }
// console.log(`il conteggio delle vocali è:${parole.contaVocali()}`)

// const books = [
//   {
//     title: "il signore degli anelli",
//     author: "JRR TOLKIEN",
//     editor: "Mondadori",
//     info: function () {
//       return `${this.title}-${this.author}`;
//     },
//     languages: ["IT", "EN", "FR", "DE"],
//   },

//   {
//     title:"Trainspotting",
//     author:"Ervine Welsh",
//     editor:"La feltrinelli",
//     info:function(){
//         return `${this.author}-${this.title}`
//     },
//     languages:["IT","EN","DE","FR"],
//   },
//   {
//     title:"Harry Potter",
//     author:"JK ROWLING",
//     editor:"MONDADORI",
//     info:function () {
//         return `${this.title}-${this.author}`
//     },
//     languages:["IT","EN","DE","FR"],
//   }

// ];

// const search=prompt(`Cerca un libro in archivio`);
// const findBook=(value)=>{
//     const found_book=books.find(book=>book.title.toLowerCase().includes(value.toLowerCase()));
//     if(!found_book){
//         return `non ho trovato il libro`;
//     }
//     return   `Ho trovato:${found_book.info()}`;
// };

// let result=findBook(search);
// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////lezione 7///////////////////////////////////////////////////////////////////////////////
// const persona = {
//   name: "mario",
//   surname: "rossi",
//   email: "asasasdasd@live.it",
//   indirizzo: "via non lo so",
//   mostraNomeCognome: function () {
//     return `${this.name}-${this.surname}`;
//   },
//   mostraEmailAdress: function () {
//     return `${this.email}-${this.indirizzo}`;
//   },
// };

// const persona2 = {
//   name: "tizio",
//   surname: "caio",
//   email: "aasd@.it",
//   indirizzo: "chi li sa",
//   mostraNomeCognome: function () {
//     return `${this.name}-${this.surname}`;
//   },
//   mostraEmailAdress: function () {
//     return `${this.email}-${this.indirizzo}`;
//   },
// };
// // per clonare un oggetto lo si può fare come lo si faceva con gli array.
// let marioRossi = {
//   ...persona,
// }; //questo modo di fare si chiama eriditarità di un oggetto

// console.log(marioRossi);

// let giuseppeVerdi = {
//   ...persona,
//   name: "Giuseppe",
//   surname: "Verdi",
//   songs: [
//         {
//             name:"dies irae",
//             year:1800,
//         },
//         {
//             name:"la traviata",
//             year:1801,
//         }
//     ],
// };
// console.log(giuseppeVerdi);

// costruttori

// function Book(title="HARRY potter",author="JK ROWLING",category="fantasy",pages="500"){
//     this.title=title;
//     this.author=author;
//     this.category=category;
//     this.pages=pages;
//     this.shortInfo=function(){
//        return `${this.title}-${this.author}`
//     };
//     this.completeInfo=function(){
//         return`${this.title}-${this.author}\n${this.category}-${this.pages}`
//     }
// };
// let book=new Book();
// console.log(book.shortInfo());
// console.log(book);
// let secondBook=new Book("Le notti bianche","Dostojevsky",120)
// console.log(secondBook.shortInfo());
// console.log(secondBook);
// //secondBook.title="nuovo titolo";
// console.log(secondBook)
// let books=new Array(secondBook,book);
// //books.push(secondBook);
// //books.push(book);
// console.log(books);

// books.forEach((book)=>{
//     console.log(book.completeInfo());
// })

// const person={
//     name:"mario",
//     saluta:function(){
//         console.log(`ciao `+this.name) 
//     },
//     //saluta1:()=>{
//        // console.log("ciao"+this.name) con le arrow functions this. non funziona quindi dobbiamo utilizzare una funzione normle.
//     //}
// }
// person.saluta();
// //person.saluta1();


// //classe
// class Automobile{
//     constructor(marca,model,year){
//         this.marca=marca;
//         this.model=model;
//         this.year=year;
//     }
//     avvia(){
//         console.log(`l'automobile:${this.marca} ${this.model} e stata avviata`);
//     };
//     ferma(){
//         console.log(`l'automobile:${this.marca} ${this.model} e stata fermata`);
//     };
//     accelera(){
//         console.log(`l'automobile:${this.marca} ${this.model} e in accelerazione`);
//     }
// }

// let fordMustang=new Automobile("Ford", "Mustang", 2019);
// console.log(fordMustang);
// fordMustang.accelera();
// fordMustang.avvia();
// fordMustang.ferma();   
// let fiatPanda=new Automobile("Fiat", "Panda", 1990);

// console.log(fiatPanda);
// fiatPanda.accelera();
// fiatPanda.avvia();
// fiatPanda.ferma();   

// metodi oggetti
//Object.entries()
// const person=
// {
//    name:"mario",
//    surname:"rossi",
//    age:36,
// };
// const keyVelue=Object.entries(person);
// console.log(keyVelue);

// //questa proprità divide  tutte le proprità dell'oggetto in array unici con la coppia chiave:valore

// Object.keys(): è un metodo che ci permette di ottenere le ciavi di un oggetto senza il loro valore. il risultato sarrà un array con tutte le proprità
// const book={
//     title:"HARRY potter",
//     author:"JK ROWLING",
//     category:"fantasy",
//     pages:"500",
// }

// const keys=Object.keys(book);
// console.log(keys);

// Object.values() metodo che ci permette di ottenere il valore delle proprotà di un oggetto.
//  function Auto(brand,model){
//     this.brand=brand;
//     this.model=model;
//  }

//  const value=new Auto("Ford","Mustang");
//  console.log(Object.values(value));

// ciclo for...in

// class Song{
//     constructor(title,artist,year){
//         this.title=title;
//         this.artist=artist;
//         this.year=year;
            
//         }

// }
// const mySong=new Song("Dies irae", "La traviata", 800)
// for(let key in mySong){
//     console.log(mySong[key])
// }




