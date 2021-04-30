const camera = fetch('http://localhost:3000/api/cameras');

camera.then((response) => {

const cameraData = response.json();

const photo = cameraData.then((photo) =>{
  const urlImg = photo[3].imageUrl;
  const img2 = document.querySelector("img");
  const img3 = img2.setAttribute("src", urlImg);
  img2.innerHTML = img3;
}) 
})

// fetch('http://localhost:3000/api/cameras')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json)
//     for (let i = 0; i < json.length; i++) {
//       document.body.innerHTML += json[i].name 
      
//     }
//   })

for (i = 20; i > 1; i -= 1) {
  console.log(i);
}