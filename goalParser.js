const goalParser = string => {
    let parsedString = ``
    
    for (let i = 0; i < string.length; i++) {
        console.log(string[i])
        if (string[i] === 'G') parsedString += 'G'
        else if (string[i] === '(' && string[i+1] === ')') parsedString += 'o', i++
        else parsedString += 'al', i +=3
    }
    
    return parsedString
}

console.log(goalParser("G()()()()(al)"))
console.log(goalParser("(al)G(al)()()G"))