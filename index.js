const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pw1 = document.getElementById("password1");
let pw2 = document.getElementById("password2");
const array1 = [];
const array2 = [];
let password1 = "";
let password2 = "";

function genPassword() {
    for (let i = 0; i < 30; i++) {
        let randomNum = characters[Math.floor(Math.random() * characters.length)];
        if (i < 15) {
            array1.push(randomNum);
        }
        else {
            array2.push(randomNum);
        } 
    }
    for (let j = 0, k = 0; j < array1.length, k < array2.length; j++, k++) {
        password1 += array1[j];
        password2 += array2[k];
    }
    pw1.textContent = password1;
    pw2.textContent = password2;
}
