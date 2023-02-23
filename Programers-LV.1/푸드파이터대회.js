function solution(food) {
    
    var answer = [];
    const result = []
    food.shift()
    for(let i=0; i<food.length; i++){
        answer[i] = Math.floor(food[i]/2)
        for(let j = 0 ; j<answer[i]; j++){
            result.push(i+1)
        }
    }
    const reverseArr = [...result].reverse().join('')
    
    result.push(0);
    
    return result.join('')+reverseArr;
    
}