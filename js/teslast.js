
let allitems=[];


let lilist=document.querySelectorAll('ul li');

for (let i=1; i<lilist.length;i++){
    lilist[i].addEventListener('click',function(eventInfo){
        let genre=eventInfo.target.innerHTML;
        console.log(genre);
        getGames(genre);

    })
}


async function getGames(genre){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb6bfc949bmsh5ae19e03b29b1b4p1cd661jsn8c524b375463',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };
    

     let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,options);
     let allitems= await api.json();
     console.log(allitems);
      displayGame(allitems) ;

}
function displayGame(allitems) {
    var cartona = ``;
    for (var i = 0; i < allitems.length ; i++) {

      cartona += `
      <div class="col-md-4">
      <div class="item">
      <div  class="card h-100 bg-transparent" role="button" "="">
           <div class="card-body">
              <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src="${allitems[i].thumbnail}">
              
              </figure>
  
              <figcaption>
  
                 <div class="hstack justify-content-between">
                    <h3 class="h6 small">${allitems[i].title}</h3>
                    <span class="badge text-bg-primary p-2">free</span>
                 </div>
  
                 <p class="card-text small text-center text-primary">
                 ${allitems[i].short_description.split(' ').slice(0,8).join(' ')}
                 </p>
  
              </figcaption>
           </div>
        </div>
           <footer class="card-footer small hstack justify-content-between">
  
              <span class="badge badge-color">${allitems[i].genre}</span>
              <span class="badge badge-color">${allitems[i].platform}</span>
  
           </footer>
        </div>
        </div>
      `
    }
    document.getElementById("gameData").innerHTML = cartona;
    }
