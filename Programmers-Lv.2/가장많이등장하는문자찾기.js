function findMostFrequentWord(text) {
    const wordHash = {};
    let maxCount = 0;
    let mostFrequentWord = '';
  
    const words = text.split(' ');
  
    for (const word of words) {
      wordHash[word] = (wordHash[word] || 0) + 1;
  
      if (wordHash[word] > maxCount) {
        maxCount = wordHash[word];
        mostFrequentWord = word;
      }
    }
  
    return mostFrequentWord;
  }
  
  const inputText = 'the quick brown fox jumps over the lazy dog and the quick brown dog jumps again';
  const frequentWord = findMostFrequentWord(inputText);
  console.log(frequentWord); // 출력: 'the'
    