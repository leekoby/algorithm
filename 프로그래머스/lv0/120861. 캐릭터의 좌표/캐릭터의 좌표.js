function solution(keyinput, board) {

    //위치 초기값
    let x = 0;
    let y = 0;

    //맵의 범위 설정 
    const range =
        [Math.abs(Math.floor(board[0] / 2)),
        Math.abs(Math.floor(board[1] / 2))];
    //이동 방향에 따라 좌표값 변경
    keyinput.forEach(input => {
        if (input === "up") {
            y++
        } else if (input === "down") {
            y--
        } else if (input === "right") {
            x++
        } else if (input === "left") {
            x--
        }
        
        //x y 가 범위 밖이라면 범위 최대값으로 설정
    if (Math.abs(x) > range[0]) {
        x = x > 0 ? range[0] : range[0] * -1;
    }
    if (Math.abs(y) > range[1]) {
        y = y > 0 ? range[1] : range[1] * -1;
    }
    })
    

    return [x, y];
}