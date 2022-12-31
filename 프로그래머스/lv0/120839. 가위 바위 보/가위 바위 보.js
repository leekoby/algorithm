const win={
    '2':'0',
    '0':'5',
    '5':'2',
}

function solution(rsp) {
    var answer = '';

    for (i=0;i<rsp.length;i++)
    {
       const item = rsp[i];
        answer += win[item];
    }
    
    return answer;
}