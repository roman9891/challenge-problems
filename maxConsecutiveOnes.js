//given an array of 0 and 1
//and integer k
//you can switch k quantity of 0's to 1's
//find longest sequence of 1's

//loop through array
//if current index is 1
//start another loop while valid
//valid = k
//while next index of sub loop is not 1
//valid --
//track count of subloop
//if greater than current max set it to current max

const maxConsecutiveOnes = (arr, k) => {
    let count = 0, valid = k

    for (let i = 0; i < arr.length; i++){
        console.log(i, "super value: ", arr[i])
        if (arr[i] === 1 || (arr[i] === 0 && arr.slice(i+1, i+k).includes(1))) {
            let subCount = 0, j = i, skip = 0, skippingEnabled = false
            if (arr[i] === 1) skippingEnabled = true
            while ((valid && arr[j] !== undefined) || arr[j] === 1) {
                if (arr[j] === 1 && skippingEnabled) skip++
                if (arr[j] !== 1) valid--
                console.log("sub value: ", arr[j], "valid: ", valid)
                j++
                
                subCount++
            }
            console.log("skip: ", skip)
            if (skip > 0) i = i + skip - 1
            if (subCount > count) count = subCount
            valid = k
        }
    }
    return count
}

console.log(maxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0],2))//6
console.log(maxConsecutiveOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))//10