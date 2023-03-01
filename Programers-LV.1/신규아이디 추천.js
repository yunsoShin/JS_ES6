function solution(new_id) {
    var answer = '';
    const one = new_id.toLowerCase();
    console.log(one)
    const two = one.replace(/[^\w-._]/g,'')
    console.log(two)
    const twoArr = Array.from(two)
    for(let i= 0; i<twoArr.length; i++){
        if(twoArr[i]==='.'&&twoArr[i]===twoArr[i+1]){
            twoArr.splice(i,1)
            i--
            
        }
        
            
    }
    return twoArr.join('');
}