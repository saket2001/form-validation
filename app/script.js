const emailPattern = /[a-z]+\d+(@gmail.com)/gi;
const passwordPattern=/[\w[*@&#$]+\d/gi;

function formValidate(){
    var email = document.querySelector("#emailid").value;
    var password = document.querySelector("#password").value;
    console.log(email+""+password);
    let emailcorr=emailPattern.test(email);
    let passcorr=passwordPattern.test(password);
    console.log(emailcorr);
    console.log(passcorr);
    if(email==="" || password===""){
       alert("Email or Password cannot be empty");
    }
    //password
    if(password.length<8){
        alert("Enter a password with minimum 8 characters");
    }
    if(emailcorr!=true){
         alert("Email format should be- Name(0-9)@gmail.com");
    }
    if(passcorr!=true){
         alert("Your password should contain a-z characters"+"\nAtleast 4 digits"+"\nAnd one special symbol");
    }
    if(emailcorr==true && passcorr==true){
        alert("Email and Password matched the format");
    }
}
