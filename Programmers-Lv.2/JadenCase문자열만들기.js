function solution(s) {
    const answer = [];
    s=s.toLowerCase();
    const arr = Array.from(s);
    arr[0]=arr[0].toUpperCase();
    for(let i = 0 ; i<arr.length-1; i++){
        
        if(arr[i]===" "){
                
            arr[i+1]=arr[i+1].toUpperCase();
        }
        
    }
    
    return arr.join('')
}


function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}