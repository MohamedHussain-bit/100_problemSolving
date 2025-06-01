// quarter of the year

function ofQuaeter(month){
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4

}

console.log(ofQuaeter(10))
