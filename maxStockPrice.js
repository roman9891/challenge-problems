const maxStockPrice = (prices) => {
    let maxProfit

    for (let i = 0; i < prices.length - 1; i++) {
        let buyPrice = prices[i]
        let remainingPrices = prices.slice(i+1)
        let sellPrice = Math.max(...remainingPrices)
        let profit = sellPrice - buyPrice
        if (maxProfit === undefined) maxProfit = profit
        else if (profit > maxProfit) maxProfit = profit
    }

    return maxProfit
}

console.log(maxStockPrice([6,0,-1,10, 30]))
console.log(maxStockPrice([-10,-15,-31]))