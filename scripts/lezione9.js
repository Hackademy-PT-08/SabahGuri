// il DOM non è una parte di JavaScript 
//console.log(document)
// let title=document.getElementById("title");//prendiamo gli elementi dal dom attraverso un id
// console.log(title);

// let paragrafi=document.getElementsByTagName("p");//prendiamo gli elementi dal dom
// console.log(paragrafi[0]);

// let list=document.getElementsByClassName("list-group-item");
// console.log(list);

// //abbiamo anche il querySlector(); da il primo elemnto all'interno del documento che corrisponde al selettore specificato.
// const title2=document.querySelector("#title");
// console.log(title2);

//querySelectorAll();

// let elements=document.querySelectorAll(".list-group-item");
// console.log(elements);
// for (let i=0; i<elements.length; i++){
//     console.log(elements[i]);
//     if(i===2){
//         elements[i].classList.add("bg-success");
//     }
// }

// const lista=document.getElementById("lista");
// console.log(lista);

// const article=document.querySelector("#article");
// console.log(article);
// article.innerHTML = "lorem ipsum dolor sit amet, consectetur adipiscing elit,<b>sed</b> do eiusmod tempor incididunt";
// // con innher.HTML possiamo iniettare del contenuto all'interno dell apagina
// //abbiamo anche .textContent che ci permette per solo di iniettare del testo e non possiamo utilizzare i vari tag.

// //modificare gli attributi degli elements
//  let img=document.getElementById("image"); 
//  const anchor=document.querySelector("#link")

//  img.src="https://tse2.mm.bing.net/th?id=OIP.iuaneukJvV_dIqUsaZE0EgHaE8&pid=Api&P=0&h=180"

//  console.log(img);
//  anchor.href="https://www.google.it"
 
//  anchor.setAttribute("target","_blank");//questo è uyn modo diverso di modificare gli attributi

//  const first=document.querySelector("#first");
//  const second=document.querySelector("#second");
//  first.classList.add("text-success");
//  second.classList.add("text-danger");
//  console.log(first);
//  console.log(second);

//  function editCss(elemnt,className){
    
//      elemnt.classList.add(className);
//  }

//  editCss(first,"text-success");
//  editCss(second,"text-danger");

//  //toggle classList; questo moetodo fa un controlo e sed la classe che li indichiamo è presente la elimina se invece la classe che gli diamo non è presente la inietta.

//  first.classList.toggle("bg-warning");
//  first.classList.toggle("text-dark");

//  //possiamo anche aggiungere un elemento nel DOM e dopo averlo creato lo dobbiamo andre ad "appendere" al suo parent.

// const lista=document.getElementById("lista");
// const item=document.createElement("li");
// item.classList.add("list-group-item");
// lista.appendChild(item);
// item.innerHTML="Sono un nuovo elemnto della lista"

const myList=document.getElementById("myList");
const newItem=document.createElement("li");
newItem.innerHTML="Wiskey";
//myList.appendChild(newItem);
myList.insertBefore(newItem,myList.children[0]);
//si possono anche gli elementi che sono stati inseriti nel DOM
//myList.removeChild(myList.children[1]);









 