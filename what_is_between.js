// what is between

function between(a , b){
    return Array(b - a + 1).fill(a).map((n , i) => n + i)

}

console.log(between(1 , 5))
