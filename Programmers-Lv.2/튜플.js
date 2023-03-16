function solution(s) {
    var answer = [];
    s= s.replaceAll("{","[")
        .replaceAll("}","]")
    console.log(typeof(s))
    const arr = eval(s);
    console.log(typeof(arr))
    
    
    return arr;
}