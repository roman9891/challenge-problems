// given sorted array and target average
// determine if array contains a pair of numbers equal to average
// may be more than one pair

// two pointers
// while lower pointer is less than 2nd to last value
// move higher pointer until higher than average
// while avg less than target move p1
// if average is higher move p1 left and p2 right
// if equals target return true
// outside loop return false

const averagePair = (sortedArray, targetAverage) => {
    console.log(sortedArray, targetAverage)
    if (sortedArray[sortedArray.length - 1] < targetAverage) return false
    if (sortedArray.length === 1) return false
    if (sortedArray.length === 2) return ((sortedArray[0] + sortedArray[1]) / 2) === targetAverage

    let p1 = 0, p2 = 1

    while (sortedArray[p2] < targetAverage) p2++

    if (sortedArray[p2] === targetAverage && sortedArray[p2+1] === targetAverage) return true
    else p2++

    while (p1 < sortedArray.length - 1) {
        let average = (sortedArray[p1] + sortedArray[p2]) / 2
        
        if (average === targetAverage) {
            console.log(sortedArray[p1], sortedArray[p2])
            return true
        }
        else if (average < targetAverage) p1++
        else if (average > targetAverage) {
            p1--
            p2++
        }
    }
    
    return false
}
// solution did not work on all values
// couldn't troubleshoot effectively from udemy editor
// tried logging failed values
// I couldn't understand a test that involved s: blank t: 4 // true
// I don't understand why it should be true or I'm not able to log s properly
// decided to move on

//colt solution
// function averagePair(arr, num){
//     let start = 0
//     let end = arr.length-1;
//     while(start < end){
//       let avg = (arr[start]+arr[end]) / 2 
//       if(avg === num) return true;
//       else if(avg < num) start++
//       else end--
//     }
//     return false;
//   }

console.log(averagePair([1,2,3,3,6,7], 3))
