function solution(priorities, location) {
    let answer = 0;
    let pos_map = []
    let max_value = Math.max(...priorities);

    //1. position map 만들기
    for(let i = 0; i < priorities.length; i++){
        pos_map.push(i);
    }

    //2. 알고리즘 뽑기
    while(priorities.length != 0){
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            pos_map.push(pos_map.shift());
        }else {// priorities[0] >= max_value
            answer+=1;
            priorities.shift();
            if(pos_map.shift() == location)
                return answer;
            max_value = Math.max(...priorities);
        }
    }
}