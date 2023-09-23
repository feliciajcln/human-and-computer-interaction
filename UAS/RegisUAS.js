function validationRegis(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpass = document.getElementById("confirm-password").value;

    if (email == ""){
        document.getElementById('message1').innerHTML = "Please enter your email.";
        document.getElementById('email').style.borderColor = "red";
    }
	else{
        document.getElementById('message1').innerHTML = "";
        document.getElementById('email').style.borderColor = "green";
		
    } 
    
    if (password == ""){
        document.getElementById('message2').innerHTML = "Please enter your password.";
        document.getElementById('password').style.borderColor = "red";
    } 
	else{
        document.getElementById('message2').innerHTML = "";
        document.getElementById('password').style.borderColor = "green";
    } 
    
    if (confpass == ""){
        document.getElementById('message3').innerHTML = "Please enter your password.";
        document.getElementById('confirm-password').style.borderColor = "red";
		
    } 
	else if (confpass != ""  && (confpass == password)){
		document.getElementById('message3').innerHTML = "";
        document.getElementById('confirm-password').style.borderColor = "green";
    } 
	else if (confpass != ""  && (confpass != password)){
        document.getElementById('message3').innerHTML = "Please write the same password.";
        document.getElementById('confirm-password').style.borderColor = "red";
    }
}