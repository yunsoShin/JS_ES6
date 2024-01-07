function solution(n, info) {
    let maxScore = 0;
    const result = info.map(v => v);
    // @isChanged => [-1] 리턴 여부 확인용 변수
    let isChanged = false;

    // dfs로 탐색 => 
    // (round: 화살 몇 발 솼는지, index: 몇 번째 과녁인지, shots: result에 넣을 배열)
    const dfs = (round, index, shots) => {
        if (round === n) {
            // @[ryan, apeach] 점수 계산
            let [ryan, apeach] = [0, 0];
            for (let i = 0; i < shots.length; i++) {
                if (info[i] < shots[i]) ryan += (10 - i);
                else if (info[i] > shots[i]) apeach += (10 - i);
            }

            if (apeach < ryan && maxScore <= ryan - apeach) {
                if (maxScore < ryan - apeach) {
                    // case 1. 기존보다 점수차가 높아서 그냥 갱신.
                    isChanged = true;
                    maxScore = ryan - apeach;
                    shots.forEach((v, i) => result[i] = v);
                } else {
                    // case 2. 기존과 점수차 같아서 더 낮은 과녁 맞혔다면 갱신.
                    let isLowerResult = false;
                    for (let i = shots.length - 1; i > -1; i--) {
                        if (shots[i] > result[i]) { isLowerResult = true; break; }
                        else if (shots[i] < result[i]) break;
                    }
                    if (isLowerResult) {
                        isChanged = true;
                        shots.forEach((v, i) => result[i] = v);
                    }
                }
            }
            return;
        }
        // escape 조건: index 넘어가면 남은 round 0점에 몰빵.
        if (round > n) return;
        if (index >= shots.length) {
            if (round > n) return;
            shots[shots.length - 1] = n - round;
            dfs(n, shots.length - 1, shots);
            return;
        }
        const nextShots = shots.map(v => v);
        dfs(round, index + 1, nextShots);
        nextShots[index] += info[index] + 1;
        dfs(round + nextShots[index], index + 1, nextShots);
    }

    dfs(0, 0, info.map(_ => 0));
    return isChanged ? result : [-1];
}
