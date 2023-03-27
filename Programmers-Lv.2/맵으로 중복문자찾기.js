function findDuplicateCharacters(str) {
    const charMap = new Map();
    const duplicates = new Set();
  
    for (const char of str) {
      if (charMap.has(char)) {
        duplicates.add(char);
      } else {
        charMap.set(char, 1);
      }
    }
  
    return Array.from(duplicates);
  }
  
  const inputStr = 'hello world';
  const duplicateChars = findDuplicateCharacters(inputStr);
  console.log(duplicateChars); // 출력: ['l', 'o']
  