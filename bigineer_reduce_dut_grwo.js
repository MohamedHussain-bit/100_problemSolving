// bigenner reduce but grow

function grow(array){
    let result = 1
    for(let i = 0 ; i < array.length ; i++){
        result = result * array[i]
    }
    return result

}

console.log(grow([1,2,3,4,5]))

// todo : => Anather solution

function grow2(array){
    return array.reduce((acc , current) => acc * current)

}

console.log(grow2([1,2,3,4,5]))
