//esercizio 1

// const a=[3, 7, 2, 5, 8];
// const b=[9, 3, 1, 4, 7];

// function calculate (array_a,array_b,operazione="addizione"){
//   const resultArray=[];
//     let result;
//     for(let i=0;i<array_a.length;i++){
//        switch (operazione){
//         case "addizione":
//             result=array_a[i]+array_b[i];
            // console.log(result)
//             break;
//         case "sottrazione":
//             result=array_a[i]-array_b[i];
//             break;
//         case "moltiplicazione":
//             result=array_a[i]*array_b[i];
//             break;
//         case "divisione":
//             result=array_a[i]/array_b[i]
//             break;
//         default:
//             console.log(`operazione non valida`);
//             return;

//        }
//        resultArray.push(result)
//         }
//         return resultArray

// }

// calculate(a,b,"addizione");
// const c=calculate(a,b,"addizione");
// console.log(c)

/***Esercizio 2**

Dato un array x e un valore y. Tutto ciò che dovete fare, tramite la funzione, è verificare se l'array fornito contiene il valore.
L'array può contenere numeri o stringhe. Y può essere uno dei due.

*Es:*
`check([66, 101], 66) // true
check(['what', 'a', 'great', 'kata'], 'kat') // false`
*/
// const x=[66,101];
// const x2=['what', 'a', 'great', 'kata'];
// let y;
// function check(arr_x,value_y){
//     let checkValue=arr_x.includes(value_y);
//     return checkValue;

// }
// let checkValue=check(x,66)
// console.log(checkValue)
// let checkValue2=check(x,`kat`)
// console.log(checkValue2)

// const nums1=[1,-4,7,12];
// const nums2=[-1,-4,-7,-12];
// function sumPositives(nums){
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>0){
//             sum+=nums[i];
//         }
//     }
//     return sum
// }
// let result=sumPositives(nums1);
// console.log(result);
// let result2=sumPositives(nums2);
// console.log(result2)

/**Esercizio 4**

Dato un array di prodotti:

- `[”Smartphone”, “Auricolari Bluetooth”, “Motorino”, “Auto”, “T-shirt”, “Felpa con cappuccio”, “Nano da giardino”, "Videogioco Super Nintendo"]`
- Tramite un prompt che chieda all’utente di cercare il prodotto in archivio:
    - se il prodotto è stato trovato fare un **alert** del prodotto trovato
    - in caso in cui il prodotto non sia stato trovato fare un **alert** adeguato, e far ripetere la ricerca facendo ripartire il prompt. (BONUS)
    - tenere presente il *caseSensitive*, quindi far si che che non ci sia differenza tra maiuscole e minuscole.

TIP: Fare una funzione `find()` che accetti come parametri in ingresso i prodotti.

Es:

`function find(prodotti) { … }`
*/
// abbiamo un array
//dobbiamo fare un promt
//dobbiamo creare una funzione
//stare attenti alle maiuscole

const products = [
  "Smartphone",
  "Auricolari Bluetooth",
  "Motorino",
  "Auto",
  "T-shirt",
  "Felpa con cappuccio",
  "Nano da giardino",
  "Videogioco Super Nintendo",
];



function find(prodotti) {
    let productFound = false;
    while (!productFound) {
      let request = prompt("Cerca un prodotto in archivio");
      for (let i = 0; i < prodotti.length; i++) {
        if (request.toLowerCase()===prodotti[i].toLowerCase()) {
          alert("Il prodotto cercato è presente in archivio");
          productFound = true;
          return//prodotti[i];
        }
      }
      alert("Il prodotto non fa parte del nostro archivio");
    }
  };
  find(products);

/*
**Esercizio 5**

La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y". I risultati di tutte le partite sono registrati nell’array.
Esempio :
`['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']`
Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
Regole per il conteggio dei punti per ogni partita:
se x > y: 3 punti
se x < y: 0 punti
se x = y: 1 punto

Es:
`calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15`


// vi ricordate come "splittare" sulla base di un dato carattere?

*/

// let teamResults=['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];


// function calculatePoints(results){
//    let points=0;
//    for(let i=0;i<results.length;i++){
//     let result=results[i];
//     let [x,y]=result.split(`:`);
//     if(x>y){
//         points+=3;
//     }else if(x==y){
//         points+=1
//     }else{
//         points+=0
//     }
//    } 
//     return points;
// }
// let points1=calculatePoints(teamResults)
// let points2=calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])
// let points3=calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])
// let points4=calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])
// console.log(points1)
// console.log(points2)
// console.log(points3)
// console.log(points4)

/*Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es:
input: “Ciao sono un esercizio sui metodi degli array”
output: Csuesmda
*/
// let stringa="Ciao sono un esercizio sui metodi degli array";

// function primaLettera(frase){
//     let stringa=frase.split(` `)

//     for(let i=0;i<frase.length;i++){

//         console.log(stringa[i].charAt(0));

//     }
//     return stringa

// }
// primaLettera(stringa)


///////////////////////////////////////////////////////////////////////////////////////////////