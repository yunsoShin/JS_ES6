function solution(n, lost, reserve) {
    var answer = 0;
    const arr = []
    for(let i =1; i<=n; i++){
        arr.push(i)
    }
    for(let i =0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i]===reserve[j]-1){
                answer++
                lost.splice(i,1,null);
                reserve.splice(j,1,null);
            }
            if(lost[i]===reserve[j]+1){
                answer++
                lost.splice(i,1,null);
                reserve.splice(j,1,null);
            }
        }
    }
    
    

    return arr.length - lost.length + answer;
}