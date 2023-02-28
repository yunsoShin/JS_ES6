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
