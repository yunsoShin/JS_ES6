function solution(s) {
    
    let 반복회수 = 1;
    let 영을제거한개수 = 0;
    let 영을제거한길이  = 0;
    const answer = []
    영을제거한길이 = s.replace(/[^1]/g,"").length;
    영을제거한개수 = s.length-영을제거한길이;
    
    while(영을제거한길이.toString(2)!='1'){
        
        s = 영을제거한길이.toString(2)
        
        영을제거한길이 = s.replace(/[^1]/g,"").length;
        영을제거한개수 += s.length-영을제거한길이;
        반복회수++
        
    }
    
    answer.push(반복회수)
    answer.push(영을제거한개수)
    return answer ;
}