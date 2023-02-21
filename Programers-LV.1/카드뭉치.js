function solution(cards1, cards2, goal) {
    let goal1 = goal.filter((e) => !cards1.includes(e));
    let goal2 = goal.filter((e) => !cards2.includes(e));
  
    cards1 = cards1.slice(0, goal2.length);
    cards2 = cards2.slice(0, goal1.length);
  
    if (cards1.join('') === goal2.join('') && cards2.join('') === goal1.join('')) {
      return 'Yes';
    } else {
      return 'No';
    }
  }



  function solution(cards1, cards2, goal) {
    let result =""
    var answer1 = [];
    let answer2 = [];
    answer1 = goal.filter((e)=>!cards1.includes(e))
    answer2 = goal.filter((e)=>!cards2.includes(e))
    

   
     while(answer2.length!=cards1.length){
        cards1.pop()
    }
    
    while(answer1.length!=cards2.length){
        cards2.pop()
    }
    
    console.log(cards1.join(''),answer2.join(''))
    if(cards1.join('')===answer2.join('')){
        if(cards2.join('')===answer1.join('')){
            result="Yes";
        }
        else result="No";
    }
    else result="No";
    return result

}

