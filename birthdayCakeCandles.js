function birthdayCakeCandles(candles) {
    let count = 0
    let biggerCandle =  candles.reduce((acc, item) => acc > item ? acc : item,0)
    candles.forEach(item => {
        if(biggerCandle === item){
            count++
        }
    });
    console.log(count)
}

birthdayCakeCandles([3, 2, 1, 3])