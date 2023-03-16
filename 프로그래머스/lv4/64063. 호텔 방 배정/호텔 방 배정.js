function solution(k, room_number) {
  const answer = []; // 이 배열은 각 고객에게 할당된 방 번호를 저장
  const assignedRooms = new Map(); // 이 맵은 현재 할당된 방을 저장

  // 이 재귀 함수는 고객에게 방을 할당하고 할당된 방 번호를 반환
  function assignRoom(customerNumber) {
    if (!assignedRooms.has(customerNumber)) { // 원하는 방이 비어 있는 경우
      assignedRooms.set(customerNumber, customerNumber); // 방을 고객에게 할당
      return customerNumber; // 할당된 방 번호를 반환
    }

    // 원하는 방이 이미 할당되어 있는 경우, 재귀적으로 다음 사용 가능한 방을 검색
    const nextCustomerNumber = assignedRooms.get(customerNumber) + 1; // 원하는 방 번호를 증가
    const assignedRoom = assignRoom(nextCustomerNumber); // 재귀적으로 다음 사용 가능한 방을 검색
    assignedRooms.set(customerNumber, assignedRoom); // 방을 고객에게 할당
    return assignedRoom; // 할당된 방 번호를 반환
  }

  // 각 고객에게 등장하는 순서대로 방을 할당
  for (let i = 0; i < room_number.length; i++) {
    const customerNumber = room_number[i]; // 현재 고객이 원하는 방 번호를 가져옴
    const assignedRoom = assignRoom(customerNumber); // 고객에게 방을 할당
    answer.push(assignedRoom); // 할당된 방 번호를 답 배열에 추가
  }

  return answer; // 할당된 방의 배열을 반환
}