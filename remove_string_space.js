// turn string to array
// remove space
// return array to string

function noSpace(string){
    return string.split(" ").join("")
}


console.log(noSpace("H e l l o"))

// todo : => Anather solution


function noSpace2(string){
    return string.replaceAll(" " , "")
}

console.log(noSpace2("H e l l o"))

