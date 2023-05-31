let menuItems=[
    {
        name:"Home",
        url:"#",
        sottomenu:[]
    },
    {
        name:"categories",
        url:"#",
        sottomenu:[...categories]
    },
    {
        name:"About",
        url:"#",
        sottomenu:[]
    },
    {
        name:"Contact",
        url:"#",
        sottomenu:[]
    }
];


const myNavbar_div=document.getElementsByClassName("myNavbar")[0];
//console.log(myNavbar);
let myNavList=document.createElement("ul");
myNavList.classList.add("navbar-nav","me-auto");
//console.log(myNavList);
myNavbar_div.insertBefore(myNavList,myNavbar_div.childNodes[0]);
//console.log(myNavbar_div);


function creatMyMenuItes(target,menuItems) {
  
menuItems.forEach(item=> {
  //console.log(item)
  // creo tutte le voci del menu 
  let listItem=document.createElement("li");
  listItem.classList.add("nav-item");
  let link=document.createElement("a"); 
  link.classList.add("nav-link");
  link.setAttribute("href",item.url);
  link.textContent=item.name;
  listItem.appendChild(link);
  myNavList.appendChild(listItem);
  if(item.sottomenu.length>0){
      listItem.classList.add("dropdown");
      link.classList.add("dropdown-toggle");
      link.setAttribute("data-bs-toggle","dropdown");
      link.setAttribute("role","button");
      link.setAttribute("aria-haspopup","true");
      link.setAttribute("aria-expanded","false");
      let dropdown_div=document.createElement("div");
      dropdown_div.classList.add("dropdown-menu");
      listItem.appendChild(dropdown_div);
      item.sottomenu.forEach(subitem=> {
          let sublistlink=document.createElement("a");
          sublistlink.classList.add("dropdown-item");
          sublistlink.setAttribute("href",subitem.url);
          sublistlink.setAttribute("target","_blank");
          sublistlink.textContent=subitem.text;
          dropdown_div.appendChild(sublistlink);

          target.appendChild(listItem);
      } );       
      
      
      
     
  }

  
  
});
};




//creo le card degli articoli tramite funzione
let articolo = document.getElementById("article");
let row= document.createElement("div");
row.classList.add("row");
//console.log(row);
articolo.appendChild(row);

function createArticleCards(target,articles){
articles.forEach(article=>{
  //console.log(article);
  let card=document.createElement("div");
  card.classList.add("col-md-4","mb-4");
  row.appendChild(card);
   let cardTemplate=
   `
   <div class="card" style="width: 18rem;">
        <img src="${article.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text"> ${article.description} </p>
        </div>
       
        <div class="card-body">
        <a href="${article.url}"><span class="badge bg-secondary">leggi l'articolo</span></a>
        <a href=""><span class="badge bg-primary">${article.category}</span></a>
         
        </div>
      </div>
   `
   card.innerHTML=cardTemplate;
   target.appendChild(card)

})
};

// faccio il mio form 

 let form=document.getElementById("form");
 
 function submit(e){
    e.preventDefault();
    let data={};
    const emailInput=document.getElementById("email");
    const textInput=document.getElementById("text");
    data.email=emailInput.value;
    data.text=textInput.value;
    emailInput.value="";
    textInput.value="";
    console.log(data);
    //utilizzo il modale 
    const modal= new bootstrap.Modal(document.getElementById("modal",{}));
    modal.show();
 };

 

 





// invoco le varie funzioni

creatMyMenuItes(myNavList,menuItems);
createArticleCards(row,articels);
form.addEventListener("submit",submit);






