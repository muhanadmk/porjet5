// ---decoration le variable ou je trouver les valeurs des produites Dans Le LocalStorage

let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));

let m = 0;
// ------------------------------afficher les produites du panier------------------
// Selection la class ou je vais mettre mes code html
const potistionPanier = document.querySelector("#Produited-panier");
let structureProdoitesPanier = [];
// si la panier est vide : afficher la panier est vide a
if (produitesDansLeLocalStorage === null ||produitesDansLeLocalStorage == 0) {
  const panierVide = `
  <div class="container-panier-vide">
    <h1 class="text-center bg-danger text-white">le panier est vide</h1>
  </div>
  `;
  potistionPanier.innerHTML = panierVide;

} else {
  //si la panier n'est pas vide; afficher les produites 

  for (m = 0; m < produitesDansLeLocalStorage.length; m++) {
    structureProdoitesPanier = 
    structureProdoitesPanier +
     `
     <div class="row mb-4">
     <div class="col-md-5 col-lg-3 col-xl-3">
       <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
         <img class="img-fluid w-100" src="${produitesDansLeLocalStorage[m].imageProduite}" alt="Sample">
         <a href="#!">
           <div class="mask waves-effect waves-light">
             <div class="mask rgba-black-slight waves-effect waves-light"></div>
           </div>
         </a>
       </div>
     </div>
     <div class="col-md-5 col-lg-9 col-xl-7">
       <div>
         <div class="d-flex justify-content-between">
           <div>
             <h5>${produitesDansLeLocalStorage[m].nameProduite}</h5>
           </div>
           <p><strong>Quantite: ${produitesDansLeLocalStorage[m].Quantite}</strong></p>
         </div>
         <div class="d-flex justify-content-between align-items-center">
           <div>
             <a href="" type="button" class="btn-supprimer card-link-secondary small text-uppercase mr-3"></a>
           </div>
           <p class="mb-0"><span><strong>le prix : ${produitesDansLeLocalStorage[m].priceProduite} €</strong></span></p>
         </div>
       </div>
     </div>
   </div>
    `;
  }
    if (m == produitesDansLeLocalStorage.length) {
      //injecter html dans la page du panier
      potistionPanier.innerHTML = structureProdoitesPanier;
    }
}


// ----------------------------------------btn supprimer le panier----------------
// selection le btn de supprimer

const btnSupprimerLePanier = 
`<button class="btn-supprimer-panier btn btn-outline-danger col-12"><strong>vider le panier</strong></button>`

potistionPanier.insertAdjacentHTML("beforeend", btnSupprimerLePanier);
// selection le btn Supprimer Le Panier
const btnViderLePanier = document.querySelector(".btn-supprimer-panier");

// ----supprimer tous le panier
btnViderLePanier.addEventListener("click", (s) => {
  s.preventDefault();

  //vider le locl stroge en utilisatant removeIteme 
  localStorage.removeItem("produite");

  // alret le panier est vide en ce meomente
  
alert("le panier a etait vidé")
  //rechargement de page du panier
  window.location.href = "../panier.html";

});
// -------------------------------------fine de bt sipprimer Panier------------------

//---- -----------------------------------le montant total de prix de panier-----------------
let lePrixTotal = [];

//avoir des prix qui est dans le panier
if (produitesDansLeLocalStorage.length == null) {
  
}else{
  for (let p = 0; p < produitesDansLeLocalStorage.length; p++) {
    let prixProuditeDansLePanier = produitesDansLeLocalStorage[p].priceProduite;
  
    // mettre le prix Total du panier dans le variable "lePrixTotal"
    lePrixTotal.push(prixProuditeDansLePanier);
  }
}

// Additionner les prix qu'il y a dans le tableau de la variable "prixTotalCalcul" avec la méthode reduce

const reducer = (accumulateur, crurentvaleu) => accumulateur + crurentvaleu;
const prixtotal = lePrixTotal.reduce(reducer);

//afichager le prixtotal dans la page du panier
const afficherLePrixTotal = 
`
<h2 class="text-center bg-danger text-white mt-3">Le Prix total est : ${prixtotal} €</h2>
`
// ajouter le prix total apres le dernir enfanet

