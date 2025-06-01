// sum mixed array

function sumMixedArray(array){
    return array.map(Number).reduce((acc , curent) => acc + curent , 0)

}

console.log(sumMixedArray([1,2,3,4,5,"10"]))
