function solution(n) {
  var 엔의일의개수 = n.toString(2).split("1").length; // 뉴진수로 변환한 n
  let answer = n;
  while (true) {
    answer++;
    if (엔의일의개수 === answer.toString(2).split("1").length) return answer;
  }
}
//ㄹㅎㄹ
