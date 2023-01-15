function solution(i, j, k) {
    let answer = 0;
    let str =''
    for( let n = i ; n <=j ; n++){
            str+= n
        }
  

    return str.split(k).length-1;
}