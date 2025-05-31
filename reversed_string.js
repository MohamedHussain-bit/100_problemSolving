// reversed string
// create empaty string
// loop throgh string
// return empaty string

function reversed(string){
    let result = ""
    for(let i = string.length -1 ; i >= 0 ; i--){
        result = result + string[i]
    }
    return result

}

console.log(reversed("Hello"))

