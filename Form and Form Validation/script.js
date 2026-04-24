let form = document.querySelector("#form")
let email = document.querySelector("#email")
let passward = document.querySelector("#password")

form.addEventListener("submit", function(e){
e.preventDefault();

document.querySelector("#emailError").textContent = "";
document.querySelector("#passwardError").textContent = "";

const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwardregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

let emaillan = emailregex.test(email.value)
let passwardlan = passwardregex.test(passward.value)

let isvalid = true

if(!emaillan){
    document.querySelector("#emailError").textContent = "Email is incorrect"
    document.querySelector("#emailError").style.display = "initial";
    isvalid = false;
}

if(!passwardlan){
     document.querySelector("#passwardError").textContent = "Passward is incorrect"
    document.querySelector("#passwardError").style.display = "initial";
    isvalid = false;
}

if (isvalid) {
    form.reset(); 
}

})
