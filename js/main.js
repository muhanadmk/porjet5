const api = "http://localhost:3000/api/cameras";

async function getData(){
  const response = await fetch(api)
  const data = await response.json();
  printData(data)
}

function printData(data){
 const cardPage = document.querySelector(".importJs");
 cardPage.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="mt-5 col -sm-12 col-lg col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
      <img src="${data[0].imageUrl}" class="img4 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[0].name}</h5>
          <p class="card-text">${data[0].description}</p>
          <a href="#" class="btn btn-primary">découvrir</a>
        </div>
      </div>
    </div>
    <div class="mt-5 col-sm-12 col-lg col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <img src="${data[1].imageUrl}" class="img2 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[1].name}</h5>
          <p class="card-text">${data[1].description}</p>
          <a href="#" class="btn btn-primary">découvrir</a>
        </div>
      </div>
    </div>
    <div class="mt-5 col-sm-12 col-lg col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <img src="${data[2].imageUrl}" class="img3 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[2].name}</h5>
          <p class="card-text">${data[2].description}</p>
          <a href="#" class="btn btn-primary">découvrir</a>
        </div>
      </div>
    </div>
  </div>
 </div>
 <div class="container">
  <div class="row"> 
    <div class="mt-5 col-sm-12 col-lg col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <img src="${data[3].imageUrl}" class="img4 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[3].name}</h5>
          <p class="card-text">${data[3].description}</p>
          <a href="#" class="btn btn-primary">découvrir</a>
        </div>
      </div>
    </div>
    <div class="mt-5 col-sm-12 col-lg col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <img src="${data[4].imageUrl}" class="img5 card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[4].name}</h5>
          <p class="card-text">${data[4].description}consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
          <a href="#" class="btn btn-primary">découvrir</a>
        </div>
      </div>
    </div>
  </div>

 `
}

getData();
