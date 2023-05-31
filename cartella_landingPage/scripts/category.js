let categories=[
{
    text:"Sport",
    url :"https://www.sportmediaset.mediaset.it/"
},
{
    text:"Cronaca",
    url :"https://www.repubblica.it/cronaca/?ref=RHHD-M"
},
{
    text:"Politica",
    url :"https://www.ilpost.it/politica/"
},
{
    text:"Attualità",
    url :"https://www.ilpost.it/italia/"
}

];


// menuItems.forEach(item=> {
//     //console.log(item)
//     let listItem=document.createElement("li");// creo il tag list per ogni tag anchor
//     listItem.classList.add("nav-item");//aggiungo al tag list la classe bootstrap
//     let link=document.createElement("a"); //creo il tag anchor per i vari elementi del menu
//     link.classList.add("nav-link");//aggiungo al tag anchor la classe bootstrap 
//     link.setAttribute("href",item.url);//aggiungo al tag anchor il valore dell'attributo href
//     link.textContent=item.name;
//     listItem.appendChild(link);
//     myNavList.appendChild(listItem);
//     if(item.sottomenu.length>0){
//         listItem.classList.add("dropdown");
//         link.classList.add("dropdown-toggle");
//         link.setAttribute("data-bs-toggle","dropdown");
//         link.setAttribute("role","button");
//         link.setAttribute("aria-haspopup","true");
//         link.setAttribute("aria-expanded","false");
//         let dropdown_div=document.createElement("div");
//         dropdown_div.classList.add("dropdown-menu");
//         listItem.appendChild(dropdown_div);
//         item.sottomenu.forEach(subitem=> {
//             let sublistlink=document.createElement("a");
//             sublistlink.classList.add("dropdown-item");
//             sublistlink.setAttribute("href",subitem.url);
//             sublistlink.setAttribute("target","_blank");
//             sublistlink.textContent=subitem.text;
//             dropdown_div.appendChild(sublistlink);

//         } );       
        
        
        
       
//     }

    
    
// });


// articles.forEach(article=> {
    
//     //console.log(articel);
//     let cardElement=document.createElement("div");
//     cardElement.classList.add("col-4","mb-4","myCard");
   
    
    
//     let cardTemplate=
//     `
//     <div class="card" style="width: 18rem;">
//     <img src="${articel.image}" class="card-img-top" alt="">
//     <div class="card-body">
//       <h5 class="card-title">${articel.title}</h5>
//       <p class="card-text"> ${articel.description} </p>
//     </div>
    
//     <div class="card-body">
//     <a href="${articel.url}"><span class="badge bg-secondary">leggi l'articolo</span></a>
//     <a href=""><span class="badge bg-primary">${articel.category}</span></a>
      
//     </div>
//   </div>
//     `
//     cardElement.innerHTML=cardTemplate;
//     row.appendChild(cardElement);
// } );