function solution(n) {
    // let strN = String(n).split('');
    //  console.log(strN)
    // let answer = 0;
    // for(let i =0 ; i<strN.length;i++){
    //     answer += Number(strN[i])
    //     console.log(strN[i])
    // }
    // return answer;
    
    
    
    //return [...String(n)].map(Number).reduce((a,b)=> a+b);
    let answer = Array.from(String(n)).reduce((a,b) => (+a) + (+b), 0)
    console.log(answer)
    return answer;
    // return [...String(n)].reduce((a,b) => +a + +b);
    
    
}