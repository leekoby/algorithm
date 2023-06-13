function solution(arr) {
  let isValid = true 
  
  for(let i = 0 ; i < arr.length;i++){
      for(let j = 0 ; j< arr[i].length;j++){
          
          if(!(arr[i][j]===arr[j][i])) {
              isValid =false
              return 0 
          }
      }
  }
    return +isValid
}