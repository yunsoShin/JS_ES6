function solution(plans) {
    // 배열내 객체 형태로 변경
    const newPlans = plans.map(([name,start,playtime])=>{
        const [hour,minute] = start.split(':').map(str=>Number(str))
        const time = hour * 60 + minute
        const N_playTime = Number(playtime)
        return {name,start:time,playtime:N_playTime}
    })

    
    newPlans.sort((a,b)=>a.start - b.start)

    let idx = 0
    const stack = [], finishedNames = []

    // 00:00부터 23:59분까지 time 체크
    for(let time=0;time<1440;time++){
        // 1초마다 지난시간만큼 playtime을 감소시켜 0이 되면 과제 완료로 판단하여 finishedNames에 추가
        // 진행중이던 과제에 대한 처리 
        if(stack.length !== 0){
            const lastPlan = stack[stack.length-1]
            lastPlan.playtime--
            if(lastPlan.playtime === 0){
                stack.pop()
                finishedNames.push(lastPlan.name)
            }
        }

        // 새로운 과제를 시작할 시각이 되었을 때 새로운 과제를 추가
        if(time === newPlans[idx]?.start){
            stack.push(newPlans[idx])
            idx++
        }
    }

    // 23:59 이후는 순서대로 정렬된 것의 최근에 멈춘 과제부터 과제를 마무리 한다.
    const unfinishedNames = stack.reverse().map(({name})=>name)
    const answer = [...finishedNames,...unfinishedNames]
    return answer
}
