function solution(arr) {
    function findGCD(num1, num2) {
      while (num2 !== 0) {
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
      }
      return num1;
    }
  
    arr = arr.sort((a, b) => a - b);
    const multipliedNum = arr.reduce((a, b) => a * b, 1);
  
    let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const gcd = findGCD(lcm, arr[i]);
      lcm = (lcm * arr[i]) / gcd;
    }
  
    return lcm;
  }
  