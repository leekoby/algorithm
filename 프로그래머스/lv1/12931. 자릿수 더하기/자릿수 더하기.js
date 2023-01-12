function solution(n)
{
    let str = String(n)
    console.log(typeof str)
    let arrN = Array.from(str)
    console.log(arrN)
    let answer = arrN.reduce((a,b)=> +a+ (+b), 0)

    return answer;
}