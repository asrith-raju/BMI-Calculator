let button = document.querySelector(".btn")
let a,b,c
button.addEventListener("click",()=>{
    a=document.getElementById("height").value
    b=document.getElementById("weight").value
    if(a&&b){
    document.querySelector(".card").classList.add("hide")
    document.querySelector(".hidden-card").classList.remove("hide")
    c=(b/((a/100)**2)).toFixed(1);
    document.querySelector(".h").textContent=`Your Height:${a}`
    document.querySelector(".w").textContent=`Your Weight:${b}`
    document.querySelector(".bmi").innerHTML=`<b>Your Body Mass Index is:${c}</b>`
}
else{
    alert("enter both values")
}
if(c<18.5){
    document.querySelector(".cate").innerHTML=`<b>You are:Under Weighted`;
}
else if(18.5<=c<24.9){
    document.querySelector(".cate").innerHTML=`<b>You are:Normal Weighted`;
}
else if(25.0<c<=29.9){
    document.querySelector(".cate").innerHTML=`<b>You are:Over Weighted`;
}
else if(30.0<c<=34.9){
    document.querySelector(".cate").innerHTML=`<b>You Have: Obesity-1`;
}
else
    document.querySelector(".cate").innerHTML=`<b>You Have:Obesity-2`;



})
