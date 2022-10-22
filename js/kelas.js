let API = "https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/ucup"


let getInnerCarousel = document.querySelector(".carousel-inner");
// let getBtnMelukis = document.getElementById("btn-melukis");
// let getBtnDigitalArt = document.getElementById("btn-digital-art");
// let getBtnTeater = document.getElementById("btn-teater");
// let getBtnMenari = document.getElementById("btn-menari");

// display
function displayClass (item) {
  return `
  <div class="carousel-item">
    <div class="container my-5">
      <div class="row g-0 position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src="${item.img}" class="banner" alt="..." />
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-3 fw-bold">${item.judul}</h5>
          <p class="text-secondary">${item.caption}</p>
          <a href="#" class="text-decoration-none">Cari tahu lebih lanjut >></a>
        </div>
      </div> 
    </div>
  <div class="carousel-item">
  `
}

fetch(API)
.then(response => {response.json()
  console.info(response);
})
.then(object => {        
    getInnerCarousel.innerHTML = showClass(object)
    console.info(object);
}).catch(e => {
  console.info(e);
})


function showClass(arr){
  let carousel_item = '';
  arr.forEach(element => {
    carousel_item += displayClass(element);
  });
}
















/* <div class="carousel-item">
<div class="container my-5">
  
  <div class="row g-0 position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img src="img/image 17.png" class="banner" alt="..." />
    </div>
    <div class="col-md-6 p-4 ps-md-0">
      <h5 class="mt-3 fw-bold">Columns with stretched link</h5>
      <p class="text-secondary">
        Another instance of placeholder content for this other custom
        component. It is intended to mimic what some real-world content
        would look like, and we're using it here to give the component a
        bit of body and size.
      </p>
      <a href="#" class="text-decoration-none"
        >Cari tahu lebih lanjut >></a
      >
    </div>
  </div>
</div> */