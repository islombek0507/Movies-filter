
var partOfMovies = movies.slice(0, 10);
var elCounter = document.querySelector("#counter");
var elList = document.querySelector("#list");
elList.classList.add("d-flex");
console.log(partOfMovies);
function render(array, place) {
    place.innerHTML = null;

    elCounter.textContent = array.length;

    for (var item of array) {
        var newLi = document.createElement("li");
        newLi.classList.add("w-50");
        var newImg = document.createElement("img");
        var newDiv = document.createElement("div");
        var newH3 = document.createElement("h3");
        var newP = document.createElement("p");
        var newP2 = document.createElement("p");
        // newLi.appendChild(elList);
        
            newImg.src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;
            newImg.width = 320;
            newImg.classList.add("w-90")
            newLi.appendChild(newImg);
           
        
        newH3.textContent = item.Title;
        newDiv.appendChild(newH3)
        newDiv.classList.add("card-body");
        
        newP.textContent = `Year: ${item.movie_year}`;
        newDiv.appendChild(newP)
       

        newP2.textContent = `Rating: ${item.imdb_rating}`;
        newDiv.appendChild(newP2);
        
        
        newLi.appendChild(newDiv);
        place.appendChild(newLi);
        // place.textContent=item;
    }
}
var elBtn = document.querySelector("#serc");
var elInput = document.querySelector("#ret");

elBtn.addEventListener("click", function(){
    var newMovies = movies.filter(item => item.movie_year==elInput.value)
    render(newMovies, elList);
})

