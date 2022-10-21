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