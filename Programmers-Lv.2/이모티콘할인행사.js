function solution(users, emoticons) {
  const discounted = [];
  let joinCount = 0;
  let purchased = 0;
  const discountRates = [10,20,30,40];

  function getAllCases(arr, length) {
    const cases = [];

    function recursiveFunc(currentCase) {
      if (currentCase.length === length) {
        cases.push(currentCase);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        recursiveFunc([...currentCase, arr[i]]);
      }
    }

    recursiveFunc([]);

    return cases;
  }

  const arr2 = getAllCases(discountRates, emoticons.length);
  //console.log(arr2)
  const arr3 = arr2.map((e) => {
    return e.map((e1,i1)=>[e1,emoticons[i1] * 0.01 * (100 - e1)])
  })

    for(let i=0;i<arr3.length;i++){ // [[[40,7000],[20,9000]],[[40,7000],[20,9000]],[[40,7000],[20,9000]][[40,7000],[20,9000]],[[40,7000],[20,9000]]]

      let caseJoinCount = 0;
      let casePurchased = 0;
      //console.log('this time, ',arr3[i])
      for(let j=0;j<users.length;j++){ // [[40,7000],[20,9000]]
        let thisTimePruchased = 0;
        for(let h=0;h<arr3[0].length;h++){ // [[40, 10000], [25, 10000]]
          //console.log('discount',arr3[i][h][0])
          //console.log('i',i)
          //console.log('j',j)
          //console.log('h',h)
         if(users[j][0] <= arr3[i][h][0]){
           thisTimePruchased += arr3[i][h][1]
          }
        }
        //console.log('이번 아이템들,', arr3[i])
        //console.log('이 유저가 이번에 얼마치를 구매했는지,', thisTimePruchased)
        //console.log('이 유저의 가격 한계치,',users[j][1])
        if(thisTimePruchased >= users[j][1]){
          caseJoinCount++
          //console.log('이 유저는 이모티콘 플러스를 구매!')
          //console.log('현재까지의 플러스 구매수는 ',caseJoinCount)
          //console.log('현재까지의 구매액은 ',casePurchased)
        } else {
          casePurchased += thisTimePruchased
          //console.log(`이 유저는 이모티콘을 ${thisTimePruchased} 어치  삼`)
          //console.log('현재까지의 플러스 구매수는 ',caseJoinCount)
          //console.log('현재까지의 구매액은 ',casePurchased)
        }
      }
      //console.log('caseJoinCount',caseJoinCount)
      //console.log('casePurchased',casePurchased)
      //console.log('attention!!!!!!!!!!!')
      if(caseJoinCount > joinCount || (caseJoinCount === joinCount && casePurchased > purchased)) {
        //console.log('entered!!!!!!!!!!!')
        joinCount = caseJoinCount
        purchased = casePurchased
      }
    }

    //console.log('join',joinCount)
    //console.log('purchased',purchased)

  return [joinCount,purchased]
}
