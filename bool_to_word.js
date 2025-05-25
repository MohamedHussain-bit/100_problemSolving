// cheack if word trou return yes else return no

function boolToWord(bool){
    if(bool == true){
        return "Yes"
    } else {
        return "No"
    }
}

console.log(boolToWord(true))

// todo : => Anather solution

function boolToWord2(bool){
    return bool ? "Yes" : "No"
}

console.log(boolToWord2(true))
