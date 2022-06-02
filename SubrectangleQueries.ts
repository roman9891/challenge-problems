class SubrectangleQueries {
    rectangle: number[][]
    
    constructor(rectangle) {
        this.rectangle = rectangle
    }

    updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
        for (let i = row1; i <= row2; i++) {
            let currentRow = this.rectangle[i]
            
            // for (let j = col1; j <= col2; j++) {
            //     currentRow[j] = newValue
            // }
            let colRange = col2 - col1 + 1
            const newValues = new Array(colRange).fill(newValue)

            currentRow.splice(col1, colRange, ...newValues)
        }
    }

    getValue(row: number, col: number): number {
        return this.rectangle[row][col]
    }
}

const sub = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]])
console.log(sub.rectangle)
console.log(sub.getValue(0, 2))
sub.updateSubrectangle(0, 1, 3, 2, 5)
console.log(sub.getValue(0, 2))
console.log(sub.getValue(3, 1))
sub.updateSubrectangle(3, 0, 3, 2, 10)
console.log(sub.getValue(3, 1))
