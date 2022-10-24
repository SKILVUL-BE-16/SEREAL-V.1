// check if register
const getCheckProfile = document.getElementById("check-profile");
// const getDivButtonHere = document.querySelector(".button-here");

if (localStorage.getItem("Regist_Account") === null){
    getCheckProfile.innerHTML = addButtonLoginRegister();
    // getDivButtonHere.innerHTML = addButton();
    }else{
    getCheckProfile.innerHTML = replaceButtonLoginRegisterToProfile();
    // getDivButtonHere.innerHTML = replaceButton();
}


// function add register and profile
function addButtonLoginRegister(){
    return `<ul class="navbar-nav gap-1 gap-md-4 mx">
                <li class="nav-item">
                    <a class="nav-link reg fancy-link" href="./register.html">Register</a>
                </li>
                    <a href="./login.html"><button class="btn btn-main-color">Login</button></a>
            </ul>`;
}

function replaceButtonLoginRegisterToProfile(){
    return `<a href="#"><div class="my-profile"></div></a>`;
}


// function add button 
// function addButton(){
//     return `<a href="login.html" class="btn btn-join px-3 py-2 my-3">Gabung Sereal</a>`;
// }

// function replaceButton(){
//     return `<a href="kelas.html" class="btn btn-join px-3 py-2 my-3">Lihat Kelas</a>`;
// }
