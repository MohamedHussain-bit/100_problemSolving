//! You get an array of numbers, return the sum of all of the positives ones.
// initValuo = 0
// array loop
// chick if the numper is postive or not
// if postive add the number to initValuo

function sumOfPositive(arr){
    initValuo = 0
    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            initValuo = initValuo + arr[i]
        }
    }
    return initValuo
}

console.log(sumOfPositive([5,10,-12,15])) // 30

//todo :=> Another solution

function sumOfPositive2(arr) {
  return arr
    .filter(x => x > 0)
    .reduce((sum, x) => sum + x, 0);
}

console.log(sumOfPositive2([5, 10, -12, 15])); // 30


