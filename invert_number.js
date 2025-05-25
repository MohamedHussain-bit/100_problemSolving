// create empty array
// loop for array
// invert number
// return empty array

function invertNum(array){
    let newArray = []
    for(let i = 0 ; i < array.length ; i++){
        newArray.push(array[i] * -1)
    }
    return newArray
}

console.log(invertNum([-1 , 2 , 3 , 4 , 5 , -6 ]))

// todo : => Anather solution

function invertNum2(array){
    return array.map((x) => x * -1)
}

console.log(invertNum2([-1 , 2 , 3 , 4 , 5 , -6 ]))

