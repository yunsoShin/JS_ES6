function solution(N, stages) {
    var answer = [];
    const result = []
    for(let i=1; i<=N; i++){
        let count = 0;
        for(let j=0; j<stages.length; j++){
            stages[j]===i?count++:count
        }
        
        answer.push(count)
        
    }
    
    
    
    for(let i=0; i<answer.length; i++){
        if(i===0){
            result[i]=answer[i]/stages.length
        }
        if(i!=0){
            result[i]=answer[i]/(stages.length-answer.reduce((a,b,index)=>{
                if(index<i){
                    return a+b;
                }
                return a;
            },0))
            
        }
    }
    const indexArr = result.map((val, idx) => idx)
                   .sort((a, b) => result[b] - result[a] || a - b);
    
    return indexArr.map(a=>a+1);
}