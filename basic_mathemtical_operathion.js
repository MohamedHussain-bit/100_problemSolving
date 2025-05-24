
function basicOp(op , num1 , num2){
    
    if (op == "+"){
        return num1 + num2
    }else if (op == "-"){
        return num1 - num2
    
    }else if (op == "*"){
        return num1 * num2
    
    }else if (op == "/"){
        return num1 / num2
    }
}

console.log(basicOp("+" , 100 , 100))
