class Square {

    constructor(length, width) {
        this.length = length
        this.width = width
    }

    get area() {
        return this.calcArea()
    }

    static name = 'rectangle'

    calcArea() {
        return this.length * this.width
    }
}

let square = new Square(5,4)

console.log(square.calcArea())