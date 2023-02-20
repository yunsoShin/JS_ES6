function solution(sizes) {
    var answer = 0;
    let max=[];
    let min=[];
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((a,b)=>a-b);
        max[i]=sizes[i][1]
        min[i]=sizes[i][0]
        
    }
    
    
    return Math.max(...max)*Math.max(...min)
}