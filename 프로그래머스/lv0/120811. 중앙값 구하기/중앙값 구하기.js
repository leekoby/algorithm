function solution(array) {
    var answer = 0;
    const arrSort = array.sort((a,b) =>a-b);
    const midNum = Math.floor(array.length/2);
    return arrSort[midNum];
}