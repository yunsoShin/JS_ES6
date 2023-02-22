function solution(a, b, n) {
    let answer = 0;
    let 몫 = parseInt(n/a);
    let 나머지 = n%a;
    let 남은병 = 몫*b+나머지;

    answer+=몫*b

while(남은병>=a){
    몫 = parseInt(남은병/a);
    나머지=남은병%a
    남은병=몫*b+나머지
    answer+=몫*b
}
return answer;
}