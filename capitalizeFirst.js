// takes array of words
// returns array of words where first letter is capitalized for each

//take each word
// add first letter uppercased to result
// add rest of word to result

const capitalizeFirst = array => {
    if (!array.length) return []

    let word = array[0]
    let result = word[0].toUpperCase() + word.slice(1)

    return [result, ...capitalizeFirst(array.slice(1))]
}

console.log(capitalizeFirst(['car','taco','banana']))
console.log(capitalizeFirst(['car','taco','banana']))