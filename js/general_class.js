let API = 'https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/ucup'



let getInnerCarousel = document.querySelector(".carousel-inner")

const getApi = async () => {
  let res = await fetch(API);
    let object = await res.json();
    let carousel_item = ``;
    object.forEach(element => carousel_item += displayClass(element));
    getInnerCarousel.innerHTML = carousel_item;
    console.info(getInnerCarousel);

    // add "active" to the first class name "carousel-item"
    const addActive = document.getElementsByClassName("carousel-item")[0];
    addActive.classList.add("active");
}



// display
function displayClass (item) {
  return `<div class="carousel-item my-5">
            <div class="row g-0 position-relative">
              <div class="col-md-6 mb-md-0 p-md-4">
                <img src="${item.img}" class="banner" alt="..." />
              </div>
              <div class="col-md-6 p-4 ps-md-0">
                <h5 class="mt-3 fw-bold">${item.judul}</h5>
                <p class="text-secondary">${item.caption}</p>
                <a href="#" class="text-decoration-none"
                  >Cari tahu lebih lanjut >></a
                >
              </div>
            </div>
          </div>`
}


// call function
getApi();
