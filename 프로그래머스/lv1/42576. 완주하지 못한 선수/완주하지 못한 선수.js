function solution(participant, completion) {
  //참여자 명단에는 있지만, 완주자 명단에 없으면 완주하지 못한 것. 
  //동명이인의 참여자, 참여자 명단의 인원과 완주자 명단의 인원이 같은가.
  // 예제 #3 "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

  //참가자 명단을 Map 객체에 저장
  const participantMap = new Map();

  for (let p of participant) {
    // Map 객체에 참가자 이름을 key로, 등장 횟수를 values로 저장
    // 이미 Map 객체에 이름이 존재할 경우, value++

    participantMap.set(p, participantMap.get(p) + 1 || 1);
  }

  // 완주한 선수 명단을 순회하며 Map() 객체에서 해당 선수를 제거
  for (let c of completion) {
    if (participantMap.has(c)) {
      // Map() 객체에서 해당 선수의 등장 횟수를 1 감소시킵니다.
      participantMap.set(c, participantMap.get(c) - 1);
      // 만약 해당 선수의 등장 횟수가 0이라면, Map() 객체에서 해당 선수를 제거합니다.
      if (participantMap.get(c) === 0) {
        participantMap.delete(c);
      }
    }
  }

  // Map() 객체에서 제거되지 않은 선수가 완주하지 못한 선수입니다.
  const answer = participantMap.keys().next().value;
  return answer;
}