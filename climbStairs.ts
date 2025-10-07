const climbStairs = (n: number): number => {
    if (n <= 2) return n

    return fibonacci(n, {})
}

const fibonacci = (num: number, memo: {[key: number]: number}): number => {
    if (num in memo) return memo[num]
    if (num <= 2) return num

    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
}
