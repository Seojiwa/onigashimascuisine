var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.querySelector("#password");
var button = document.querySelector("#btn");
    
    button.addEventListener("click", signup) 
        function signup(){
            if(email.value && username.value && password.value){
                window.alert("Successful Logged In!")
                open("homepage.html");
            } else {
                window.alert("Please fill up to Sign-In!");
            }
        }
    
    
   