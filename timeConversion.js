function timeConversion(s){
    let amPm = s.charAt(8)
    let militaryHour = ''

    if(amPm === 'A'){
        if(s.substring(0,2) === '12'){
            militaryHour = '00'
        }else {
             militaryHour = s.substring(0,2)
        }
    }else {
        if(s.substring(0,2) === '12'){
            militaryHour = s.substring(0,2)
        }else {
            militaryHour = parseInt(s.substring(0,2), 10) + 12
        }
    }
    console.log(militaryHour + s.substring(2,8))
}

timeConversion('05:00:00PM')