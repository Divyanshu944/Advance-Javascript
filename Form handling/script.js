// let inp = document.querySelector("select");
// let device = document.querySelector("#device")


// inp.addEventListener("change", function(dets){
   
//      device.textContent = `${dets.target.value} : Device Selected`
//         // console.log(sas.target.value);
//         // console.log(device);

     
    
// })

// let word = document.querySelector("h2")

// window.addEventListener("keydown",(dets)=>{
//     if(dets.key === " "){
//         word.textContent = 'SPC';
//     }else{
//         word.textContent = dets.key
//     }
// })

// Change & click event  

// let btn = document.querySelector("#btn")
// let filnip = document.querySelector("#file")


// btn.addEventListener("click", function(dets){
//     filnip.click()
// })


// filnip.addEventListener("change", function(dets){
// const file = dets.target.files[0]
//     if(file){
//         btn.textContent = file.name
//     }
// })

// form submiting using eventlistner.

let main = document.querySelector("#main")
let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")


form.addEventListener("submit", function(det){
det.preventDefault()
    
let card = document.createElement("div")
card.classList.add("card")

let profile = document.createElement("div")
profile.classList.add("pic")

let img = document.createElement("img")
img.setAttribute("src", inputs[3].value)

let name = document.createElement("name")
name.textContent = inputs[0].value
let age = document.createElement("age")
age.textContent = inputs[1].value
let email = document.createElement("email")
email.textContent = inputs[2].value

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(name)
card.appendChild(age)
card.appendChild(email)
main.appendChild(card)

inputs.forEach(function (inp) {
    if(inp.type !== "submit"){
        inp.value = ""
    }
})


})