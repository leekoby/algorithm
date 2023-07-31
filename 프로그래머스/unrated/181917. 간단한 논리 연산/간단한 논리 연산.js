function solution(x1, x2, x3, x4) {
    return eval(`(${x1} || ${x2}) && (${x3} || ${x4})`)
}