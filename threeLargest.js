//given an array of unsorted integers with possible dupes
//without sorting array
//return array of three largest potentially including duplicates

const threeLargest = arr => {
    const result = arr[0] >= arr[1] ? [arr[1],arr[0]] : [arr[0], arr[1]]//sort r0 and r1
    
    arr[2] <= result[0] ?//sort r3
        result.unshift(arr[2]) : 
        (arr[2] <= result[1] ? result.splice(1,0,arr[2]) : result.push(arr[2]))

    if (arr.length === 3) return result
    //if arr is only length 3 than return otherwise loop through rest
    for (let i = 3; i < arr.length; i++) {
        //compare each element to result starting from lowest result value
        if (arr[i] > result[0]) {//if i > r0
            
            if (arr[i] > result[1]) {//if i > r1
                
                if (arr[i] > result[2]) {//if i > r2
                    result.push(arr[i])
                    result.shift()
                } else {
                    result.splice(2,0, arr[i])
                    result.shift()
                }
            } else {
                result[0] = arr[i]
            }
        }
    }
    return result
}

console.log(threeLargest([10,5,9,10,12])) //10,10,12
console.log(threeLargest([141,1,17,-7,-17,-27,18,541,8,7,7]))//18,141,541
console.log(threeLargest([1,2,3,4,5]))//3,4,5
console.log(threeLargest([5,4,3,2,1]))//3,4,5