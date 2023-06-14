function solution(my_string) {
    const arr = Array(52).fill(0)
    return  [...my_string].reduce((acc,cur)=>{
        let currentIndex
        const currentAlpha =cur.charCodeAt()
         if(currentAlpha >= 97) {
         currentIndex = currentAlpha - 71   
        } else {
         currentIndex = currentAlpha - 65   
        }
        acc[currentIndex] = acc[currentIndex] ?? 0
        acc[currentIndex]++
        return acc
    }, arr)   
}