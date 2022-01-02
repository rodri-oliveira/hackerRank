function compareTriplets(a, b) {
    let scoreAlice = 0
    let scoreBob = 0
    
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            scoreAlice++
        }
        if(a[i] < b[i]){
            scoreBob++
        }
    }
    return [scoreAlice, scoreBob]

}
console.log(compareTriplets([1,2,3], [3,2,1]))