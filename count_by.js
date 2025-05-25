// create empty array
// loop for n
// add number in empty array x * n
// return empty array

function countBy(x , n){
    let newArray = []
    for (let i = 1 ; i <= n ; i++){
        newArray.push(x * i)

    }
    return newArray
}

console.log(countBy(1 , 10))

