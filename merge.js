// given two SORTED arrays of nums and values m and n that indicate how many initialized values in each array
// return first array with second array merged and sorted

// two pointers
// while both pointers are before m and n respectively
// if p2 is between p1 and p1+1 then assign and save old value to store

const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1, p2 = n - 1, p3 = nums1.length -1

    while (p3 > -1) {
        if (nums1[p1] >= nums2[p2] || p2 === -1) {
            nums1[p3] = nums1[p1]
            p1--
        } else {
            nums1[p3] = nums2[p2]
            p2--
        }
        p3--
    }
    return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([1,3,5,7,0,0,0,0,0], 4, [2,3,4,6,8], 5))
console.log(merge([0], 0, [1], 1))
console.log(merge([2,0], 1, [1], 1))
