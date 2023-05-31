/*Esercizio 1

Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno controllando la proprietà dell’oggetto `readingStatus`
// */
// const library = [ 
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         readingStatus: true
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         readingStatus: true
//     },
//     {
//         title: 'Suzanne Collins',
//         author: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// function Book(title, author, readingStatus) {   
//     this.title = title;
//     this.author = author;
//     this.readingStatus = readingStatus;
//     this.info=function() {
//         ;
//         if(readingStatus==false){
            
//              console.log(`The book ${this.title} by ${this.author} is not read.`);  
//         }else{
        
            
         
//          console.log(`The book ${this.title} by ${this.author} is read.`);
//         }

//     };
        
    
// }
// let book1 = new Book('The Road Ahead', 'Bill Gates', true);
// let book2 = new Book('Walter Isaacson', 'Steve Jobs', true);
// let book3 = new Book('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games',false);

// let books = [book1, book2, book3];

// for (let i=0; i<books.length; i++) {
//     books[i].info();
// }

// /*Esercizio 2

// Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.

// Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita.
// */

// const bowling = {
//     players: [
//       { name : "Giocatore 1",
//         scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10],
//         total:"" 
//     },
//       { name:"Giocatore 2",
//         scores:[9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10],
//         total:""
//     },
//       { name  :"Giocatore 3"
//       , scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7],
//         total:""
//     }
//     ]
//   };
  
  
  // Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

//  function totalScore(scores) {
//     let total=0;
//     for(let i=0;i<scores.length;i++){
//         total+=scores[i];
//     }
//     return total;

//  }
// let totalPayer1=totalScore([10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10]);
// console.log(totalPayer1);
// let totalPayer2=totalScore([9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10]);
// console.log(totalPayer2);
// let totalPayer3=totalScore([10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7]);
// console.log(totalPayer3);

// //per indicare il vincitore faccio un console log utilizzabdo il metodo Math.max()
// let winner=Math.max(totalPayer1,totalPayer2,totalPayer3);
// console.log(`il Vincitore ha totalizzato ${winner} punti`);

// const week={
//     monday:[],
//     tuesday:[],
//     wednesday:[],
//     thursday:[],
//     friday:[],
//     saturday:[],
//     sunday:[]
// };

// function addObject(day,event,hour){
//     let objectToPush={
//         evento:event,
//         inizioEvento:hour
//     }
//     week[day].push(objectToPush);
       
    
//     return objectToPush;
// }
// let monday=addObject("monday","go to university","at 8.30");
// console.log();

// let tuesday=addObject("tuesday","go to restaurant","at 20.30");

// console.log(tuesday);

// let wednesday=addObject("wednesday","go to Gym","at 15.30");

// console.log(wednesday);

// let thursday=addObject("thursday","go pubbing","at 21.00");

// console.log(thursday);

// let friday=addObject("friday","go to work","at 6.30");

// console.log(friday);

// let saturday=addObject("saturday","go to work","at 6.30");

// console.log(saturday);

// let sunday=addObject("sunday","have breakfast at bar","at 10.30");

// console.log(sunday);


     







  
  