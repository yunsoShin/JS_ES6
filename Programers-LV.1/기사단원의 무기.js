function getDivisorCount(n) {
    let divisorCount = 1;
    let currentDivisor = 2;
    
    while (currentDivisor * currentDivisor <= n) {
      let count = 0;
      while (n % currentDivisor === 0) {
        count++;
        n /= currentDivisor;
      }
      divisorCount *= (count + 1);
      currentDivisor++;
    }
  
    if (n > 1) {
      divisorCount *= 2;
    }
  
    return divisorCount;
  }
  
  
  
  
  
  
  function solution(number, limit, power) {
      const num = []
      for(let i = 1 ; i<=number; i++){
          num[i-1] = getDivisorCount(i)
          if(num[i-1]>limit){
              num[i-1]=power
          }
           
          
      }
      console.log(num)
      var answer = 0;
      return num.reduce((a,b)=>a+b);
  }