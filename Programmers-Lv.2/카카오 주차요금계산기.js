function parseTime(timeStr) {
    const parts = timeStr.split(':');
    if (parts.length === 2) {
        const hours = parseInt(parts[0]);
        const minutes = parseInt(parts[1]);
        return hours * 60 + minutes;
    }
    return NaN;
}

function solution(fees, records) {
    answer = [];
    // 들어오고 나가는 기록을 담는 Map
    const entranceMap = new Map();
    // 입/출차를 한 총 시간     
    const timeMap = new Map();

    records = records.map(v => v.split(' '));
    for(let record of records){
        if(!entranceMap.has(record[1])){
            entranceMap.set(record[1], [record[0], record[2]]);
            timeMap.set(record[1], 0);
        }else{
            if(entranceMap.get(record[1])[1] !== 'IN'){
                entranceMap.set(record[1], [record[0], record[2]]);
            }else{
                // 들어올 OUT 시간 - 기존 IN시간 계산
                const inTime = parseTime(entranceMap.get(record[1])[0]);
                const outTime = parseTime(record[0]);
                const timeDifference = Math.abs(outTime - inTime);
                entranceMap.set(record[1], [record[0], record[2]]);
                timeMap.set(record[1], timeMap.get(record[1]) + timeDifference);
            }
        }
    }

    // 예시의 계산식대로 계산     
    for(let item of [...new Map(entranceMap)].sort()){
        if(item[1][1] === 'IN'){
            const lastTime = Math.abs(parseTime("23:59") - parseTime(item[1][0]));
            timeMap.set(item[0], timeMap.get(item[0]) + lastTime);
        }
        if(timeMap.get(item[0]) <= fees[0]) answer.push(fees[1]);
        else{
            answer.push(fees[1] + Math.ceil((timeMap.get(item[0]) - fees[0]) / fees[2]) * fees[3]);
        }
    }
    return answer;
}
