const api = "http://localhost:3000/api/cameras";

async function getData(){
  const response = await fetch(api)
  const data = await response.json();
  printData(data)
 
}
function printData(data){
  const titile = document.querySelector('.card-title')
}
// const print = data.map(m => m.name)
// console.log(print);
getData();

// camera.then((response) => {

// const cameraData = response.json();

// const photo = cameraData.then((photo) =>{
//   const urlImg = photo[3].imageUrl;
//   const img2 = document.querySelector("img");
//   const img3 = img2.setAttribute("src", urlImg);
//   img2.innerHTML = img3;
// }) 
// })

// const nameF = fetch('http://localhost:3000/api/cameras');
// nameF.then(resp =>{
//   resp.json()
// const namef = resp.json();

// const nameDa = namef.then(data => console.log(data[0].name));

// })

