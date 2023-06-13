function solution(A, B) {
    let a= A.toString()
    let b= B.toString()

    return +(b+a> a+b?b+a:a+b)
    
}