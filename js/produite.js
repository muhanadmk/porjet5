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
            <h5 class="card-title text-center">${data.name}</h5>
            <p class="card-text text-center">${data.description}</p>
            <p class="text-center">le price :${data.price/ 100 + " €"} </p>
            <button id="btnEnvoyer" class="btn btn-primary mt-2" type="submit">Ajouter au panier</button>
            <form class="btn" action="">
              <select id="Option_produite" class="mt-2 btn btn-primary text-center" name="Option_produite">
              </select>   
            </form>  
          </div>
        </div>  
      </div>  
    </div>
</div>      
`;

potistionElement.innerHTML = structureProdoite02;
 //----- Forme adapter aux nombres des option
 const nombreDeOption = data.lenses;
 
let optionStrcture = [];
//  ---la boucle for afficher les donnes dans les options

for (let v = 0; v < data.lenses.length; v++) {
  optionStrcture = optionStrcture +
  `
  <option class="text-white" value="${v}">
  ${data.lenses[v]}
  </option>
  
  `
}
// ---- inserer le option html dans la page
const potistionOptions = document.querySelector("#Option_produite");
potistionOptions.innerHTML = optionStrcture;
console.log(potistionOptions);

// console.log(optionStrcture);
// ------------ panier--------------------------------------------------------

// ----------Recouper des donnes que l’utilisateur choisisse et les enovyer au panier --------------------

// -------Selection de de l'id du form--------------------------------

const idForm = document.querySelector("#Option_produite");
const chixForm = idForm.value;
console.log(chixForm);
// ----Selection du button ajouter au panier

const btnEnvoyerPanier = document.querySelector("#btnEnvoyer");


// faire un event pour le btn
btnEnvoyerPanier.addEventListener("click", (eventClick) => {
  eventClick.preventDefault();

let optionProduitePreso = {
  nameProduite : data.name,
  idDeproudite : leId,
  priceProduite : data.price /100,
  Option_produite : chixForm
}

 
console.log(optionProduitePreso);

});

}
getDataProduites();






