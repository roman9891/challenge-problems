// takes string
// return length of longest continuous substring of unique characters

// loop through string
// each loop
// create tracking object
// slide to right adding letters to object until next letter is already defined
// update max length

// optimization: after each slide move index to that point

const findLongestSubstring = string => {
    let max = ''

    for (let i = 0; i < string.length; i++) {
        let tracker = {}
        let currentSubstring = ''
        let j = i
       
        while (!tracker[string[j]] && j < string.length) {
            currentSubstring += string[j]
            tracker[string[j]] = true
            j++
        }
        if (currentSubstring.length > max.length) max = currentSubstring
    }

    return max.length
}

console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring(''))