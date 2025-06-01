// array plus array

function arrayPlusArray(array1 , array2){
    return array1.concat(array2).reduce((acc , curent) => acc + curent)

}

console.log(arrayPlusArray([1,2,3,4,5] , [6,7,8,9,10]))
