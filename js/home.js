var welcome = window.document.getElementById("welcome");
var arr = [];
var welcomeNumber;
if(localStorage.getItem("welcomeNumber") != null){
    welcomeNumber = JSON.parse(localStorage.getItem("welcomeNumber"))
}
if(localStorage.getItem("arr") != null){
    arr = JSON.parse(localStorage.getItem("arr"))
}
welcome.innerHTML=`Welcome ${arr[welcomeNumber].signUpName}`;
