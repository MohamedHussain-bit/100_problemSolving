// square n sum

function squareSum(numbers){
    return numbers.map((n) => n * n).reduce((acc , curent ) => acc + curent , 0)

}

console.log(squareSum([1,2,3,4,5]))
