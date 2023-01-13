function solution(phone_number) {
    // let str = phone_number.split('')
    // var answer = [];
    // for(let i = 0; i < str.length ; i++ ){
    //     i > str.length-5 ? answer.push(str[i]) : answer.push('*')          
    // }    
    // return answer.join('');
    return phone_number = [...phone_number].fill('*',0,phone_number.length-4).join('')
}