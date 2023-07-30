var signUpName = window.document.getElementById("signUpName");
var signUpEmail = window.document.getElementById("signUpEmail");
var signUpPassword = window.document.getElementById("signUpPassword");
var signInEmail = window.document.getElementById("signInEmail");
var signInPassword = window.document.getElementById("signInPassword");

var allInputs = Array.from(window.document.querySelectorAll("input"));

var btnAction = window.document.getElementById("btnAction");


var validate = window.document.getElementById("validate");

var arr = [];
var testEmpty = true;
var testRepeated = true ;
var welcomeNumber;


if(localStorage.getItem("arr") != null){
    arr = JSON.parse(localStorage.getItem("arr"))
}


function Empty(){
    if(signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == ""){
        testEmpty = false;
    }else{
        testEmpty = true;
    }
}


function validateSignUp(){
    Empty();
    if(testEmpty == false){
        validate.innerHTML=`All inputs is required`;
    }else{
        validate.innerHTML=``;
        for(var i=0;i<arr.length;i++){
            if(signUpEmail.value == arr[i].signUpEmail){
                testRepeated = false;
            }
        }
        if(testRepeated == false){
            validate.innerHTML=`Email should not be repeated`;
            testRepeated = true;

        }else{
            var product={
                signUpName: signUpName.value,
                signUpEmail: signUpEmail.value,
                signUpPassword: signUpPassword.value
            }
            arr.push(product);
            localStorage.setItem("arr", JSON.stringify(arr));
            clearInput();
        }
    }
}

function clearInput(){
    signUpName.value= "";
    signUpEmail.value= "";
    signUpPassword.value= "";
}




function loginEmpty(){
    if(signInEmail.value == "" || signInPassword.value == ""){
        testEmpty = false;
    }else{
        testEmpty = true;
    }
}

function validateLogIn(){
    loginEmpty();
    if(testEmpty == false){
        validate.innerHTML=`All inputs is required`;
    }else{
        validate.innerHTML=``;
        for(var i=0;i<arr.length;i++){
            if(signInEmail.value == arr[i].signUpEmail && signInPassword.value == arr[i].signUpPassword){
                testRepeated = false;
                welcomeNumber = i;
                localStorage.setItem("welcomeNumber", JSON.stringify(welcomeNumber));
            }
        }
        if(testRepeated == true){
            validate.innerHTML=`incorrect email or password`;
        }else{
            validate.innerHTML=``;
            window.location.href = 'home.html';
        }

    }
}

if(allInputs.length == 2){
    btnAction.addEventListener("click", validateLogIn);
}else if(allInputs.length == 3){
    btnAction.addEventListener("click", validateSignUp);
}

