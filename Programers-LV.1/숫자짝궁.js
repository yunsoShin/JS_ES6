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
  		const counts = new Array(10).fill(0); 
  		for (let i = 0; i < str.length; i++) {
    		const digit = parseInt(str[i]);
    
      		counts[digit]++;
    
  		}
  		return counts;
	}

    let answer=[]
    
    const countX = countDigits(X);
    const countY = countDigits(Y);
    for(let i=9; i>=0; i--){ 
        if(countX[i]>0&&countY[i]>0){
            if(countX[i]>=countY[i]){
                for(let j = 0; j<countY[i]; j++){
                    answer.push(i);
                }    
            }
            else if(countX[i]<countY[i]){
                for(let j=0; j<countX[i]; j++){
                    answer.push(i)
                }
            }
            
        }
    }
    if(answer.length===0){
        return "-1"
    }
    else if(answer[0]===0){
        return "0"
    }
    else return answer.join('')
    
    
    return answer
}