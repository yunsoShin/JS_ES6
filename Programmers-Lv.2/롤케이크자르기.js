function solution(topping) {

    const length = topping.length;
    if (length === 1) return 0;

    const leftDict = {}; // 형 토핑의 개수 저장
    const rightDict = {}; // 동생 토핑의 개수 저장
    let leftTopping = 0; // 형의 토핑 종류 저장
    let rightTopping = 0; // 동생의 토핑 종류 저장
    let answer = 0;

    if (length === 1) return 0;

    // 미리 형한테 토핑을 전부다 주기
    for (let i = 0; i < length; i++) {
        if (leftDict[topping[i]] === undefined) {
            leftDict[topping[i]] = 1;
            leftTopping += 1;
        } else leftDict[topping[i]] += 1;
    }
    // 뒤에서부터 동생에게 토핑을 하나씩 주기
    for (let i = length - 1; i >= 0; i--) {
        if (rightDict[topping[i]] === undefined) {
            rightDict[topping[i]] = 1;
            leftDict[topping[i]] -= 1;
            rightTopping += 1;
            if (leftDict[topping[i]] === 0) {
                // delete leftDict[topping[i]];
                leftTopping -= 1;
            }
        } else {
            rightDict[topping[i]] += 1;
            leftDict[topping[i]] -= 1;
            if (leftDict[topping[i]] === 0) {
                // delete leftDict[topping[i]];
                leftTopping -= 1;
            }
        }
        if (leftTopping === rightTopping) answer += 1;
    }
    return answer;
}
