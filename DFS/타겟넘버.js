function solution(numbers, target) {
  let count = 0;

  // DFS
  const dfs = (index, currentSum) => {
    if (index === numbers.length) {
      //0 === 5 f  ,첫번째 재귀 index = 1 != 5이므로 다시 재귀호출
      //두번째 재귀호출 (2,2) , (2,-2) dfs(5,5)일 경우에 if문 true
      if (currentSum === target) {
        count++;
      }
      return;
    }

    // 덧셈과 뺄셈 연산 수행
    dfs(index + 1, currentSum + numbers[index]); // 1 , 0+n[0](1) 재귀 호출이므로 dfs(1,1)호출 /
    // 2 , 1+n[2] =(2) 두 번째 재귀호출 dfs(2,2) ...dfs(3,3) ...... dfs(5,5)
    dfs(index + 1, currentSum - numbers[index]); // 1 , 0-n[0] = -1 재귀 호출이므로 dfs(1,-1)호출 /
    // 2 , -1-n[2]=-2 두 번째 재귀호출 dfs(2,-2) ...dfs(3,-3) ..... dfs(5,-5)
  };

  dfs(0, 0); // DFS 호출

  return count;
}
