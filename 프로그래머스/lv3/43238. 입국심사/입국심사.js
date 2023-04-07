// 로그시간 필요 = 이진탐색 
// times -> 선형 로그 시간 가능 
// 특정 값을 찾는 것이 아니다. 
// 찾는 것은 최소 몇분의 소요시간  = 결정 문제 = 이진탐색 = 파라메트릭 서치 (Parametric Search)
// 최소 1분 ~ 10억 분 * n 명 사이 
// 면접관이 몇 명을 처리하는가...
// 처리 가능한 입국자 수가 n보다 작다면 분을 증가, 처리 가능 입국자 수가 n보다 크다면 분을 감소
// 면접관이 시간 대비 몇명을 처리할 수 있는가? 시간 / 심사시간 = 심사관 당 처리가능한 입국자 수 

function solution(n, times) {
    const sortedTimes = times.sort((a,b)=>a-b);
    let left =1 ;
    let right = sortedTimes[sortedTimes.length-1] * n;
    
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        // sum = 시간 / 심사시간
        const sum = times.reduce((a,time)=>a + Math.floor(mid/time),0);
        
        if(sum<n){
            left =mid+1;
        } else {
            right = mid-1
        }
    }
    
    return left
}