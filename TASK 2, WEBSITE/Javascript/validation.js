document.getElementById('submit').onclick = function () {
    validateForm()
}

function validateForm() {
    var errors = "";

    // Get value of element and storing it in variable
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if variables are empty
    if (name == "") {
        errors += "<li>* Please enter your name.</li>";
    }

    if (email == "") {
        errors += "<li>* Please enter your email.</li>";
    }

    if (message == "") {
        errors += "<li>* Please enter your message.</li>";
    }

    if (errors != "") {
        document.getElementById('errorList').innerHTML = errors;
        return;
    }
    else {
        document.getElementById('errorList').innerHTML = "";
        window.open('mailto:Solmirae@gmail.com');
    }
}
