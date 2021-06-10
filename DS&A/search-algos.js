const linearSearch = (array, value) => {
    
    let match = false

    //this is worse than loop? 
    //forEach will continue checking even after match is found
    //also will return last match index instead of first
    array.forEach((x,i) => {
        if (x === value) match = i
    })
    
    return (match || match === 0) ? match : -1
}

const linearSearch2 = (array, value) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i
    }
    
    return -1
}

console.log(linearSearch2([1,0,3], 2))