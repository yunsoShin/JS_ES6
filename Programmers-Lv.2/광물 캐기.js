function solution(picks, minerals) {
    var answer = 99999999;

    let i = picks[0] + picks[1] + picks[2];

    if(minerals.length > i*5){
        minerals.splice(i*5);
    }

    let arr = [];
    let temp = [];
    for(let i=0; i<minerals.length; i++){
        temp.push(minerals[i]);
        if(temp.length == 5){
            arr.push(temp);
            temp = [];
        }
    }
    if(temp.length != 0){
        arr.push(temp);
    }

    function find(arr,picks,i,pirodo){
        if(i == arr.length){
            if(pirodo<answer){
                answer = pirodo;
            }
            return;
        }

        if(picks[0] != 0){
            let p2 = [...picks];
            let temp =0;
            p2[0] = p2[0] -1;
            for(let j=0; j<arr[i].length; j++){
               temp += 1;
            }
            find(arr,p2,i+1,pirodo+temp);
        }

        if(picks[1] != 0){
            let p2 = [...picks];
            let temp =0;
            p2[1] = p2[1] -1;
            for(let j=0; j<arr[i].length; j++){
              if(arr[i][j] == 'diamond'){
                  temp+=5;
              }else{
                  temp+=1;
              }
            }
            find(arr,p2,i+1,pirodo+temp);
        }

        if(picks[2] != 0){
            let p2 = [...picks];
            let temp =0;
            p2[2] = p2[2] -1;
            for(let j=0; j<arr[i].length; j++){
              if(arr[i][j] == 'diamond'){
                  temp+=25;
              }else if(arr[i][j] == 'iron'){
                  temp+=5;
              }else{
                  temp+=1;
              }
            }
            find(arr,p2,i+1,pirodo+temp);
        }


    }



    find(arr,picks,0,0);


    return answer;
}
