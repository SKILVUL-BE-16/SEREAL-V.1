
let img_url = ''
// let kelas_container = document.getElementById("card-container")
let dua_kolom_kelas = document.getElementById('dua-kolom-kelas')
let api_link_kelas = 'https://63492926a59874146b18c2bb.mockapi.io/tes/Kelas'

let displayCardKelas = (item) => {
  return `
    <div class="col">
      <div class="card flex-row ">
        <img src="${item.img}" height="100%" class="col-centered" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.judul}</h5>
          <p class="card-text">${item.desc}</p>
          <div class="d-flex justify-content-between">
            <a href="">${item.level}</a>
            <a href="#" class="btn btn-primary">Lihat Kelas</a>
          </div>
        </div>
      </div>
    </div>`;
}

// masukkin item ke element dua-kolom-kelas
const getDataKelas = async () => {
    let res = await fetch(api_link_kelas);
    let kelas_array = await res.json();
    let cards = "";

    kelas_array.forEach(item => {
        cards += displayCardKelas(item);
        dua_kolom_kelas.innerHTML = cards
    });
    console.table(kelas_array)
}
getDataKelas()

