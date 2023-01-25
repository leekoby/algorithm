function solution(s)
{
    let arr = [];
    for(let i=0;i<s.length;i++){
       arr.push(s[i]);
        
       if(arr[arr.length-1]===arr[arr.length-2]){
           arr.pop();
           arr.pop();
       }
    }
    return arr.length === 0 ? 1 : 0
}








// function solution(s)
// {
 
        
    
//     const Arr = s.split("");

//       for(let i = 0 ; i < Arr.length-1 ; i++){
//         if(Arr[i] === Arr[i+1]){
//             Arr.splice( i, 2 );
//               i = -1;
//         }
//     }

//   return Arr.length === 0 ? 1 : 0;
   
// }