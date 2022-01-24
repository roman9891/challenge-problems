// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// SOLUTION:
// loop through first word
// inside loop through array of words
// if letter at current index of first words doesnt match letter at index of any other words
// return current prefix
// if inner loop is completed add current letter to prefix
// after outer loop return prefix

const longestCommonPrefix = arr => {
    let word = [...arr[0]]
    let prefix = ''

    for (let i = 0; i < word.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (word[i] !== arr[j][i]) return prefix
        }
        prefix += word[i]
    }
    return prefix
}

// interesting alternate solution that uses .every:

// var longestCommonPrefix = function(strs) {
//     let prefix = '';
    
//     for (let i = 0; i <= strs[0].length; i++) {
//         const nextPrefix = strs[0].slice(0, i);
        
//         if (strs.every(str => str.slice(0, i) === nextPrefix)) {
//             prefix = nextPrefix;
//         } else {
//             break;
//         }
//     }
    
//     return prefix;
// };

console.log(largestCommonPrefix(["flower","flow","flight"]))
console.log(largestCommonPrefix(["dog","racecar","car"]))