function lowerCase(char) {
    if (char === char.toLowerCase()) return true

    return false
}

function upperCase(char) {
    if (char === char.toUpperCase()) return true

    return false
}

function caesarCipher(str, key) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let caesarString = ""

   for (let i = 0; i < str.length; i++) {
    if (lowerCase(str[i])) {
        let lowerString = alphabet.indexOf(str[i]);
        caesarString += alphabet[(lowerString + key) % 26]
    } else if(upperCase(str[i])) {
        let upperString = alphabet.indexOf(str[i])
        caesarString += alphabet[(upperString + key) % 26]
    }
   } 
   return caesarString
}

module.exports = caesarCipher