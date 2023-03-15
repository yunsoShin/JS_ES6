function solution(s) {
    var answer = -1;
    
    const stack = []
    if(s[0]==="]"||
                s[0]==="}"||
                s[0]===")"||
                s.length%2!=0||
                s[s.length-1]==="{"||
                s[s.length-1]==="{"||
                s[s.length-1]==="[")
            
        {
            answer;
                
        }
     else if(s[0]==="{"||s[0]==="["||s[0]==="("){
            for(let i=0; i<s.length; i++){
                if(s[i]==="{"&&s[i+1]==="}"){
                    
                }
                    
                stack.push(s[i])
                
            }
            
        }
    
    
   
    return answer;
}