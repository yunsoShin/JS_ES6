function solution(n) {
    let answer = 0;
    
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
  
        return fibonacci(n-1) + fibonacci(n-2);
    }

    
    answer = fibonacci(n)
    
    
    
    
    return answer ;
}

function solution(n) {
    let answer = 0;
    
    function fibonacci(n, memo = {}) {
        if (n in memo) {
            return memo[n];
        }
        if (n <= 1) {
            return n;
        }
  
        memo[n] = (fibonacci(n-1, memo) + fibonacci(n-2, memo))%1234567;
        return memo[n];
    }

    
    answer = fibonacci(n)
    
    
    
    
    return answer ;
}

function solution(n) {
    let answer = 0;
    
   function fibonacci(n) {
        const mod = 1234567;
        let a = 0;
        let b = 1;
        let c;
  
        for (let i = 2; i <= n; i++) {
            c = (a + b) % mod;
            a = b;
            b = c;
        }
  
        return b % mod;
    }

    answer = fibonacci(n);
    return answer ;
}

function fibonacci(n) {
    // n 이 0 이거나 1 이면 각각 0, 1을 반환합니다.
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    
    // 초기 행렬 A와 거듭제곱할 행렬 B를 생성합니다.
    const A = [[1, 1], [1, 0]];
    let B = A;
  
    // B를 n-1 번 곱해주면 결과값이 나옵니다.
    for (let i = 2; i <= n; i++) {
      B = multiplyMatrix(B, A);
    }
  
    return B[0][1];
  }
  
  // 두 행렬을 곱하는 함수입니다.
  function multiplyMatrix(A, B) {
    const result = [];
    
    for (let i = 0; i < A.length; i++) {
      result[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < B.length; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
    
    return result;
  }