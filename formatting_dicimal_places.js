// formatting dicemal places

function twoDecimalPlaces(n){
    return Number(n.toFixed(2))
}

console.log(twoDecimalPlaces(5.56789))

// todo : => Anather solution

function twoDecimalPlaces2(n){
        return Math.round(n * 100) / 100
}

console.log(twoDecimalPlaces2(5.56789))
