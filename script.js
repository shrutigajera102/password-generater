let inputslider =document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let upperrcase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("btn");



slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value;
});
btn.addEventListener('click',()=>{
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*"
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += upperrcase.checked ? upperChars : "";
    allChars += number.checked ? allnumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    if (allChars == "" || allChars.length == 0){
        return genPassword;
    }
    let i = 1;
    while (i<=inputslider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    
   
    return genPassword;

}