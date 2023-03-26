function findDuplicateCharacters(str) {
    const charHash = {};
    const duplicates = new Set();
  
    for (const char of str) {
      if (charHash[char]) {
        duplicates.add(char);
      } else {
        charHash[char] = 1;
      }
    }
  
    return Array.from(duplicates);
  }
  
  const inputStr = 'hello world';
  const duplicateChars = findDuplicateCharacters(inputStr);
  console.log(duplicateChars); // 출력: ['l', 'o']
  