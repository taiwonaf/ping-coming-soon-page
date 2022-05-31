const form = document.getElementById("form");
const btn = document.getElementById("btn");

btn.addEventListener("click", validateEmail);

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");
    
    if (email === "") {
        error.innerText = "Email cannot be empty";
        error.style.display = "block";
        return false
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.innerText = "Please provide a valid email address";
        error.style.display = "block";
        return false
    } 

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    }
}