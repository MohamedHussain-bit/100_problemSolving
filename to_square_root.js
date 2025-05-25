// loop the array 
// cheack if the number had integar square root
// if true take root else if take square
// return new array

function squareSquareRoot(array){
    let newArray =[]
    for (let i = 0 ; i < array.length ; i++){
    if (Number.isInteger(Math.sqrt(array[i]))){
         newArray.push(Math.sqrt(array[i]))
    } else {
         newArray.push(array[i] * array[i])
    }
    }
    return newArray
}

console.log(squareSquareRoot([1,2,3,4,5,9]))


