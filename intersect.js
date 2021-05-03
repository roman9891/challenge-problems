//Approach:
// create tally object
// iterate through first array
// for each number
// if it doesnt have a key in object then start a tally
// otherwise increment tally
// tally is kept in subkey to identify it as tally of first array
// do the same for second array but tally in different subkey
// iterate through objects keys
// if key has both subkeys
// then push that key into results array x times
// x = whichever subkey is lower value
// involves 3 loops so 3n

const intersect = (nums1, nums2) => {
    const trackingObj = {}
    const results = []
    
    nums1.forEach(num => {
        if (!trackingObj[num]) trackingObj[num] = {nums1: 1}
        else trackingObj[num].nums1 ++
    })
    nums2.forEach(num => {
        if (!trackingObj[num]) trackingObj[num] = {nums2: 1}
        else if (trackingObj[num]) {
            if (trackingObj[num].nums2) trackingObj[num].nums2 ++
            else trackingObj[num].nums2 = 1
        }
    })

    for (const key in trackingObj) {
        if (trackingObj[key].nums1 && trackingObj[key].nums2) {
            let quantity = trackingObj[key].nums1 < trackingObj[key].nums2 ? trackingObj[key].nums1 : trackingObj[key].nums2
            for (let i = 0; i < quantity; i++) {
                results.push(key)
            }
        }
    }

    return results
}

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))

// this method works but slower than most solutions
// doesn't use two pointers