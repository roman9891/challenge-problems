// https://leetcode.com/problems/two-city-scheduling/

// 1029. Two City Scheduling
// Medium

// 3356

// 259

// Add to List

// Share
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], 
// the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 

// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
// Example 3:

// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086

const twoCitySchedCost = (costs) => {
    const fullCity = costs.length / 2
    const cityA = []
    const cityB = []

    // sort costs array according to price difference
    costs.sort((a,b) => {
        let diffA = Math.max(...a) - Math.min(...a)
        let diffB = Math.max(...b) - Math.min(...b)
        return diffA - diffB
    })

    // fill up cities until they are at capacity
    while (cityA.length < fullCity && cityB.length < fullCity) {
        const cost = costs.pop()
        if (cost[0] < cost[1]) cityA.push(cost[0])
        else cityB.push(cost[1])
    }

    // if city A fills up first push the rest into city B or vice versa
    if (cityA.length > cityB.length) costs.forEach(cost => cityB.push(cost[1]))
    else costs.forEach(cost => cityA.push(cost[0]))

    return cityA.reduce((total, cost) => total + cost, 0) + cityB.reduce((total, cost) => total + cost, 0)
}

console.log(twoCitySchedCost([[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]))