const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")
let passLength = 12

function generatePass() {  
    firstPass.textContent = ""
    secondPass.textContent = ""
    for (let i = 0; i < passLength; i++) {
        firstRandom = Math.floor(Math.random()*characters.length)
        firstPass.textContent += characters[firstRandom]
        
        secondRandom = Math.floor(Math.random()*characters.length)
        secondPass.textContent += characters[secondRandom]   
    } 
}

function copyPass1() {
    navigator.clipboard.writeText(firstPass.textContent)
    alert("Copied: " + firstPass.textContent)
}

function copyPass2() {
    navigator.clipboard.writeText(secondPass.textContent)
    alert("Copied: " + secondPass.textContent)
}
