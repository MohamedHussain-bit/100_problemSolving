// create the emptye string
// thacke the number ande loop in the string
// add theis string in the emptye astring

function repetString(num , str){
   let newString = ""
   for(i = 0 ; i < num ; i++){
    newString = newString + str

   }
   return newString
}

console.log(repetString(5 , " M "))
