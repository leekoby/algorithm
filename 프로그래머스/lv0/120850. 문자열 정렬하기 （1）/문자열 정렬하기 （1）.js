function solution(my_string) {
    // let arrStr = my_string.split('');
    let answer =[];
    // console.log(arrStr)
    
    for(let i = 0 ; i <my_string.length ; i ++)
        {
            if(isNaN(my_string[i]) === false)
                answer.push(Number(my_string[i]))
        }
    
    return sortAnswer= answer.sort((a,b)=>a-b);
}