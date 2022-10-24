function signUp() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let registAccount = {
        name: name,
        email: email,
        password: password
    }
    let a = localStorage.setItem("Regist_Account", JSON.stringify(registAccount));
    setTimeout(function () {
        location = 'login.html'
    }, 1000)
};

function login() {
    let email = document.getElementById("e-mail").value;
    let password = document.getElementById("password").value;
    let b = JSON.parse(localStorage.getItem("Regist_Account"));
    if (email === b.email && password === b.password) {
        setTimeout(function () {
            location = 'home.html'
        }, 1000)
    }
    else {
        document.getElementById("error").style.display = 'block';
    }

}

// check if register
// const getCheckProfile = document.getElementById("check-profile");

// let getRegistAccount = JSON.parse(localStorage.getItem("Regist_Account"));
// console.info(getRegistAccount);
// if (getRegistAccount.email !== undefined || getRegistAccount.email !== null){
//     getCheckProfile.innerHTML = `<div class="test-circle navbar-nav gap-1 gap-md-4 mx"></div>`;
// }else{
//     getCheckProfile.innerHTML = 
//         `<ul class="navbar-nav gap-1 gap-md-4 mx">
//             <li class="nav-item">
//                 <a class="nav-link reg fancy-link" href="./register.html">Register</a>
//             </li>
//                 <a href="./login.html"><button class="btn btn-main-color">Login</button></a>
//         </ul>`;
// }

