//*요구사항
//같은 장르끼리 묶는다
//묶인 노래들을 재생 순으로 정렬 
//2개씩 묶는다

function solution(genres, plays) {
  // 장르별 총 재생 수와 2개의 높은 재생 수를 가진 노래를 저장하는 Map() 객체 생성
  const genreMap = new Map();

  // genres와 plays 배열을 순회하며 Map() 객체에 데이터를 추가
  genres.map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      // Map() 객체에서 해당 장르의 정보를 가져옴, 없는 경우 초기화
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      // 해당 장르의 총 재생 수와 노래 정보를 갱신
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play) // 노래를 재생 수가 높은 순으로 정렬
          .slice(0, 2) // 재생 수가 높은 2개의 노래만 선택
      })
    })

  // Map() 객체를 배열로 변환하여 장르별 총 재생 수로 정렬한 후 노래 인덱스를 추출
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index)
}