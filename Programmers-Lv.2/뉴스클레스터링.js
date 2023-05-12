function solution(str1, str2) {
  var answer = 0;
  let result = 0;
  const arr1 = [];
  const arr2 = [];
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  const regex = /^[a-z]+$/;
  for(let i=0; str1.length>i; i++){
      if(regex.test(str1[i]) && regex.test(str1[i+1]) ){
          if(str1[i+1]){
              arr1.push(`${str1[i]}${str1[i+1]}`)    
          }   
      }
  }
  for(let i=0; str2.length>i; i++){
      if(regex.test(str2[i]) && regex.test(str2[i+1]) ){
          if(str2[i+1]){
              arr2.push(`${str2[i]}${str2[i+1]}`)    
          }   
      }
  }
  arr1.sort();
  arr2.sort();
  const plus=arr1.length+arr2.length;
  if(arr1.length===0 || arr2.length===0){
      if(arr1.length===0&&arr2.length===0){
          result=65536
      }
      else{
          result=0
      }
  }

  const newArr1 = [...arr1]
  let count = 0;
  for(let i =0; arr1.length>i; i++){
      if(arr2.includes(arr1[i])){
          const arr2Index=arr2.indexOf(arr1[i]);
          arr1.splice(i,1)
          arr2.splice(arr2Index,1)
          count++
          i--
      } 
  } 


  if(count){
      result=Math.floor((count/(plus-count))*65536)
  }


  return result;
}
