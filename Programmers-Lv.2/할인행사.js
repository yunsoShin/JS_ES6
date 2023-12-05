function solution(want, number, discount) {
    let answer = 0;
    const wantSet = {}
    want.forEach((meal,idx)=>{
        wantSet[meal] = number[idx]
    })

    discount.forEach((_,idx)=>{
        const discountTarget = discount.slice(idx,idx + 10)

        const copyWantSet = {...wantSet}
        discountTarget.forEach((meal)=>{
            if(copyWantSet[meal]){
                copyWantSet[meal]--
            }
            if(copyWantSet[meal] === 0){
                delete copyWantSet[meal]
            }
        })

        if(Object.keys(copyWantSet).length === 0){
            answer++
        }
    })
    return answer;
}
