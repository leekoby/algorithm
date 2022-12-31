function solution(rsp) {
    var answer = '';
    let winrsp = '';
    for (i=0;i<rsp.length;i++)
    {
        if(rsp[i] ==='2'){
           winrsp += 0;}
        else if(rsp[i] ==='0'){
            winrsp += 5;}
        else if(rsp[i] ==='5'){
            winrsp += 2;
        }
        
        
        
    }
    
    return winrsp;
}