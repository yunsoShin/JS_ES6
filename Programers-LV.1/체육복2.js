function solution(n, lost, reserve) {
    var answer = 0;
    const arr = []
    for(let i =1; i<=n; i++){
        arr.push(i)
    }
    
    
    const newLost = [...lost.filter(a=>!reserve.includes(a))].sort((a,b)=>a-b)
    const newReserve = [...reserve.filter(a=>!lost.includes(a))].sort((a,b)=>a-b)
    
    
    for(let i =0; i<newLost.length; i++){
        for(let j=0; j<newReserve.length; j++){
            if(newLost[i]===newReserve[j]-1){
                newLost.splice(i,1,null);
                newReserve.splice(j,1,null);
    
            }
            else if(newLost[i]===newReserve[j]+1){
                newLost.splice(i,1,null);
                newReserve.splice(j,1,null);
    
            }
        }
    }
    
    console.log(newLost)
    const numlost = newLost.filter((a)=>!isNaN(parseInt(a)))
    console.log(numlost)
    return arr.length - numlost.length;
}