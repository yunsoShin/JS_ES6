function mazeSearch(maze) {
    const ROWS = maze.length;
    const COLS = maze[0].length;
    const stack = [{ row: 0, col: 0 }];
  
    while (stack.length > 0) {
      const currPos = stack.pop();
      const { row, col } = currPos;
  
      if (maze[row][col] === 'e') {
        return true; // 도착점에 도달한 경우
      }
  
      if (maze[row][col] === ' ') {
        maze[row][col] = 'x'; // 방문한 지점은 'x'로 표시
        if (col < COLS - 1) {
          stack.push({ row, col: col + 1 }); // 오른쪽으로 이동
        }
        if (row < ROWS - 1) {
          stack.push({ row: row + 1, col }); // 아래쪽으로 이동
        }
        if (col > 0) {
          stack.push({ row, col: col - 1 }); // 왼쪽으로 이동
        }
        if (row > 0) {
          stack.push({ row: row - 1, col }); // 위쪽으로 이동
        }
      }
    }
  
    return false; // 도착점에 도달하지 못한 경우
  }