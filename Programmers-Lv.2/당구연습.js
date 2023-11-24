function solution(m, n, startX, startY, balls) {
    const answer = [];
    for(let [targetX, targetY] of balls){
        // 1번 방법. 4방향 고려 필요 - 교점 구하기 방식은 소수점 계산이 정확하지 않아서... 안된다.
        // x축(x, 0), (x, m), y축(0, y), (n, y) 좌표구하기
        // const x = (startY*targetX + startX*targetY) / (startY + targetY);
        // const x_n = (targetX*(n - startY) + startX*(n - targetY)) / (2*n - startY - targetY);
        // const y =(startY*targetX - startX*targetY) / (targetX - startX);
        // const y_m = (targetY*(m - startX) + startY*(m - targetX)) / (2*m - startX - targetX);
        // const candidate_x = (Math.sqrt((x - startX)**2 + startY**2) + Math.sqrt((x - targetX)**2 + targetY**2))**2;
        // const candidate_x_n = (Math.sqrt((x_n - startX)**2 + (n - startY)**2) + Math.sqrt((x_n - targetX)**2 + (n - targetY)**2))**2;
        // const candidate_y = (Math.sqrt(startX**2 + (y - startY)**2) + Math.sqrt(targetX**2 + (y - targetY)**2))**2;
        // const candidate_y_m = (Math.sqrt((m - startX)**2 + (y_m - startY)**2) + Math.sqrt( (m -targetX)**2 + (y_m - targetY)**2))**2;

        // 2번 방법. 점대칭 시키자(startX, startY)
        const candidate_x_down = (targetX - startX)**2 + (targetY + startY)**2;
        const candidate_x_up = (targetX - startX)**2 + (targetY - 2*n + startY)**2;
        const candidate_y_left = (targetX + startX)**2 + (targetY - startY)**2;
        const candidate_y_right = (targetX - 2*m + startX)**2 + (targetY-startY)**2;

        if(targetX === startX) // 같은 X축에 있는 경우, 3방향만 고려 필요
            if(targetY > startY) // 위에 빼고 다가능
                answer.push(Math.min(candidate_x_down, candidate_y_left, candidate_y_right));
            else // 아래빼고 다가능
                answer.push(Math.min(candidate_x_up, candidate_y_left, candidate_y_right));
        else if(targetY === startY) // 같은 Y축에 있는 경우, 3방향만 고려 필요
            if(targetX > startX) // 오른쪽 뺴고 다가능
                answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left));
            else // 왼쪽 빼고 다가능
                answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_right));
        else // 다가능
            answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left, candidate_y_right));
    }
    return answer;
}
