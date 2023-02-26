
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";


function lowerCase(char) {
    if (char === char.toLowerCase() && char != char.toUpperCase()) return true
    return false
}

function upperCase(char) {
    if (char === char.toUpperCase() && char != char.toLowerCase()) return true
    return false
}

function indexOfChar(char) {
    const index = alphabet.indexOf(char)
    let cipherChar = cipher[index]
    return cipherChar
}

function caesarCipher(str) {
   let caesarString = ""

   for (let i = 0; i < str.length; i++) {
    if (lowerCase(str[i])) {
        caesarString += indexOfChar(str[i])
    } 
    else if(upperCase(str[i])) {
        caesarString += indexOfChar(str[i].toLowerCase()).toUpperCase()
    }
   } 
   return caesarString
}

module.exports = caesarCipher