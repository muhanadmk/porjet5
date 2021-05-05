// -------------------Récupération de la chaine de requête dans l’url-----------
const requeteChaine_url_id = window.location.search;
const leId = requeteChaine_url_id.slice(1);
// ------------Récupérer des donnes api -----------
let api01 = `http://localhost:3000/api/cameras/${leId}`;
// -------Affichage des produites à partir des leurs id
async function getDataProduites(){
  const response = await fetch(api01)
  const data = await response.json(); 
  console.log(leId);

}
getDataProduites();


// ------------------Affichage des produites à partir des leurs id---------

// const idProduiteSelector = data.find((element) => element._id === _id);
// console.log(idProduiteSelector);

const potistionElement = document.querySelector(".Produited");

const structureProdoite02 = `
<a class="text-decoration-none text-dark" href="../htmlPage/prouditeSelection.html?${_id[i]}">
<div class="mt-5 col-sm-12 col-lg col-md-12">
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img src="${imageUrl[i]}" class="img5 card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name[i]}</h5>
      <p class="card-text">${description[i]}consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
      <button class="btn btn-primary mt-2" type="submit">découvrir</button>
    </div>
  </div>  
</div>
</a>    
`;

potistionElement.innerHTML = structureProdoite02;