const disX = [-1, -1, -1, 0, 0, 1, 1, 1];
const disY = [-1, 0, 1, -1, 1, -1, 0, 1];
function solution(board) { 
    let length = board.length
    let dangerZone = JSON.parse(JSON.stringify(board)); //배열의 깊은 복사.
    //얕은 복사: 복사본 변경시, 원본도 바뀐다. 깊은 복사: 복사본 변경해도, 원본이 그대로이다.
    for(let x=0;x<board.length;x++){ //전체 스캔
        for(let y=0;y<board.length;y++){
            if(board[x][y]===0) continue; //폭심지가 0이면 무시
            for(let i=0;i<disX.length;i++){ //폭탄인근좌표, 구하기
                let nx = x + disX[i];
                let ny = y + disY[i];
                if(nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length) continue;
                // board 좌표 벗어나면 무시
                // nx, ny에서 =이 들어간 이유는, board가 배열이기 때문이다.
                // 배열의 위치는 0부터 세고, 마지막 배열 위치는 arr.length-1로 표현해야 한다.
                dangerZone[nx][ny] = 1; // 폭탄 주위 좌표는 모두 1로 채움
            }
        }
    }
    return length*length-(dangerZone.flat().filter(d => d).length);
}
