function validateForm() {
    const login = document.forms["loginForm"]["login"].value;
    if (login === "") {
        alert("Please specify login!");
        return false;
    }

    const password = document.forms["loginForm"]["password"].value;
    if (password === "") {
        alert("Please specify password!");
        return false;
    }
}

function validateFormRegistration() {
    const Name = document.forms["registrationForm"]["Name"].value;
    if (Name === "") {
        alert("Please specify login!");
        return false;
    }

    const email = document.forms["registrationForm"]["email"].value;
    if (email === "") {
        alert("Please specify E-mail!");
        return false;
    }
    const Password = document.forms["registrationForm"]["Password"].value;
    if (Password === "") {
        alert("Please specify password!");
        return false;
    }
    const ConfirmPassword = document.forms["registrationForm"]["ConfirmPassword"].value;
    if (ConfirmPassword === "") {
        alert("Please specify ConfirmPassword!");
        return false;
    } else if (ConfirmPassword !== Password) {
        alert("Your passwords are different!");
        return false;
    }
}

function booked() {
    document.getElementById('cancel').style.display = "block";
    document.getElementById('book').style.display = "none";
}

function cancel() {
    document.getElementById('cancel').style.display = "none";
    document.getElementById('book').style.display = "block";
}