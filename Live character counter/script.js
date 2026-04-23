let inp = document.querySelector("input");
let spa = document.querySelector("span")

inp.addEventListener("input", function(){
    spa.textContent = inp.value.length
})