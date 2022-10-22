let url = "https://63535f78e822bad5278b9dfe.mockapi.io/materi"
let materi = document.getElementById("materi")

let btnSatu = document.getElementsByClassName("btn-satu")
btnSatu[0].addEventListener("click", async function (e) {
    e.preventDefault()
    let response = await fetch(url)
    let data = await response.json()

    data.slice(0, 1).forEach((item, index) => {
                materi.innerHTML = 
                `<div>
                  <h3>${item.judul}</h3>
                  <img src="${item.img}" alt="...">
                  <p>${item.isi}</p>
                </div>`
            })
})

let btn2 = document.getElementsByClassName("btn2")
btn2[0].addEventListener("click", async function (e) {
    e.preventDefault()
    let response = await fetch(url)
    let data = await response.json()

    data.slice(1, 2).forEach((item, index) => {
                materi.innerHTML = 
                `<div>
                  <h3>${item.judul}</h3>
                  <img src="${item.img}" alt="...">
                  <p>${item.isi}</p>
                </div>`
            })
})
