
const api = "http://localhost:3000/api/cameras";

async function getData(){
  const response = await fetch(api)
  const data = await response.json();
  printData(data)
}

function printData(data){
 const cardPage = document.querySelector(".Produited");
 cardPage.innerHTML = `
 <div class="container">
  <div class="row">
  <div class="col-1"></div>
    <div class="mt-5 col-sm-12 col-lg-9">
      <div class="card shadow p-3 mb-5 bg-white rounded">
      <img src="${data[0].imageUrl}" class="img4 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[0].name}</h5>
          <p class="card-text">${data[0].description}</p>
          <select class="mt-2 btn btn-primary" name="" id="">
            <option class="text-white" value="">
            ${data[0].lenses[0]}
            </option>
            <option class="text-white" value="">
            ${data[0].lenses[1]}
            </option>
        </select>
        <button class="btn btn-primary mt-2" type="submit">ajouter au panier</button>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</div> 
 `
}
 getData();