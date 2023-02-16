function solution(nums) {
    
    //연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리 max
  const max = nums.length / 2;
    
    // Set을 이용하여 중복된 요소들을 제거하여 남은 종류
  const duplicateMon = new Set(nums).size;
       
    
    //[3,1,2,3] 일때 max : 2 , duplicateMon : 3 => 2
    //[3,3,3,2,2,4]	max : 3 , duplicateMon  3 => 3
    //[3,3,3,2,2,2]	=> max : 3 , duplicateMon : 2 => 2
  return max < duplicateMon ? max : duplicateMon;
}