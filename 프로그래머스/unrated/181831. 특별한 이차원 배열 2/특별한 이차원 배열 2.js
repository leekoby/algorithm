function solution(arr) {
 let len = arr.length
  
  for(let i = 0 ; i < len;i++){
      for(let j = 0 ; j< len;j++){
        if(!(arr[i][j]===arr[j][i])) return 0           
      }
  }
    return 1
}