let userName = document.getElementById("userName");
let pass = document.getElementById("password");
let flag = 1;

function validateForm(){
    if(userName.value === ""){
       document.getElementById("userError").innerHTML = "Please enter ur user name"
       flag = 0;
    }else if(userName.value.length < 3){
        document.getElementById("userError").innerHTML = "Enter the strong user Name"
        flag = 0;
    } else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(pass.value == ""){
        document.getElementById("passError").innerHTML = "Please enter the password"
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        return true;
    }else{
        return flag;
    }
}