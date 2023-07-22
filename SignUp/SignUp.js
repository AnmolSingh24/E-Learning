function Signup() {
    var signUpFirstname = document.getElementById('Firstname').value;
    var signUpLastname = document.getElementById('Lastname').value;
    var signUpUsername = document.getElementById('Username').value;
    var signUpEmail = document.getElementById('Email').value;
    var signUpPhone = document.getElementById('PhoneNumber').value;
    var signUpPassword = document.getElementById('Password').value;
    var signUpConfirmPassword = document.getElementById('ConfirmPassword').value;

    if (signUpFirstname === '') {
        document.getElementById("Firstname-Error").innerHTML = "Please enter your First Name";
        return false;
    }

    if (signUpLastname === '') {
        document.getElementById("Lastname-Error").innerHTML = "Please enter your Last Name";
        return false;
    }

    if (signUpUsername === '') {
        document.getElementById("Username-Error").innerHTML = "Please enter your Username";
        return false;
    } else if (signUpUsername.length > 4 && signUpUsername.length < 10) {
        document.getElementById("Username-Error").innerHTML = "Username must be 5 to 10 characters long";
        return false;
    }

    if (signUpEmail === '') {
        document.getElementById("Email-Error").innerHTML = "Please enter your Email.";
        return false;
    }

    if (signUpPhone === '') {
        document.getElementById("PhoneNumber-Error").innerHTML = "Please enter your phone number";
        return false;
    } else if (signUpPhone.length < 10) {
        document.getElementById("PhoneNumber-Error").innerHTML = "Phone number must be at least 10 characters long";
        return false;
    }

    if (signUpPassword === '') {
        document.getElementById("Password-Error").innerHTML = "Please enter your Password";
        return false;
    } else if (signUpPassword.length < 8) {
        document.getElementById("Password-Error").innerHTML = "Password must be at least 8 characters long";
        return false;
    }

    if (signUpConfirmPassword === '') {
        document.getElementById("Confirm-Password-Error").innerHTML = "Please confirm your Password";
        return false;
    } else if (signUpConfirmPassword.length < 8) {
        document.getElementById("Confirm-Password-Error").innerHTML = "Password must be at least 8 characters long";
        return false;
    } else if (signUpConfirmPassword !== signUpPassword) {
        document.getElementById("Confirm-Password-Error").innerHTML = "Password does not match";
        return false;
    }

    else
        alert("Thanks for Signing Up!");
    SignUpRegister();
}

function SignUpRegister() {
    var username1 = document.getElementById("Username").value;
    var password1 = document.getElementById("Password").value;

    const sign1 = {
        username1: username1,
        password1: password1,
        id: Date.now()
    }

    var sign2 = [];
    var sign2 = JSON.parse(localStorage.getItem("sign1")) || [];
    console.log(JSON.stringify(sign2))
    sign2.push(sign1);
    console.log(JSON.stringify(sign2));
    localStorage.setItem("sign1", JSON.stringify(sign2));
    window.location = "../Login/Login.html";
}