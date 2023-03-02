function solution(s) {
    var answer = 0;
    const arr = Array.from(s)
    let first = arr[0]
    let SameCount = 0;
    let differentCount = 0;
    
    
    
    for(let i = 0 ; i<arr.length; i++){
        
        if(arr[i]===first){
            SameCount++
            
        }
        else if(arr[i]!=first){
            differentCount++
        }
        if(SameCount===differentCount){
            arr.splice(0,i+1);
            answer++
            first = arr[0];
            i=-1;
            SameCount = 0;
            differentCount = 0;
        }
        if(arr.length===SameCount+differentCount){
            if(SameCount>0){
                answer++
            }
            break;
        }
    }
    
    return answer;
}