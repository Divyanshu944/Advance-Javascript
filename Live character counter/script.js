// For Increasing..

// let inp = document.querySelector("input");
// let spa = document.querySelector("span")

// inp.addEventListener("input", function(){
//     spa.textContent = inp.value.length
// })

// For decreasing..

let input = document.querySelector("input")
let span = document.querySelector("span")

input.addEventListener("input", function(){
    let left = 20 - input.value.length;
    span.textContent = left;
    if(left < 0){
        span.style.color = "red";
    }else{
        span.style.color = "white";
    }
})