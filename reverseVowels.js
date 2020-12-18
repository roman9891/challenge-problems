const reverseVowels = string => {
    let l = 0,
        r = string.length - 1,
        vowels = "aeiouAEIOU"
    string = string.split(``)//moved outside of loop to reduce time complexity and allow position assignment

    while (l < r) { //until left and right pointers meet
        if (vowels.includes(string[l])) {
            if (vowels.includes(string[r])) {
                //swap values if left and right point to vowels
                let temp = string[r]

                string[r] = string[l]
                string[l] = temp

                //then move each pointer inward
                l++
                r--
            } else {
                r--//if right doenst point to vowel move left
            }
        } else {
            l++//if left doesnt point to vowel move right
        }
    }
    return string.join(``)
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('ubelievable'))
console.log(reverseVowels('massacre'))