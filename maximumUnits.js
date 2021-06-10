// given a 2d array containing arrays of [box quantity, number of units]
// and given max truck size as integer represent how many boxes can fit on truck
// return maximum units you can fit on truck

// sort array by highest units
// count box total and unit total
// starting with highest unit
// if box total less than maxtruck - boxes on truck
//  increment boxtotal and unit total accordingly
// else add space to the difference

const maximumUnits = (arr, max) => {
    let result = 0, i = 0

    arr.sort((a,b) => b[1] - a[1])

    while (max && i < arr.length) {
        if (arr[i][0] > max) {
            result += arr[i][1] * max
            max = 0
        } else {
            result += arr[i][1] * arr[i][0]
            max -= arr[i][0]
            i++
        }
    }
    return result
}

// console.log(maximumUnits([[1,3],[2,2],[3,1]], 4))
// console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))
console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35))