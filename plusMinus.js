function plusMinus(arr) {
    
    let pos = 0
    let neg = 0
    let zero = 0
    let length = arr.length
    
    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else zero++
    }
    console.log((pos / length).toFixed(6))
    console.log((neg / length).toFixed(6))
    console.log((zero / length).toFixed(6))
}

plusMinus([1,1,0,-1,-1])