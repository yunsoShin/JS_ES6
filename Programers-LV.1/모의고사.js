function solution(answers) {
    const num1 = [1,2,3,4,5];
    const num2 = [2,1,2,3,2,4,2,5];
    const num3 = [3,3,1,1,2,2,4,4,5,5];
  
    let counts = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === num1[i % num1.length]) counts[0]++;
      if (answers[i] === num2[i % num2.length]) counts[1]++;
      if (answers[i] === num3[i % num3.length]) counts[2]++;
    }
  
    let maxCount = Math.max(...counts);
    let result = [];
    switch (true) {
      case (counts[0] === maxCount):
        result.push(1);
        break;
      case (counts[1] === maxCount):
        result.push(2);
        break;
      case (counts[2] === maxCount):
        result.push(3);
        break;
    }
  
    for (let i = 0; i < 3; i++) {
      if (counts[i] === maxCount && !result.includes(i + 1)) {
        result.push(i + 1);
      }
    }
  
    return result;
  }