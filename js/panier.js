// ---decoration le variable ou je trouver les valeurs des produites Dans Le LocalStorage

let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));

let m = 0;
// ------------------------------afficher les produites du panier------------------
// Selection la class ou je vais mettre mes code html
const potistionPanier = document.querySelector("#Produited-panier");
let structureProdoitesPanier = [];

// si la panier est vide : afficher la panier est vide a
if (produitesDansLeLocalStorage === null ||produitesDansLeLocalStorage == 0) {
  const panierVide = document.getElementById("dispalyVIde").className += "d-block"; 
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

  window.location.href = "panier.html";

});
// -------------------------------------fine de bt sipprimer Panier------------------
}



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
  firstName : ("firstName", document.querySelector("#Prenome").value),
  lastName : ("lastName", document.querySelector("#Nom").value),
  email : ("email", document.querySelector("#Email").value),
  address : ("address", document.querySelector("#Address").value),
  city : ("city", document.querySelector("#Ville").value),
};

//************************validation des donnes de formulaire pour qu'ils laissent passer *************/

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
  const lePrenom = formulaireVlaeures.firstName;

    if (regExPrenomNom(lePrenom)) {
      return true;
    } else {
      document.getElementById("displayPrenom").className += "d-block";
      return false;
    }
};

function controlNom(){
  //control de Nom
  const leNom = formulaireVlaeures.lastName;

    if (regExPrenomNom(leNom)) {
      return true;
    } else {
      document.getElementById("displayNom").className += "d-block";
      return false;
    }
};

function controlVille(){
  //control de Ville
  const laVille = formulaireVlaeures.city;

    if (regExAddressVille(laVille)) {
      return true;
    } else {
      document.getElementById("displayVille").className += "d-block";
      return false;
    }
};

function controlAddress(){
  //control de Address
  const leAddress= formulaireVlaeures.address;

    if (regExAddressVille(leAddress)) {
      return true;
    } else {
      document.getElementById("displayAddress").className += "d-block";
      return false;
    }
};

function controlEmail(){
  //control de Email
  const leEmail= formulaireVlaeures.email;

    if (regExEmail(leEmail)) {
      return true;
    } else {
      document.getElementById("displayEmail").className += "d-block";
      return false;
    }
};
let produits = [];
//data des utilisateur qui a remplier la formulaire
let conformeData = localStorage.getItem("formulaire");
const basket = JSON.parse(localStorage.getItem("produite"));
basket.forEach(item => {
  produits.push(item.idDeProudite);
});
const dataAenvoyer = {
  products: produits,
  contact:JSON.parse(conformeData)
}
// envoier le data de objet dataAenvoyer au server en utilaisant le fetch et methood post
    const envoyerDataAuServer = async()=>{
      const apiPost = await fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataAenvoyer),
      })
      // recperr le ID de order quand on fait demmande de reuqite 
      const recupereLeOrderID = await apiPost.json()
      if (recupereLeOrderID) {
        //Stoker le ID dans le local Storage
        localStorage.setItem("IdResponse", recupereLeOrderID.orderId);
        const stokerID = localStorage.getItem("IdResponse");
        return true; 
      } else {
        return false;
      }
  }
  envoyerDataAuServer()

// ----------------fin de validation des donnes de formulaire pour qu'ils laissent passer---------
if (controlPrenom() && controlNom() && controlEmail() && controlAddress() && controlVille() && envoyerDataAuServer(Boolean)) {
  localStorage.setItem("formulaire", JSON.stringify(formulaireVlaeures));
  localStorage.setItem("prixTotla",JSON.stringify(prixtotal));
  window.location.href = "../porjet5/confromation.html";
} else {
  document.getElementById("remplieFormumlaire").className += "d-block";
};

// mettre les values du formulaire et mettre les produites Selectioné dans un objet a envoyer vers le server 

});

