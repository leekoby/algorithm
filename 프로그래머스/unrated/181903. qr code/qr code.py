def solution(q, r, code):
    answer = ''
    
    for i, v in enumerate(code) :
        if i % q == r :
            answer += v            
    
    return answer