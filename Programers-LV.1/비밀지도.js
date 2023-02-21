/*N개의 요소를 가지고있는 배열의 요소를

2진수로바꾼다 -> 2진수로 바꾼수의 자리수가 1이 있다면 #을 출력해준다 -> 출력된 #들을 배열로 만들어 출력해준다

가  알고리즘이 될것 같습니다 */
function solution(n, arr1, arr2) {
    var answer = []; 
    const result =[];
    const arr=[];
    const final=[];
    for(let i =0; i<n; i++){
        const Binary1=arr1[i].toString(2);
        const Binary2=arr2[i].toString(2);
        answer[i]=(parseInt(Binary1, 2) | parseInt(Binary2, 2)).toString(2);
        console.log(answer[i])
        
        result[i]=answer[i].split('');
        while(result[i].length!=n){
            result[i].unshift(0);
        }
        
            
        arr[i]=result[i].map((a)=>{
            if(a==1){
                return '#'
            }
            return ' ';
        });
        final[i]=arr[i].join('')
    }
    
    return final}

/*여기서 중요한 점은 answer 요소들을 변경해 주는것인데 요소하나하나에 대해 정규표현식으로 0은공백 1은 #으로  변경해주는 방법이

일단 첫번째로 생각이 났고 

그게 아니면 요소하나를 배열로 만들어 map으로 순환하며 filter로 1만 검색한 후, #으로 치환해주는 방법이 생각났습니다 
*/


function solution(n, arr1, arr2) {
    const final = [];
  
    for (let i = 0; i < n; i++) {
      const binary1 = arr1[i].toString(2).padStart(n, '0');
      const binary2 = arr2[i].toString(2).padStart(n, '0');
      let line = '';
  
      for (let j = 0; j < n; j++) {
        if (binary1[j] === '1' || binary2[j] === '1') {
          line += '#';
        } else {
          line += ' ';
        }
      }
  
      final.push(line);
    }
  
    return final;
  }