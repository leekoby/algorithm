function solution(gems) {
    let answer = [0,gems.length]; //가장 긴 길이로 초기화 
    let start=0; //첫번째 포인터
    let end=0; // 두번째 포인터
    
    const gemKinds =new Set(gems).size; //겹치지 않는 보석의 갯수 
    const collect=new Map(); //보석을 담아둘 변수 
    collect.set(gems[0],1); // 시작하면서 첫보석을 먼저 담는다
    
    while(start<gems.length && end<gems.length){
        if(collect.size===gemKinds){ //모든 보석을 구매할 수 있다면
            if(end-start<answer[1]-answer[0]) {//구간을 갱신
                answer= [start+1,end+1]
            }
        collect.set(gems[start], collect.get(gems[start])-1);
            //첫 포인터에 해당하는 보석을 한 개 줄인다. 
            
        if(collect.get(gems[start])===0){ //만약 0 이 됐다면 목록에서 제거된다.  
            collect.delete(gems[start]);
            }
        start+=1; //첫번째 포인터 증가 
        } else {
            end+=1;
            collect.set(gems[end],1+(collect.get(gems[end])||0)) //보석을 추가한다. 
        }
        
        
    }
    
    return answer;
}