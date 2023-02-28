function findDuplicateCharacters(str) {
    const result = new Set();
    const set = new Set();
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (set.has(char)) {
        result.add(char);
      } else {
        set.add(char);
      }
    }
    return Array.from(result);
  }

  function findDuplicates(nums) {
    const duplicates = [];
    const set = new Set();
    for (let num of nums) {
      if (set.has(num)) {
        duplicates.push(num);
      } else {
        set.add(num);
      }
    }
    return duplicates;
  }
  

  console.log(findDuplicateCharacters("1231414256")); 
  console.log(findDuplicates('1231415678899')); 

  function solution(X, Y) {
    function countDigits(str) {
  		const counts = new Array(10).fill(0); // 0에서 9까지 숫자마다의 개수를 저장할 배열을 만듭니다.
  		for (let i = 0; i < str.length; i++) {
    		const digit = parseInt(str[i]);
    
      		counts[digit]++;
    
  		}
  		return counts;
	}

    let answer=[]
    
    const countX = countDigits(X);
    const countY = countDigits(Y);
    const big = Math.max(X.length,Y.length)
    console.log(big)
    for(let i=9; i>=0; i--){ 
        if(countX[i]>0&&countY[i]>0){
            
            answer.push
            
        }
        console.log(i,countX[i],countY[i])
    }
    console.log(countX,countY)
    return answer
}
