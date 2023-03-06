function solution(A,B){
    var answer = 0;
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>b-a);
    const arr = [];
    for(let i =0; i<A.length; i++){
        arr[i]=A[i]*B[i]
    }
    
    answer = arr.reduce((a,b)=>a+b);
    return answer;
}