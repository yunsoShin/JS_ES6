function solution(lottos, win_nums) {
    var answer = [];
    
    const answerNum = lottos.filter(a=>win_nums.includes(a)).length;
    const numZero = lottos.filter(a=>a===0).length
    answer = [7-(answerNum+numZero),7-answerNum]
    if(answer[1]==7){
        answer[1]=6
    }
    if(answer[0]==7){
        answer[0]=6
    }
    
    return answer
}