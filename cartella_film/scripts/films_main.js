const searchForm=document.getElementById("searchForm");
const searchInput=document.getElementById("searchInput");
const searchResults=document.getElementById("searchResults")
const title=document.getElementById("title")

 searchForm.addEventListener("submit",function(event){
    event.preventDefault()
    let searchTitle=searchInput.value
   
    //console.log(searchTerm)
    let url=` http://www.omdbapi.com/?t=${searchTitle}&apikey=2b6de25`
    fetch(url)
    .then(res=>res.json())
    .then(film=>{
        //console.log(film)
        createMovieCard(film)
    })

    nascondiSearchBar();
    nascondiTitle();
   
 });

 function createMovieCard(film){
    //console.log(film)
    let row=document.createElement("div")
    row.classList.add("row")
    let cardCol=document.createElement("div","myCard")
    cardCol.classList.add("col-lg-6")
    let cardTemplate=
    `<div class="card" style="width: 100%;">
    <img src=" ${film.Poster} " class="card-img-top" alt=" ${film.Title} ">
    <div class="card-body">
      <h5 class="card-title"> ${film.Title} </h5>
      <p class="card-text"> ${film.Plot} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${film.Type} </li>
      <li class="list-group-item">Year: ${film.Year} </li>
      <li class="list-group-item">Rating: ${film.imdbRating} </li>
    </ul>
    <div class="card-body">
      <a href="../cartella_film/films_page.html" class="card-link">Fai una nuova ricerca</a>
      
    </div>
  </div>`
  cardCol.innerHTML=cardTemplate
  row.appendChild(cardCol)
  searchResults.appendChild(row)
  
    
 };

 function nascondiSearchBar(){
    searchForm.classList.add("d-none")
   

 };
 
 function nascondiTitle(){
  title.classList.add("d-none")
 }
 