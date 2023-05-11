function solution(progresses, speeds) {
  var answer = [];
  
  for(let i=0; progresses.length>i; i++){
      let count=1;
      let pnum = progresses[i]+speeds[i]
      while(pnum<100){
          pnum+=speeds[i]
          count++
          
      }
      
      answer.push(count)
  }
  const result =[]
  
  const newAnswer=[...answer]
  let first=answer.shift();
  let count = 1;
  for(let i=0; newAnswer.length>i; i++){
      
      if(first>=newAnswer[i+1]){
          count++
          answer.shift()
      }
      else{
          first=answer.shift()
          result.push(count)
          count=1;
      }
      
      }
  
  
  
  return result;
}