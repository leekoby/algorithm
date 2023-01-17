function solution(id_pw, db) {
    let answer = ''
    const [id, pw] = id_pw;
 
    
    for(let i = 0; i < db.length; i++){
      if(id !== db[i][0] && pw!=db[i][1]) answer = 'fail'
      if(id === db[i][0] && pw!=db[i][1]) answer = 'wrong pw'
      if(id === db[i][0] && pw===db[i][1]) answer = 'login'
    }

    return answer;

}