potistionPanier.insertAdjacentHTML("beforeend", afficherLePrixTotal);

//---- -------------------------------- fin le montant total de prix de panier-----------------

//*************************************la formularie de commande *********************************/


//------Selection de btn-Envoyer-Formulaire
const btnEnvoyerFormulaire = document.querySelector("#btn-Envoyer-Formulaire");

/// quand on coick on envyer les donnes de formulaire
// addEventListener  
btnEnvoyerFormulaire.addEventListener("click", (e) => {
  e.preventDefault();
// recupere les donnes de formulaire et les mettre dans le localStorage
const formulaireVlaeures = {
  Prenome : ("Prenome", document.querySelector("#Prenome").value),
  Nom : ("Nom", document.querySelector("#Nom").value),
  Email : ("Email", document.querySelector("#Email").value),
  Address : ("Address", document.querySelector("#Address").value),
  Ville : ("Ville", document.querySelector("#Ville").value),
};

//************************validation des donnes de formulaire pour qu'ils laissent passer *************/
const textAlert = (value) => {
return `${value} : les chiffre et les syomboles ne sont pas autorisé et le minimum 3 lettre maximum 20 lettre`
};
const regExPrenomNom = (value) => {
  return /^[A-Za-z]{3,25}$/.test(value);
};

const regExAddressVille = (value) => {
  return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(value);
};
const regExEmail = (value) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
};

function controlPrenom(){
  //control de prenome
  const lePrenom = formulaireVlaeures.Prenome;

    if (regExPrenomNom(lePrenom)) {
      return true;
    } else {
      alert(textAlert("prenom"));
      return false;
    }
};

function controlNom(){
  //control de Nom
  const leNom = formulaireVlaeures.Nom;

    if (regExPrenomNom(leNom)) {
      return true;
    } else {
      alert(textAlert("Nom"));
      return false;
    }
};

function controlVille(){
  //control de Ville
  const laVille = formulaireVlaeures.Ville;

    if (regExAddressVille(laVille)) {
      return true;
    } else {
      alert(textAlert("Ville"));
      return false;
    }
};

function controlAddress(){
  //control de Address
  const leAddress= formulaireVlaeures.Address;

    if (regExAddressVille(leAddress)) {
      return true;
    } else {
      alert("l'address n'est pas validé");
      return false;
    }
};

function controlEmail(){
  //control de Email
  const leEmail= formulaireVlaeures.Email;

    if (regExEmail(leEmail)) {
      return true;
    } else {
      alert("le Email n'est pas validé");
      return false;
    }
};

// ----------------fin de validation des donnes de formulaire pour qu'ils laissent passer---------
if (controlPrenom() && controlNom() && controlEmail() && controlAddress() && controlVille()) {
  localStorage.setItem("formulaire", JSON.stringify(formulaireVlaeures));
} else {
  alert("veuillez bien remplier la formulaire");
};

// mettre les values du formulaire et mettre les produites Selectioné dans un objet a envoyer vers le server 

let products = [];
//data des utilisateur qui a remplier la formulaire
let conformeData =  JSON.stringify(localStorage.getItem("formulaire"));
let prenom = conformeData.prenom;
const contact = {
  "firstName" : "muhanad",
  "lastName" : "almokdad",
  "address" : "rue de",
  "city" : "nancy",
  "email": "mouhandmk@gmail.com"
};


const basket = JSON.parse(localStorage.getItem("produite"));
basket.forEach(item => {
  products.push(item.idDeProudite);
});

//envoyer les formulaire et reveovoir le ID requête

// function sendData(fetch('http://localhost:3000/api/cameras/order'),{
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({products, contact})
// });
  
// const re = sendData.then(response => response.json());
//  const data02 = re.then(data => console.log(data));

//  (async () => {
//   const rawResponse = await fetch('https://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({a: 1, b: 'Textual content'})
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();




// envoyer l'oject de aEnvoyerAuServer qui continet le donnes de formulairs et de l'arcticl que on choisisse


  // aller vers page de confromation de commande si conforme la demande
  if (controlPrenom() && controlNom() && controlEmail() && controlAddress() && controlVille()) {
    window.location.href = "../confromation.html";
  } else {
    alert("veuillez bien remplier la formulaire");
  };
});

