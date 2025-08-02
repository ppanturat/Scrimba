const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.querySelector("#password1-el")
let password2El = document.getElementById("password2-el")

function generatePassword() {
    let password1 = randomPassword()
    let password2 = randomPassword()
    password1El.textContent = password1
    password2El.textContent = password2
}

function randomPassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        password += characters[randomIndex()]
    }
    return password
}

function randomIndex() {
    let randomIndex = Math.floor(Math.random() * 91)
    return randomIndex
}