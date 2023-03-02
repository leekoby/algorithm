function solution(n){
    // n : 이동해야 하는 거리 
    // 한 번에 k 칸 점프 가능 (배터리 k 소모)
    // 현재까지 온 거리 * 2 순간이동 가능 (배터리 소모 없음)
    // n의 거리를 갈 때, 배터리를 최소로 사용한 값 return
    
    let battery = 0;
    while(n>=2){
        if(n%2!==0){
            battery++;
            n-=1;
        }
        n=n/2;
    }
    return battery+1;
}