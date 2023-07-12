function solution(num_list) {
    var answer = 0;
    const fun =(num)=>{
        let c=num;
        if(c===1) return c;
        if(c%2===0) {
            answer++
            c=c/2;
        }
        else if(c%2===1) {
            answer++
            c=(c-1)/2;
        }
        return fun(c)
    }
    for(let c of num_list){
       fun(c)
    }
    return answer;
}