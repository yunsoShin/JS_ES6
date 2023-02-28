function getDivisorCount(num) {
    // 에라토스테네스의 체 알고리즘으로 소수 배열을 구합니다.
    const primes = [];
    const isPrime = new Array(num + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i <= num; i++) {
      if (isPrime[i]) {
        primes.push(i);
        for (let j = i * i; j <= num; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // 소인수분해하여 약수 개수를 구합니다.
    let divisorCount = 1;
    for (const prime of primes) {
      if (num === 1) {
        break;
      }
  
      let count = 0;
      while (num % prime === 0) {
        num /= prime;
        count++;
      }
  
      divisorCount *= count + 1;
    }
  
    return divisorCount;
  }
  
  
  
  
  
  
  
  
  function solution(number, limit, power) {
      getDivisorCount(number)
      var answer = 0;
      return answer;
  }