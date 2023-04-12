function solution(progresses, speeds) {
    return a(progresses, speeds)
}

function a (p, s) {
    const workingDays = [1];
    let days = 0;
    let c = Math.ceil((100 - p[0]) / s[0]);
    p.forEach((pr, i) => {
        if ( i > 0 ) { 
            if ( c < Math.ceil((100 - pr) / s[i]) ) {
                days++;
                c =  Math.ceil((100 - pr) / s[i])
                workingDays.push(1)
            } else { 
                workingDays[days]++;
            }
        }

    })

    return workingDays

}