function simpleArraySum(ar) {
    const total = ar.reduce((acc, item) => acc + item, 0)
    return total
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))