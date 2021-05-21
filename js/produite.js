// -------------------Récupération de la chaine de requête dans l’url-----------

const requeteChaine_url_id = window.location.search;
const leId = requeteChaine_url_id.slice(1);

// ------------Récupérer des donnes api -----------
let api01 = `http://localhost:3000/api/cameras/${leId}`;
// -------Affichage des produites à partir des leurs id
console.log(api01);
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
            <p class="text-center">le price : ${data.price/ 100 + "  €"} </p>
            <button id="btnEnvoyer" class="btn btn-primary mt-2" type="submit">Ajouter au panier</button>
            <form class="btn" action="">
              <select id="Option_produite" class="Option_produite mt-2 btn btn-primary text-center" name="Option_produite">
              </select>
              <select id="Quantite_produite" class="Quantite_produite mt-2 btn btn-primary text-center" name="Quantite_produite">
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

for (let v = 0; v < nombreDeOption.length; v++) {
  optionStrcture = optionStrcture +
  `
  <option class="text-white" value="${v}">
  ${nombreDeOption[v]}
  </option>
  
  `
};
// ---- inserer le option html dans la page
const potistionOptions = document.querySelector(".Option_produite");
potistionOptions.innerHTML = optionStrcture;


// Quantite : choisir les Quantité de les produites
const structureQantite = `
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
`;

const potistionQantite = document.querySelector("#Quantite_produite");
potistionQantite.innerHTML = structureQantite;


// ------------ panier--------------------------------------------------------

// ----------Recouper des donnes que l’utilisateur choisisse et les enovyer au panier --------------------

// -------Selection de de l'id du form--------------------------------

// ----Selection du button ajouter au panier

const btnEnvoyerPanier = document.querySelector("#btnEnvoyer");



// faire un event pour le btn qui envyer les donnees
// mettre les donnees dans un tableau

btnEnvoyerPanier.addEventListener("click", (event) => {
  event.preventDefault();

 // Quantite : mettre la Quantite dans un variable
const chixQuantite = potistionQantite.value;

console.log(chixQuantite);
let optionProduitePreso = {
  nameProduite : data.name,
  idDeProudite : leId,
  priceProduite : (data.price /100) * chixQuantite,
  imageProduite : data.imageUrl,
  // Option_produite : chixForm
  Quantite: chixQuantite,
};


// ----------------------------------------le local storage---------------------------------------------
// ​ -----------Stocker la récupération des valeurs du formulaire dans le local storage--------------------------------

// ici pour Transférer les forme josn ver objet js

let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));

// ----message Conformations du Panier

const alretConformationsPanier = () => {
  if(window.confirm(`${data.name} a bien ete ajoute au panier 
  Consulter le panier ou revenir ver page d’accueil `)) {
   window.location.href = "../porjet5/panier.html";
  }
  else{
    window.location.href = "index.html";
  }
}

// ---Vérifier s’il y a des data dans le localstorge

if (produitesDansLeLocalStorage) {
  produitesDansLeLocalStorage.push(optionProduitePreso);
  localStorage.setItem("produite", JSON.stringify(produitesDansLeLocalStorage));
   console.log(produitesDansLeLocalStorage);
   alretConformationsPanier();

}
// ---s’il n'y a pas de data dans le localstorge

else {
  produitesDansLeLocalStorage = [];
  produitesDansLeLocalStorage.push(optionProduitePreso);
  localStorage.setItem("produite", JSON.stringify(produitesDansLeLocalStorage));
  console.log(produitesDansLeLocalStorage);
  alretConformationsPanier();
  
}
});

}

getDataProduites();









