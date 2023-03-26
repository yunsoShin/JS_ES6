function shuffleStrings(str1, str2) {
    const hash1 = {};
    const hash2 = {};
    let result = '';
  
    for (const char of str1) {
      hash1[char] = (hash1[char] || 0) + 1;
    }
  
    for (const char of str2) {
      hash2[char] = (hash2[char] || 0) + 1;
    }
  
    for (const char in hash1) {
      const count = Math.min(hash1[char], hash2[char] || 0);
      result += char.repeat(count);
    }
  
    return result;
  }
  
  const string1 = 'abcde';
  const string2 = 'dceafb';
  const shuffledString = shuffleStrings(string1, string2);
  console.log(shuffledString); // 출력: 'abcde'
  