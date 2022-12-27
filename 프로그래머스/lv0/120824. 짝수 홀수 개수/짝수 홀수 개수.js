function solution(num_list) {
    var answer = [];
    let cnt = 0;
    let even =0;
    let odd=0;
    
    while ( cnt < num_list.length)
        {
          if(num_list[cnt]%2 ===0){
              even++}
            else {
                odd++
            }
            cnt++
            
        }
    return [even,odd];
}