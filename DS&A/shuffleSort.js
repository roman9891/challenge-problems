//input string and array of indeces
//return string with their original indeces switched to the positions in the array
//loop through array of indeces
//swap positions of string[i] and string[indeces[i]]

const shuffleSort2 = (string, indices) => {
    let result = ``

    indices.forEach(x => result += string[x])

    return indices.map(x => string[x]).join(``)
}

const shuffleSort = (string, indices) => {
   result = []

   for (i = 0; i < string.length; i++) {
       result[indices[i]] = string[i]
   }

   return result.join(``)
}
                                 // [c,o,d,e,l,e,e,t]
console.log(shuffleSort("codeleet", [4,5,6,7,0,2,1,3]))
console.log(shuffleSort("art", [1,0,2]))
console.log(shuffleSort("aaiougrt", [4,0,2,6,7,3,1,5]))

//make array with length of input
//assign string[i] to result[indeces[i]]

