//MouseHover MouseMove

// let abcd = document.querySelector("#abc")

// abcd.addEventListener("mouseover" , function(){
//     abcd.style.backgroundColor = "yellow"
// });

// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red"
// })

// window.addEventListener("mousemove", function(det){
// console.log(det);

// })

let abcd = document.querySelector("#abc")

window.addEventListener("mousemove", function(det){
    abcd.style.top = det.clientY + "px";
    abcd.style.left = det.clientX + "px";
})