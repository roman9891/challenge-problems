class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    set (key, value) {
        const hashedKey = this.hash(key)

        if (this.keyMap[hashedKey]) this.keyMap[hashedKey].push([key, value])
        else this.keyMap[hashedKey] = [[key, value]]
    }

    get (key) {
        const hashedKey = this.hash(key)
        if (this.keyMap[hashedKey]) {
            for (let i = 0; i < this.keyMap[hashedKey]; i++) {
                if (this.keyMap[hashedKey][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
    }

    values () {
        const results = new Set()
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                this.keyMap[i].forEach(entry => results.add(entry[1]))
            }
        }
        return results
    }

    keys () {
        const results = new Set()
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                this.keyMap[i].forEach(entry => results.add(entry[0]))
            }
        }
        return results
    }

    hash = (key) => {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
}

const hashTable = new HashTable(2)

console.log(hashTable.keys())
