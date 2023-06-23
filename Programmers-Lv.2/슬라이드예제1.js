function solution(n) {
  let start = 1,
    end = 1;
  let sum = 1;
  let count = 0;

  while (start <= Math.floor(n / 2)) {
    if (sum < n) {
      end += 1;
      sum += end;
    } else if (sum > n) {
      sum -= start;
      start += 1;
    } else {
      count += 1;
      sum -= start;
      start += 1;
    }
  }

  return count + 1; // 자기 자신을 더하기
}
