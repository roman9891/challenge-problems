const sortString = s => {
    // let result = ''
    // let i = 1
    // let lowest = string[0]
    // let lastIndex = 0

    // while (i < string.length) {
    //     if (string[i] < lowest) {
    //         lowest = string[i]
    //         lastIndex = i
    //     }
    //     i++
    // }
    // result += lowest
    // let x = string.split('')
    // x[lastIndex] = ''
    // x = x.join('')
    
    // while (lowest) {
    //     i = 0
    //     lowest = undefined
    //     let lastItem = result[result.length - 1]
    //     while (i < string.length) {
    //         if (string[i] > lastItem) {
    //             lowest = string[i]
    //             break
    //         }
    //         i++
    //     }
    //     if (lowest) {
    //         i = 0
    //         while (i < string.length) {
    //             if (string[i] > lastItem && string[i] < lowest) {
    //                 lowest = string[i]
    //             }
    //             i++
    //         }
    //         result += lowest
    //     }
    // }
    

    // return result
    let arr = Array.from(s), ret = '';

  arr.sort();

  while (arr.length) {
    arr = arr.filter((x, i) => {
      if (i === 0 || x !== ret[ret.length - 1]) {
        ret += x;
        return false;
      }
      return true;
    });

    arr.reverse();
  }

  return ret;
}

const appendNextGreatest = string => {

}

console.log(sortString("aaaabbbbcccc"))
console.log(sortString("rat"))