function solution(strings, n) {
    var answer = [];
    const arr1 = strings.map((a)=>a.split(''))
    arr1.sort();
    answer=arr1.sort((a,b)=>{
        if(a[n]<b[n]) return -1;
        if(a[n]>b[n]) return 1;
    });
    return answer.map(a=>a.join(''));

}