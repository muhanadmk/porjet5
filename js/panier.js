// ---decoration le variable ou je trouver les valeurs des produites Dans Le LocalStorage

let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));

let m = 0;
// ------------------------------afficher les produites du panier------------------
// Selection la class ou je vais mettre mes code html
const potistionPanier = document.querySelector("#Produited-panier");
console.log(potistionPanier);
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
      // console.log(produitesDansLeLocalStorage[m].imageProduite);
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
  s.preventDefault;

  //vider le locl stroge en utilisatant removeIteme 
  localStorage.removeItem("produite");

  // alret le panier est vide en ce meomente
  

  //rechargement de page du panier
  window.location.href = "../htmlPage/panier.html";

});