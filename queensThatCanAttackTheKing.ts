const queensAttackTheKing = (queens: number[][], king: number[]): number[][] => {
    const result = []

    // check up
    let current = [...king]

    for (let i = king[0] - 1; i >= 0; i--) {
        current[0] = i
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check down
    current = [...king]

    for (let i = king[0] + 1; i <= 7; i++) {
        current[0] = i
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check left
    current = [...king]

    for (let i = king[1] - 1; i >= 0; i--) {
        current[1] = i
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check right
    current = [...king]

    for (let i = king[1] + 1; i <= 7; i++) {
        current[1] = i
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check up + left
    current = [...king]

    for (let i = king[0] - 1, j = king[1] - 1; i >= 0 && j >= 0; i--, j--) {
        current = [i,j]
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check up + right
    current = [...king]

    for (let i = king[0] - 1, j = king[1] + 1; i >= 0 && j <= 7; i--, j++) {
        current = [i,j]
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check down + right
    current = [...king]

    for (let i = king[0] + 1, j = king[1] + 1; i <= 7 && j <= 7; i++, j++) {
        current = [i,j]
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    // check down + left
    current = [...king]

    for (let i = king[0] + 1, j = king[1] - 1; i <= 7 && j >= 0; i++, j--) {
        current = [i,j]
        let index = queens.findIndex(queen => queen[0] === current[0] && queen[1] === current[1])
        if (index !== -1) {
            result.push(queens[index])
            break
        }
    }

    return result
}

console.log(queensAttackTheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [0,0]))
console.log(queensAttackTheKing([[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], [3,3]))
console.log(queensAttackTheKing([[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], [3,4]))