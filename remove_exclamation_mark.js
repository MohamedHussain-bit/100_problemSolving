// remove exclamation marke

function remove(string){
    return string.replace(/[!]/g ,"")
}

console.log(remove("Hell!o Wo!rled !!!"))


// todo : => Anather solution

function remove2(string){
    return string.split("").filter((n) => n !== "!").join("")

}

console.log(remove2("Hell!o Wo!rled !!!"))
