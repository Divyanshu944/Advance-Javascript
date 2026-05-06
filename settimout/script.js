let count = 0;
let second = 5;
let process = document.querySelector(".progress-bar");
let percentagetext = document.querySelector(".percentage")

let intv = setInterval(()=>{
if(count <= 99){
    count++;
    process.style.width = `${count}%`
    percentagetext.textContent = `${count}%`
}else{
    document.querySelector(".status").textContent="Downloaded."
    clearInterval(intv)
}
},(second*1000)/100)