let i = [];
let _id = [];
let lenses = [];
let name = [];
let price = [];
let description = [];
let imageUrl = [];
let structureProdoites = "";
// ------------Récupérer des donnes api -------------

const api = "http://localhost:3000/api/cameras";
async function getData(){
  const response = await fetch(api)
  const data = await response.json();
  AaffichageProduite(data)
}
// ------------------Fonction pour afficher les donnes automatismes -------------

function AaffichageProduite(data){

//  ----Positon mes produite -----

const PositonMesProduite = document.querySelector(".mesProduite");
//----la boucle for por afichage MesProduite
  for (let i = 0; i < data.length; i++) {

    // mettre les donnes dans des variables ----

    data.forEach ((element, i) => {
      _id[i] = element._id;
      name[i] = element.name;
      price[i] = element.price;
      description[i] = element.description;
      imageUrl[i] = element.imageUrl;
    });
    
    // ---------------afficher les donnes sur la page------------------------
    
  structureProdoites += `
    <a class="col-lg-4 text-decoration-none text-dark" href="../htmlPage/prouditeSelection.html?${_id[i]}">
      <div class="">
        <div class="card shadow p-3 mb-5 bg-white rounded">
          <img src="${imageUrl[i]}" class="img5 card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${name[i]}</h5>
            <p class="card-text">${description[i]}</p>
            <button class="btn btn-primary mt-2" type="submit">découvrir</button>
          </div>
        </div>  
      </div>
    </a>    
  `
  PositonMesProduite.innerHTML = structureProdoites;

  }
}

getData();
