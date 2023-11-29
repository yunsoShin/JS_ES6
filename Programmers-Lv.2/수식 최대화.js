const minus = (str)=>{
    return str.reduce((acc,val)=>acc-Number(val),0) + str[0] * 2 
}

const plus = (str)=>{
    return str.reduce((acc,val)=>acc+Number(val),0)
}

const multiple = (str)=>{
    return str.reduce((acc,val)=>acc*Number(val),1)
}

function solution(expression) {
    const case1 = expression.split('+').map(str=>str.split('*').map(str=>str.split('-')))
    const result1 = Math.abs(plus(case1.map((str)=>multiple(str.map((str)=>minus(str))))))

    const case2 = expression.split('-').map(str=>str.split('+').map(str=>str.split('*')))
    const result2 = Math.abs(minus(case2.map((str)=>plus(str.map((str)=>multiple(str))))))

    const case3 = expression.split('-').map(str=>str.split('*').map(str=>str.split('+')))
    const result3 = Math.abs(minus(case3.map((str)=>multiple(str.map((str)=>plus(str))))))

    const case4 = expression.split('+').map(str=>str.split('-').map(str=>str.split('*')))
    const result4 = Math.abs(plus(case4.map((str)=>minus(str.map((str)=>multiple(str))))))

    const case5 = expression.split('*').map(str=>str.split('+').map(str=>str.split('-')))
    const result5 = Math.abs(multiple(case5.map((str)=>plus(str.map((str)=>minus(str))))))

    const case6 = expression.split('*').map(str=>str.split('-').map(str=>str.split('+')))
    const result6 = Math.abs(multiple(case6.map((str)=>minus(str.map((str)=>plus(str))))))

    return Math.max(result1,result2,result3,result4,result5,result6)
}
