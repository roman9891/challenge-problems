// given arr of nums and values a, b, c
// return number of good triplets
// good triplets: 
// i < j < k; 
// arr[i] - arr[j] <= a
// arr[j] - arr[k] <= b
// arr[i] - arr[k] <= c

// 3 pointers
// i = 0, j = i+1, k = i+2
// at each increment check conditions
// increment k till length
// then increment j each full k length
// then increment i each full k length
// if all conditions are met increment count

const countGoodTriplets = (arr, a, b, c) => {
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    count++
                }
            }
        }
    }

    return count
}

// optimized with continue
var countGoodTriplets = function(arr, a, b, c) {
    let res = 0;
    
    for(let i = 0; i < arr.length; i++) {
        
        for(let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) continue;
            
            for(let k = j+1; k < arr.length; k++) {
                if(Math.abs(arr[j] - arr[k]) > b) continue;
                if(Math.abs(arr[k] - arr[i]) <= c) res++;
            }
        }
    }
    return res;
};

console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3))
console.log(countGoodTriplets([1,1,2,2,3], 0, 0, 1))