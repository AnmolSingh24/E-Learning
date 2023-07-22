var users = JSON.parse(localStorage.getItem("sign1")) || [];

function Login() {
    const loginUsername1 = document.getElementById("Username");
    const loginPassword1 = document.getElementById("Password");

    // if (username === '') {
    //     document.getElementById("Login-Username-Error").innerHTML = "Please enter your Username";
    //     return false;
    // } else if (username.length > 4 && username.length < 10) {
    //     document.getElementById("Login-Username-Error").innerHTML = "Username must be 5 to 10 characters long";
    //     return false;
    // }

    // if (password === '') {
    //     document.getElementById("Login-Password-Error").innerHTML = "Please enter your Password";
    //     return false;
    // } else if (password.length < 8) {
    //     document.getElementById("Login-Password-Error").innerHTML = "Password must be at least 8 characters long";
    //     return false;
    // }

    if (users.find(user => user.username1 === loginUsername1.value && user.password1 === loginPassword1.value)) {
        alert("✅ Login Successful");
        window.location = "../index.html"
    } else {
        alert("❌ Incorrect username or password");
    }
}