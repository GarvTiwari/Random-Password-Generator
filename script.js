let passwordBox = document.getElementById("password");
let length = 10;
const upperCase = "ASDFGHJKLMNBVCXZQWERTYUIOP";
const lowerCase = "asdfghjklpoiuytrewqzxcvbnm";
const number = "1234567890";
const specialSymbol = "@#$%^&*()_+~|{}[]<>/-=";
const allChar = upperCase +lowerCase + number +specialSymbol;
function generatepass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

    while(length>password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passwordBox.value = password;
}
function data(){
   passwordBox.select();
   document.execCommand("copy");

}


