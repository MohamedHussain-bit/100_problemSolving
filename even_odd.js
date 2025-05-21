//! Create a function that takes an integer as an argument
// ! and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(int){
    if(int %2 === 0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(evenOdd(5))

//todo :=> Another solution

function evenOdd2(value){
    return value % 2 == 0 ? "even" : "odd"
}
console.log(evenOdd2(6))
