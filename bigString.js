//////////////////////Q3 ------- 15 mins
// Implement a plus operation of two large int represented by String
// Cannot use BigInteger class.
// input : a = “100000000000”; b=“10000000000"
// output: “200000000000”

const bigString = (str1, str2) => {
    //return string of sum of math value of two large strings
    //for loop til end of biggest string
    //each iteration convert index values of both strings to num
    //add both nums and remainder
    //push value into array
    //join array

    let longerStringLength = (str1.length >= str2.length ? str1.length : str2.length),
        remainder = 0
    const result = new Array(longerStringLength)

    for (let i = 0; i < longerStringLength; i++) {
        let j = longerStringLength - 1 - i,
            x = str1[str1.length - 1 - i] ? parseInt(str1[str1.length - 1 - i]) : 0,
            y = str2[str2.length - 1 - i] ? parseInt(str2[str2.length - 1 - i]) : 0,
            sum = x+y+remainder

        if ((x+y)>9) {
            let onesDigit = sum.toString()[1] 
            result[j] = onesDigit
            remainder = 1
        } else {
            result[j] = sum
            remainder = 0
        }
    }

    return result.join(``).toString()
}

console.log(bigString("1044000000", "100000000000"))