function solution(cacheSize, cities) {
    let answer = 0;
    const LRU = [];
    cities=cities.map(a=>a.toLowerCase())
    for(let i=0; i<cities.length; i++){
        if(LRU.includes(cities[i])){
            LRU.splice(LRU.indexOf(cities[i]),1);
            answer++
        }
        LRU.push(cities[i]);
        if(LRU.length>cacheSize){
            LRU.shift();    
        }
        
    }
    return cities.length*5-5*answer+answer;
}