class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        for(int num: array){
            answer += num==n ? 1 : 0;
        }
        return answer;
    }
}