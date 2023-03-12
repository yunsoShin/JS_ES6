function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>a-b);
    for(let i =0; i<people.length; i++){
        const result = people[i]+people[i+1]
        console.log(result)
        if(result>limit){
            console.log(i)
        }
    }
    return answer;
}