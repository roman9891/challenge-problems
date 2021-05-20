// given a string of allowed characters
// and an array of words
// count how many words consist only of characters from the allowed string

// create tracking object made of allowed characters
// for each word
//  loop through each letter
//  if current letter isnt defined in obj add to count
// return words.length - count

const countConsistentStrings = (allowedCharacters, words) => {
    const tracker = {}
    let count = 0

    for (let character of allowedCharacters) tracker[character] = true
    
    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (!tracker[word[i]]) {
                count++
                break
            }
        }
    })

    return words.length - count
}

// solution with set
const countConsistentStrings = (allowed, words) => {
    let set = new Set(allowed)
    return words.reduce((a, w) => {
      return w.split('').every(l => set.has(l)) ? ++a : a
    }, 0)
}

// one liner

const countConsistentStrings = (allowed, words) =>
  (allowedSet =>
    words.reduce(
      (acc, curr) => acc + [...curr].every(char => allowedSet.has(char)),
      0,
))(new Set(allowed));

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]))
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))