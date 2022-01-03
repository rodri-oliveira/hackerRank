function maxMinSum(arr){
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    let n = arr.length

    for(let i = 0; i < n; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }
    let maxSum = sum - min
    let minSum = sum - max
    console.log(minSum + " " + maxSum)
}

maxMinSum([1,2,3,4,5])