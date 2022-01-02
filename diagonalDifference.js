function diagonalDifference(arr) {
    let n = arr.length
    let rigthDiagonal = 0
    let leftDiagonal = 0
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                rigthDiagonal += arr[i][j]
            }
            if(i + j === n -1){
                leftDiagonal += arr[i][j]
            }
        }
    }
    return Math.abs(rigthDiagonal - leftDiagonal)
    
}

console.log(diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]]))