//[9, -1, 0]	0
//[1, 2, 7, 10, 11]	7
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000

function solution(array) {
    
  
    let newArray = [];
    let arrayCnt = 0;
    
    while ( arrayCnt < array.length){
        let minNumber =1000;
        let cnt = 0;
         while(cnt<array.length){
            if(minNumber > array[cnt]){
            minNumber = array[cnt];
            }
             cnt++;
        }
    
        newArray.push(minNumber);
    
    let cnt2=0;
    while(cnt2 < array.length){
        if(minNumber === array[cnt2]){
            array[cnt2] = 1000;        
            break;
        }
      cnt2 ++;        
    }
        arrayCnt++;
        
    }
    console.log(newArray)
    return newArray[Math.floor(array.length/2)];
}

//1.정렬
//1-1 배열 중 가작 작은 값을 찾는다 
//1-2 찾으면 새 배열에 넣는다 
//1-3 원래 배열의 값은 지운다 
//1-4 원래 배열 길이 만큼 반복했으면 끝낸다. or 1-1로 돌아간다. 
//2. 가운데 값 꺼내기 