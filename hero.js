let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let namefield=document.getElementById("namefield");
let title =document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
}

signupBtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
}