function solution(myStr) {
    let newStr = myStr.split( /[abc]/g).filter(Boolean)
    console.log(newStr)
    return newStr.length >0 ?newStr:["EMPTY"]
}