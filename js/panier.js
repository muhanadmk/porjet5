// ---decoration le variable ou je trouver les valeurs des produites Dans Le LocalStorage

let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));

let m = 0;
// ------------------------------afficher les produites du panier------------------
// Selection la class ou je vais mettre mes code html
const potistionPanier = document.querySelector("#Produited-panier");
console.log(potistionPanier);
let structureProdoitesPanier = [];
// si la panier est vide : afficher la panier est vide a
if (produitesDansLeLocalStorage === null) {
  const panierVide = `
  <div class="container-panier-vide">
    <div>le panier es vide</div>
  </div>
  `;
  potistionPanier.innerHTML = panierVide;

} else {
  //si la panier n'est pas vide; afficher les produites 

  for (m = 0; m < produitesDansLeLocalStorage.length; m++) {
    structureProdoitesPanier = 
    structureProdoitesPanier +
     `
    <div class="container-nom-supprimer">
      <div>Quantite: ${produitesDansLeLocalStorage[m].Quantite} - nom de produite :${produitesDansLeLocalStorage[m].name}</div>
      <div>${produitesDansLeLocalStorage[m].price}</div> - supprimer l'artical </div>
    </div>
    `;
  }
    if (m == produitesDansLeLocalStorage.length) {
      //injecter html dans la page du panier
      potistionPanier.innerHTML = structureProdoitesPanier;
    }
}
