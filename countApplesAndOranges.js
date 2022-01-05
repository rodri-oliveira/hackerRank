function countApplesAndOranges(s , t, a, b, oranges, apples){
    let aplleCount = 0
    let orangeCount = 0

    for (let apple of apples){
        if(a + apple >= s && a + apple <= t){
            aplleCount += 1
        }
    }

    for (let orange of oranges){
        if(b + orange >= s && b + orange <= t){
            orangeCount += 1
        }
    }
    console.log(aplleCount)
    console.log(orangeCount)
}