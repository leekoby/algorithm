function solution(my_string, s, e) {
    const slicedString = my_string.slice(s, e+1)
    const reverseStr = [...slicedString].reverse().join("")
    const splitMyString = [...my_string]
    splitMyString.splice(s, e-s+1, reverseStr)
    return splitMyString.join("")
}