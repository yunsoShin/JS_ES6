function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>a-b);
    
    
    
    while(people.length>0){
        const result = people[0]+people[people.length-1]
        
        if(result>limit){
            people.pop()
            answer++
            
            
        }
        else if(result<=limit){
            people.pop()
            people.shift()
            answer++   
        }
    }
    
    
    
    return answer;
}