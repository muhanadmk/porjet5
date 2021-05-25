//récupérer le Id server ou on trouve dans le local stroge
const IdServer = localStorage.getItem("IdResponse");

//récupérer le prix totla ou on trouve dans le local stroge
const prixtotal = localStorage.getItem("prixTotla");

//récupérer la data de formulaire ou on trouve dans le local stroge
const formulaireDansLeLocalStorage = JSON.parse(localStorage.getItem("formulaire"));

//  affichage la data dans le html conformation

const potistionConformation = document.querySelector("#confromation");

 let  structureConformationsHTML = 
   `
    <div class="row">
        <div class="col-2"></div>
        <div class="card text-center col-8 shadow p-3 bg-white rounded">
          <div class="card-body">
            <h4 class="card-title">l'équipe de notre site vous remercie et vous souhaite une excellente bonne journée</h4>
              <h5 class="card-text text-success">le numeruo de commande est : ${IdServer}</h5>
            <h5 class="card-text mt-20 text-primary">monsieur ${formulaireDansLeLocalStorage.lastName} votre commande sera envoyé dans la semaine suivante à l'adresse: <br />  ${formulaireDansLeLocalStorage.address} à la ville de ${formulaireDansLeLocalStorage.city} </h5>
            <h5 class="card-text text-danger">le pirx totla de vos achete est :</h5>
            <h4 class="card-text text-danger">${prixtotal} €</h4>
            <h6 class="card-text mt-30"> Notre Protection de l'acheteur vous protège du premier clic à la livraison.</h6>
            <h6>A toute heure, vous pouvez contacter le Centre d'Aide pour une expérience d'achat facile.</h6>
            <a href="../porjet5/index.html" class="btn btn-primary mt-2" id="removeLoclalSrorge">fermer</a>
          </div>
        </div>
      </div>  
  `;
  potistionConformation.innerHTML = structureConformationsHTML;

  //Supprimer le data de panier et prix et id Ordre dans le local Storage
  
 
 


  function supprimerCleDeLoclalstorge (cle) {
    localStorage.removeItem(cle);
  };
  
 supprimerCleDeLoclalstorge("prixTotla")
  supprimerCleDeLoclalstorge("IdResponse")
  supprimerCleDeLoclalstorge("produite")
