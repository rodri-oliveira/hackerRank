function kangaroo(x1, v1, x2, v2){
    return v1 < v2 ? "NO" : ((x2 - x1) % (v1 - v2) === 0) ? "YES" : "NO"
}

console.log(kangaroo(0, 3, 4, 2))