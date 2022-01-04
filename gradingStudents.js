function gradingStudents(grades) {
    return grades.map(item => {
        const round = Math.ceil((item + 1) / 5) * 5
        return result = (round - item < 3) && item >= 38 ? round : item
    })
    
}

console.log(gradingStudents([73,67,38,33]))
