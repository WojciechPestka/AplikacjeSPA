function add(...numbers) {
    if (numbers.length == 0) {
        return NaN
    }
    return numbers.reduce((sum, elem) => sum + elem)
}

let result = add()
console.log(result)