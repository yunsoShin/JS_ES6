function solution(new_id) {
    const one = new_id.toLowerCase();
    const two = one.replace(/[^\w-_.]/g, '');
    const arr = Array.from(two);
    
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.' && arr[i] === arr[i + 1]) {
    arr.splice(i, 1);
    i--;
    }
    }
    if (arr[0] === '.') arr.shift();
    if (arr[arr.length - 1] === '.') arr.pop();
    if (!arr.length) arr.push('a');
    
    const fiveArr = arr.slice(0, 15);
    if (fiveArr[fiveArr.length - 1] === '.') fiveArr.pop();
    while (fiveArr.length <= 2) fiveArr.push(fiveArr[fiveArr.length - 1]);
    
    return fiveArr.join('');
    }
    
    
    
