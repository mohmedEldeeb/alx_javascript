// Implement JavaScript validation to check the password strength when the form is submitted.
function toValidatePassword() {
    //  input field using JavaScript.
    let password = document.querySelector("#password").value;
    const digitRegex = /[0-9]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()\-+.]/;
    const lengthRegex = /.{8,}/;
    const lowercaseRegex = /[a-z]/;

    let errorMessage = "";
    if (!specialCharRegex.test(password)) {
        errorMessage += "Password should contain at least one special character\n";
    }
    if (!lengthRegex.test(password)) {
        errorMessage += "Password should be at least 8 characters long.\n";
    }
    if (!digitRegex.test(password)) {
        errorMessage += "Password should contain at least one digit\n";
    }
    if (!uppercaseRegex.test(password)) {
        errorMessage += "Password should at least contain an uppercase letter.\n";
    }
    if (!lowercaseRegex.test(password)) {
        errorMessage += "Password should at least contain a lowercase letter.\n";
    }
    
    // Display error message or allow form submission
    let errorElement = document.getElementById("error");
    if (errorMessage !== "") {
        errorElement.innerText = errorMessage;
        return false;
    } else {
        errorElement.innerText = "";
        return true;
    }
}
    const passForm = document.getElementById('passwordForm');
    passForm.addEventListener('submit', function (event) {
    if (!toValidatePassword()) {
        event.preventDefault();
    }
});