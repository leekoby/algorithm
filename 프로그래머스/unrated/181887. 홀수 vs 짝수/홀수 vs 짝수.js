function solution(num_list) {
    let odd = num_list.reduce((a,c,i)=> i%2===0 ?a+c: a ,0)
    let even = num_list.reduce((a,c,i)=> i%2!==0 ?a+c: a ,0)
    
    return odd>even ? odd : even
}