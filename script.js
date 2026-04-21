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


let btn = document.querySelector("#btn")
let filnip = document.querySelector("#file")


btn.addEventListener("click", function(dets){
    filnip.click()
})


filnip.addEventListener("change", function(dets){
const file = dets.target.files[0]
    if(file){
        btn.textContent = file.name
    }
    
    
})