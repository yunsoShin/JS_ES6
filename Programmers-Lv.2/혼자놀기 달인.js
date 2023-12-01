function solution(cards) {
    var answer = 0;
    let visited = [...Array(cards.length)].map(x => 0);
    let groupN = [];

    let startIndex = 0;
    while(startIndex >= 0) {
        groupN.push(checkGroup(startIndex, visited, cards, 0))
        startIndex = visited.findIndex(isVisited => isVisited == 0);
    }

    if(groupN.length == 1){
        return 0;
    }

    groupN = groupN.sort((a,b) => b-a);
    return groupN[0] * groupN[1];
}

function checkGroup(start, visited, cards, count) {

    if(visited[start] == 1) {
        return count;
    }
    visited[start] = 1
    return checkGroup(cards[start]-1, visited, cards, ++count)
}
