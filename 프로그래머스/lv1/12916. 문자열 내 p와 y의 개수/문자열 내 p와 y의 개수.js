function solution(s){
    let str= s.toLowerCase().split('');
    let p = str.filter(p=>p=== 'p')
    let y = str.filter(y=> y==='y')
    console.log(p,y)
    return p.length === y.length;
}