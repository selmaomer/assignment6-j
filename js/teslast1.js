
let allitems=[];
let gamedetails={};
let details_games=document.getElementById('detailsContent');
let detailssection=document.getElementsByClassName('.details');

 let btnClose=document.getElementById('btnClose');
 let  mainsection=document.getElementsByTagName('main');
 //let  =document.getElementsByClassName('.col');

let lilist=document.querySelectorAll('ul li');

for (let i=1; i<lilist.length;i++){
    lilist[i].addEventListener('click',function(eventInfo){
        let genre=eventInfo.target.innerHTML;
        console.log(genre);
        getGames(genre);

    })
}

//btnClose.addEventListener("click", myFunction);
   // function hidesection() {
//document.getElementsByClassName('.main').style.display='none';
//document.getElementsByTagName('.details').style.display='block';

    //}
    
    function hide() {
        document.getElementById("gameData").classList.add("d-block", "d-none");

        getDetails();
        //document.getElementsByClassName(".details").classList.add("d-none","block");
        document.getElementsByClassName(".details").classList.replace("d-none","block");
        //document.getElementsById(".details").classList.add("d-none", "block");

        //detailssection.classList.add("d-none", "d-block");
        //document.getElementsByClassName(".de").classList.add("d-none", "d-block");

    }

async function getDetails(id){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb6bfc949bmsh5ae19e03b29b1b4p1cd661jsn8c524b375463',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response= await api.json();
        console.log(response);
    
    
    }
    //getDetails();

async function getGames(genre){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb6bfc949bmsh5ae19e03b29b1b4p1cd661jsn8c524b375463',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };
    

     let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,options);
     allitems= await api.json();
     console.log(allitems);
      displayGame() ;

}
function displayGame() {
    var cartona = ``;
    for (var i = 0; i < allitems.length ; i++) {

      cartona += `
      <div class="col-md-4">
      <div class="item" onclick ="getDetails(${allitems[i].id})">
      <div  class="card h-100 bg-transparent"   role="button" "="">
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
    async function getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eb6bfc949bmsh5ae19e03b29b1b4p1cd661jsn8c524b375463',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
            const response= await api.json();
            gamedetails=response;
            console.log(gamedetails);
            displayDetails();
               
        }

        function displayDetails() {
            var cartona = ``;
        
              cartona += `
              <div class="col-md-4">
              <div class="item">
              <h4>${gamedetails.title}</h4><span>free</span>

              <img src="${gamedetails.thumbnail}" class= "w-100">
              <p class="small">${gamedetails.short_description}</p>
              <p>${gamedetails.genre}</p>
              <p>${gamedetails.platform}</p>
              
              </div>
              </div>
              `
              document.getElementById("detailsContent").innerHTML = cartona;

            }
        
        