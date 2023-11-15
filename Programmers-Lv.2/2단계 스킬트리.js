function solution(skill, skill_trees) {

    let answer = 0;
    // skill에 없는 것들을 다 없애자
    const skillList = skill.split("");

    for (let skills of skill_trees) {
        let temp = [];
        for (let s of skills) {
            if (skillList.includes(s)) temp.push(s);
        }
        // startWith로 걸러내기
        if (skill.startsWith(temp.join(""))) answer += 1;
    }
    return answer;
}
