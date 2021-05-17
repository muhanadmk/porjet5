// ---decoration l'objet ou je trouver les valeurs des produites et la formulaire Dans Le LocalStorage

let formulaireDansLeLocalStorage = JSON.parse(localStorage.getItem("formulaire"));
let produitesDansLeLocalStorage = JSON.parse(localStorage.getItem("produite"));
console.log(formulaireDansLeLocalStorage.Address);
let structureConformationsHTML = [];
const potistionConformation = document.querySelector("#confromation");


for (N = 0; N < produitesDansLeLocalStorage.length; N++) {
  console.log(formulaireDansLeLocalStorage.Address);
  structureConformationsHTML = 
  structureConformationsHTML +
   `
   <div class="row">
      <div class="col-2"></div>
      <div class="card text-center col-8">
        <div class="card-body">
          <h5 class="card-title">${produitesDansLeLocalStorage[N].nameProduite}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button href="#" class="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>  
  `;
  potistionConformation.innerHTML = structureConformationsHTML;
}







