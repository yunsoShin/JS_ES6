function solution(n, left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
      const row = Math.floor(i / n);
      const col = i % n;
      const val = Math.max(row, col) + 1;
      result.push(val);
    }
    return result;
  }
  
  console.log(solution(4, 7, 14)); // [4, 3, 3, 3, 4, 4, 4, 4]
  