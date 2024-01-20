//class to create the details of game
let detailsGames=document.getElementById('detailsContent');
let gamedeobject={};

class gameDetails{
 construct(id,title,thumbnail,short_description,platform){
this.id=id;
 this.title=title;
 this.thumbnail=thumbnail;
 this.short_description=short_description;
  this.platform=platform;
 }
  async getDetails(id){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb6bfc949bmsh5ae19e03b29b1b4p1cd661jsn8c524b375463',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const api = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
const response= await api.json();
	console.log(response);
    gamedeobject=response;

}}


        function displayDetails() {
            var cartona = ``;
        
              cartona += `
              <div class="col-md-4">
              <div class="item">
              <h4>${gamedeobject.title}</h4><span>free</span>

              <img src="${gamedeobject.thumbnail}" class= "w-100">
              <p class="small">${gamedeobject.short_description}</p>
              <p>${gamedeobject.genre}</p>
              <p>${gamedeobject.status}</p>

              <p>${gamedeobject.platform}</p>
              
              </div>
              </div>
              `
              document.getElementById("detailsContent").innerHTML = cartona;

            }
        
        
let id=452;
let getdetail1=new gameDetails();
console.log(getdetail1.getDetails(452));

