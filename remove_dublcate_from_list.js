// remove dublcate from list

function remove(array){
    const uniqeobject = new Set(array)
    return [...uniqeobject]

}

console.log(remove([1,2,3,4,5,6,6,7,7,8,8,9,9,10]))