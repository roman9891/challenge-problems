const fib = n => {
    if (n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

const fibMemo = (n, memo=[]) => {
    if (memo[n]) return memo[n]
    if (n <=2 ) return 1
    let result = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    memo[n] = result
    return result
}

const fibTab = n => {
    if (n <=2 ) return 1
    const nums = [0,1,1]
    for (let i = 3; i <= n; i++) {
        nums[i] = nums[i-1] + nums[i-2]
    }
    return nums
}