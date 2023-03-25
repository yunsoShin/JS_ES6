function countFrequencies(arr) {
    const frequencyHash = {};
  
    // 배열 요소의 빈도수를 계산
    for (const element of arr) {
      if (frequencyHash[element]) {
        frequencyHash[element]++;
      } else {
        frequencyHash[element] = 1;
      }
    }
  
    return frequencyHash;
  }
  
  const numbers = [1, 2, 3, 2, 1, 3, 4, 1, 2, 3, 5];
  const frequencies = countFrequencies(numbers);
  console.log(frequencies);
  