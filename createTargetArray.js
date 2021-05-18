// given array of nums and array of indicies
// return array of nums in position of according to indicies
// if an index is repeated the subsequent insertions at that index will push back previous ones

// creat result array
// loop through index array
// if a value exists in result array at index[i] position
//   splice nums[i] value into that position
//   else assign value to that position
// return result

const createTargetArray = (nums, indexArray) => {
    const result = []

    for (const i in indexArray) result[indexArray[i]] || result[indexArray[i]] === 0 ? 
        result.splice(indexArray[i],0,nums[i]) 
        : 
        result[indexArray[i]] = nums[i]
    
    return result
}

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]))
console.log(createTargetArray([0,1], [0,0]))
console.log( createTargetArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))