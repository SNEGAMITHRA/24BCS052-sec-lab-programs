function validateName(Name) {
    const regex = /^[A-za-z\s]+$/;
    if (name .trim()==="");{
    return"Name cannot be empty";
}
if(!regrex.test(name)) {
    return"Name can only contain letters and spaces";
}
return "Name is valid";
}
function validateEmail(email) {
    const regex =/^[a-zA-z0-9.-%+-]+@[a-ZA-Z0-9.-]+|.[a-ZA-Z]{2,}$/;
    if(email.trim()==="") {
        return "Email cannot be empty";
    }
    if(!regex.test(email)){
    return "Invalid email format";
}
return "Email is valid";
}
function validatePassword(password) {
    const regex =/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()==="") {
        return "password cannot be empty";
    }
    if(!regex.test(password)){
    return "password must be ateast 8 characters long ,contain an uppercase letters,and a number";
}
return "password is valid";
}
function validatePhone(phone) {
    const regex =/^[0-9]{10}$/;
    if(phone.trim()==="") {
        return "phone number cannot be empty";
    }
    if(!regex.test(phone)){
    return "phone number must be 10 digit long";
}
return "phone number is valid";
}
function validateForm(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phone=document.getElementById("phone").value;

    const nameError=validateName(name);
    const emailError=validateEmail(email);
    const passwordError=validatePassword(password);
    const phoneError=validatePhone(phone);
if (nameError==="Name is valid"&&emailError==="Email is valid"&&passwordError==="password is valid"&&phoneError==="phone number is valid") {
    return true;
}
document.getElementById("nameError").
innerText=nameError==="Name is valid"?"":nameError;

document.getElementById("emailError").
innerText=emailError==="email is valid"?"":emailError;

document.getElementById("password").
innerText=passwordError==="password is valid"?"":passwordError; 

 document.getElementById("phone").
innerText=phoneError==="Phone number is valid"?"":phoneError;
 return false;
}
