function solution(number) {
    let answer = 0;
    
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            let num=0;
            num=number[i]+number[j];
            const 더한값이외요소 = [...number];
            더한값이외요소.splice(i,1);
            더한값이외요소.splice(j-1,1);
            console.log(더한값이외요소);

    return answer;
  }
}

  
  function memoization(더한값, 더한값이외요소) {
    let count = 0;
    for (let i = 0; i < 더한값이외요소.length; i++) {
      if (더한값이외요소[i] === 더한값) {
        count++;
      }
    }
    return count;
  }
}
  
  solution([-2, 3, 0, 2, -5]);