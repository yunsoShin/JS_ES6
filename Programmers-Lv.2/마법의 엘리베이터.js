function solution(storey) {
    var answer = 0;
    let storeyStr = storey.toString(10);
    let storeyArr = storeyStr.split('');
    for (let i =0 ; i < storeyStr.length ; i++) {
        storeyArr[i] = Number(storeyArr[i]); 
    }
    for (let i = storeyArr.length-1 ; i >= 1 ; i-- ) {
        if (storeyArr[i] == 5 ) {
            answer = answer + 5;
            if (storeyArr[i-1] >=5) {
                storeyArr[i-1]++;

            }
        }
        else if (storeyArr[i] ==10) {
            storeyArr[i] = 0;
            storeyArr[i-1]++;
            continue;
        }
        else if (storeyArr[i] > 5 ) {
            answer = answer + 10 - storeyArr[i];
            storeyArr[i-1]++;
        }

        else answer = answer +storeyArr[i];

    }
    answer = answer + Math.min(storeyArr[0], 11 - storeyArr[0])
    return answer;


}
