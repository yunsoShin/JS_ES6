function solution(k, score) {
    
    var answer = [];
    const result = [];
    const arr = [];
    for(let i=0; i<score.length; i++){
        answer[i]=score[i]
        answer=answer.sort((a,b)=>b-a)
        if(answer.length<=k){
            arr.push(answer[answer.length-1])
        }
        else if (answer.length>k){
            arr.push(answer[k-1])
        }
        }
    return arr;
}