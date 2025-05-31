// bigenner reduce but grow

function grow(array){
    let result = 1
    for(let i = 0 ; i < array.length ; i++){
        result = result * array[i]
    }
    return result

}

console.log(grow([1,2,3,4,5]))
