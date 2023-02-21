function solution(numbers) {
    
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
            console.log(answer)
        }
        
    }
    const arr2 = answer.map((a)=>{
        if(isNaN(a)) {
            return "공백"    
        }
        else return Number(a)
        })
    
    
    const arr1 = arr2.filter(e=>e>0);
    
    const set = new Set(arr1);
    
    const uniqueArr=[...set];
    
    return uniqueArr.sort((a,b)=>a-b)
}



function solution(numbers) {
    
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
            
        }
        
    }
    const set = new Set(answer);
    
    const uniqueArr=[...set];
 return uniqueArr.sort((a,b)=>a-b)
}