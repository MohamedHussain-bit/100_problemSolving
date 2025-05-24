// turn the string to array
// loop throgh array
// repet etch element onse
// return the array to string


function doubleChar(string){
    return string.split("").map((s) => s.repeat(2)).join("")
}

console.log(doubleChar("medo"))

