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

function solution(s) {
    var answer = 0;
    const str1 = /\(\)/g;
    const str2 = /\{\}/g;
    const str3 = /\[\]/g;
    
    let prev;
    
    if(s.length%2===0){
        for(let i =0 ; i<s.length; i++){
            let 삭제한문자열 = s;
            while(true){
                prev=삭제한문자열;
                삭제한문자열 = 삭제한문자열.replaceAll(str1,"")
                .replaceAll(str2,"")
                .replaceAll(str3,"");
                if(prev===삭제한문자열){
                    break;
                }
            }
    
            if(!삭제한문자열){
                answer++
            }
            s=Array.from(s);
            s.push(s[0]);
            s.shift();
            s=s.join('')
        }   
    }
    return answer;
}