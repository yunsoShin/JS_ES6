function solution(k, tangerine) {
    const answer = [];
    let result = 0;
    let count =0;
    const uniqueArray = new Set(tangerine);
    for (const value of uniqueArray) {
        answer.push(tangerine.filter(a=>a===value).length)
        console.log(answer)
        
    }
    answer.sort((a,b)=>a-b)
    while(result<k){
        result+=answer.pop();
        count++
    }
    return count;
} 