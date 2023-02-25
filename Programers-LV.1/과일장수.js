function solution(k, m, score) {
    var answer = 0;
    const result = [];
    const arr = score.sort((a,b)=>b-a);
    
    for (let i = 0; i < arr.length; i += m) {
        const sliced = arr.slice(i, i + m);
        result.push(sliced);
}
    
    if(result.length>1){
        if(result[result.length-1].length!=m){
        result.pop()
        }
        const min = result.map((subArr)=>Math.min(...subArr))
        answer = min.map(a=>a*m).reduce((a,b)=>a+b)
    }
    else answer=0
    
    return answer;
}