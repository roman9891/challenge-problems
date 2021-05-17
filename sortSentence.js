// given a string containing words of a sentence with their position appended to the end of each word
// sort the string according to position

// split sentence by spaces into array of words
// for each word
// read numbers on the end
// assign to result array at index position
// join array

const sortSentence = string => {
    const result = [], words = string.split(' ')

    words.forEach(word => {
        let index = parseInt(word.slice(-1))

        result[index - 1] = word.slice(0,-1)
    })

    return result.join(' ')
}

console.log(sortSentence("is2 sentence4 This1 a3"))
console.log(sortSentence("Myself2 Me1 I4 and3"))