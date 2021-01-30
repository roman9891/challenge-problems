const moveZeroes2 = arr => {

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }

    return arr
}

const moveZeroes = A => {
    let i = 0; // lagging pointer moves non zero numbers to the front
    for (let j = 0; j < A.length; ++j)
        if (A[j]) 
			A[i++] = A[j]; //as j points to non zeroes they are assigned to lagging pointer in front of array
    for (let j = i; j < A.length; ++j) //second loop assigns all indices after where first loop stopped to zero
        A[j] = 0; 

    return A
}

console.log(moveZeroes([0,1,0,3,12]))//[0,0,1,3,12]