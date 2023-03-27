function countFrequencies(arr) {
    const frequencyMap = new Map();
  
    for (const element of arr) {
      const count = frequencyMap.get(element) || 0;
      frequencyMap.set(element, count + 1);
    }
  
    return frequencyMap;
  }
  
  const numbers = [1, 2, 3, 2, 1, 3, 4, 1, 2, 3, 5];
  const frequencies = countFrequencies(numbers);
  console.log([...frequencies]); // 출력: [ [1, 3], [2, 3], [3, 3], [4, 1], [5, 1] ]
   