/*
ABCheck
문제
문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
입력
인자 1 : str
string 타입의 알파벳 문자열
출력
boolean 타입을 리턴해야 합니다.
주의 사항
대소문자를 구분하지 않습니다.
공백도 한 글자로 취급합니다.
'a'와 'b'는 중복해서 등장할 수 있습니다.
입출력 예시
1
2
let output = ABCheck('lane Borrowed');
console.log(output); // --> true

*/

function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === 'a' && str[i - 4] === 'b') ||
      (str[i] === 'b' && str[i - 4] === 'a')
    ) {
      return true;
    }
  }

  return false;
}
