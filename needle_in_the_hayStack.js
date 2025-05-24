//! founde the index of the elemnt needle in array

function foundIndex_needle(array){
    return "the index of needle = " + array.indexOf("needle")
}

console.log(foundIndex_needle(["medo","body","hamode","koko","spider","needle","nono"]))

// todo : => Anather solution

function foundIndex_needle2(array){
    for (let i = 0 ; i < array.length ; i++){
        if (array[i] === "needle"){
            return "the index of needle = " + i
        }
    }
}

console.log(foundIndex_needle2(["medo","body","hamode","koko","spider","needle","nono"]))
