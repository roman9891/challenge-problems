const nonDuplicate2 = string => {
    let left = 0, right = 1

    while (right < string.length) {
        if (string[left] === string[right]) {
            while (string[left] === string[right]) {
                // left++
                right++
            }
            left = right
            right = left + 1
        } else {
            right++
        }
    }

    return string[left] ? string[left] : false
}

const nonDuplicate = string => {
    let left = 0, right = 1
    const duplicates = {}

    //aaaabbbcddd
    //       l  r

    while (right < string.length) {
        if (string[left] === string[right]) {
            duplicates[string[left]] = true
            
            while (duplicates[string[left]]) {
                left++  
            }
            right = left + 1
            
        } else {
            right++
        }
    }
    return string[left] ? string[left] : false
}

console.log(nonDuplicate("abb"))
console.log(nonDuplicate("aba"))
console.log(nonDuplicate("aab"))
console.log(nonDuplicate("aaa"))