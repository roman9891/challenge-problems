//given sequence nums and value k
//find most competitive subsequence of length k
//most competitive = lowest value from left to right
//must follow sequential order of nums

//brute force solution
//loop through nums to length - (k - 1)
//push lowest value into result
//slice from index
//k++
//repeart k times total

// const result = []

const mostCompetitive = (nums, k) => {
    let result = [], count = 0

    while (k) {
        let lowest = nums[0],
            lowestIndex = 0
        for (let i = 1; i < nums.length - (k - 1); i ++) {
            count++
            if (nums[i] < lowest) {
                lowest = nums[i]
                lowestIndex = i
            }
        }
        if ((nums.length - lowestIndex) === k) {
            console.log("trying to cheat")
            return result.concat(nums.slice(lowestIndex))
        }
        result.push(lowest)
        nums = nums.slice(lowestIndex + 1)
        k--
    }
    console.log(count)
    return result
}

const mostCompetitive2 = (nums, k) => {
    let result = [],
        sortedArr = [...mergeSort(nums)],
        sortedIndex = 0,
        lowestIndex = 0,
        // debug = 0

    while (k) {
        let pushedSomething = false
        for (let i = lowestIndex; i < nums.length - (k - 1); i++) {
            console.log(nums[i], sortedArr[sortedIndex])
            if (nums[i] === sortedArr[sortedIndex]) {
                if ((nums.length - lowestIndex) === k) {
                    console.log("trying to cheat")
                    return result.concat(nums.slice(lowestIndex))
                }
                lowestIndex = i + 1
                result.push(nums[i])
                console.log(`pushing ${nums[i]}`)
                pushedSomething = true
                k--
                sortedIndex++
            }
            if (k === 0) break
        }
        if (!pushedSomething) sortedArr.push(sortedArr[sortedIndex])
        sortedIndex++
        // debug++
        // if (debug === 100) {
        //     console.log(lowestIndex, sortedIndex)
        //     break
        // }
    }
    return result
}

const merger = (arr1, arr2) => {
    const result = []
    let p1 = 0, p2 = 0

    while (p1 < arr1.length && p2 < arr2.length) {//while neither pointer has reached end
        if (arr1[p1] < arr2[p2]) {//add lower pointer value and increment that pointer
            result.push(arr1[p1])
            p1++
        } else {
            result.push(arr2[p2])
            p2++
        }
    }
    //the remaining values of the lagging pointer are already sorted so they can just be pushed in
    while (p1 < arr1.length) {
        result.push(arr1[p1])
        p1++
    }

    while (p2 < arr2.length) {
        result.push(arr2[p2])
        p2++
    }

    return result
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr//only triggers at the end of stack when array has been full split
    
    const half = ~~arr.length/2
    let half1 = mergeSort(arr.slice(0, half)),//recursively splits array but recieves merged array as return
        half2 = mergeSort(arr.slice(half, arr.length))
    
    return merger(half1, half2)
}

// console.log(mostCompetitive([3,5,2,6], 2))//[2,6]
// console.log(mostCompetitive([3,2,4,3,3,5,4,9,6], 4))//[2,3,3,4]
// console.log(mostCompetitive([71,18,52,29,55,73,24,42,66,8,80,2], 3))
console.log(mostCompetitive([84,10,71,23,66,61,62,64,34,41,80,25,91,43,4,75,65,13,37,41,46,90,55,8,85,61,95,71], 24))
