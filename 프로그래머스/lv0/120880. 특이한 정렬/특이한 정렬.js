function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [gabA, gabB] = [Math.abs(a-n), Math.abs(b-n)]
     
        if(gabA === gabB) return b-a

        return gabA-gabB
    })
}