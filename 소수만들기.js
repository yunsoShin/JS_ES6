function solution(nums) {
  let count = 0;
  function isPrime(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return count;
      }
    }
    //sssgg
    return count++;
  }
  let answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        answer = nums[i] + nums[j] + nums[k];
        isPrime(answer);
      }
    }
  }
  return count; //ㄴㄴㅇㄴ
}
// ㅇㄴㅇ
//호ㄹhh
