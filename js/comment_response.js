let API = "https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/profile"



let getInnerCarousel = document.querySelector(".carousel-inner")

const getApi = async () => {
  let res = await fetch(API);
    let object = await res.json();
    
    let carousel_item = ``;
    object.forEach(element => carousel_item += displayClass(element));
    getInnerCarousel.innerHTML = carousel_item;
    console.info(getInnerCarousel);

    // add "active" to first carousel-item"
    const addActive = document.getElementsByClassName("carousel-item")[0];
    addActive.classList.add("active");
}



// display
function displayClass (item) {
  return `<div class="carousel-item">
            <!-- second card -->
            <div class="card d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="${item.avatar}"
                  alt="members"
                  class="img-fluid rounded-circle w-50 p-4"
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text text-secondary">${item.comment}</p>
                <p class="text-black-50">${item.company}</p>
              </div>
            </div>
          </div>`
}

getApi();