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