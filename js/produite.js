// -------------------Récupération de la chaine de requête dans l’url-----------

const requeteChaine_url_id = window.location.search;
const leId = requeteChaine_url_id.slice(1);

// ------------Récupérer des donnes api -----------
let api01 = `http://localhost:3000/api/cameras/${leId}`;
// -------Affichage des produites à partir des leurs id

async function getDataProduites(){
  const response = await fetch(api01)
  const data = await response.json(); 
  
// ------------------Affichage des produites à partir des leurs id---------
  const potistionElement = document.querySelector(".Produited");


const structureProdoite02 = `
<div class="container">
   <div class="row">  
    <div class="col-2"></div>
      <div class="mt-5 col-sm-12 col-lg-8 col-md-12">
        <div class="card shadow p-3 mb-5 bg-white rounded">
          <img src="${data.imageUrl}" class="img5 card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.description}consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p>le price :${data.price} </p>
            <button class="btn btn-primary mt-2" type="submit">Ajouter au panier</button>
              <select class="mt-2 btn btn-primary" name="" id="">
                  <option class="text-white" value="">
                  ${data.lenses[0]}
                  </option>
                  <option class="text-white" value="">
                  ${data.lenses[1]}
                  </option>
                  <option class="text-white" value="">
                  ${data.lenses[2]}
                  </option>
              </select>   
          </div>
        </div>  
      </div>  
    </div>
</div>      
`;

potistionElement.innerHTML = structureProdoite02;

}
getDataProduites();


