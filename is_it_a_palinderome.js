// is it a palinderome

function isPalindrome(string){
    return string.toLowerCase() == string.toLowerCase().split("").reverse().join("")

}

console.log(isPalindrome("Madam"))
