// create the empty array for positive number
// create variable to add negative number
// loop throue array
// cheak if positive add to empty array : if negativ add variable

function count_of_postive_sum_of_negative(inbut){
    let positiveArray = []
    let negativeNum = 0
    for (let i = 0 ; i < inbut.length ; i++){
        if (inbut[i] > 0){
            positiveArray.push(inbut[i])
        }else {
            negativeNum = negativeNum + inbut[i]

        }
    }
    return [positiveArray.length , negativeNum]
}

console.log(count_of_postive_sum_of_negative([1,2,3,4,5,6,-7,-8,-9]))
