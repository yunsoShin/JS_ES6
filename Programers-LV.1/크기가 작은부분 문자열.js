function solution(t, p) {
    var answer = [];
    let result =[];
    let cut = 0;
    for(let i=0; i<t.length; i++){
        const arr=t.split('')
        answer.push(arr[i])
        if(answer.length>p.length){
            answer.shift()
        }
        if(answer.length==p.length){
            result=answer.join('');
            if(result<=p){
                cut++
            }
        }
    }
    return cut
}