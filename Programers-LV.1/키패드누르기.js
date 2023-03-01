function solution(numbers, hand) {
    const result = [];
    const arr =      [[0,4,3,4,3,2,3,2,1,2,1,1],// 0
                      [4,0,1,2,1,2,3,2,3,4,3,5], //1
                      [3,1,0,1,2,1,2,3,2,3,4,4],//2
                      [4,2,1,0,3,2,1,4,3,2,5,3],//3
                      [3,1,2,3,0,1,2,1,2,3,2,4],//4
                      [2,2,1,2,1,0,1,2,1,2,3,3],//5
                      [3,3,2,1,2,1,0,3,2,1,4,1],//6
                      [2,2,3,4,1,2,3,0,1,2,1,3],//7
                      [1,3,2,3,2,1,2,1,0,1,2,2],//8
                      [2,4,3,2,3,2,1,2,1,0,3,1],//9
                      [1,3,4,5,2,3,4,1,2,3,0,2],//*
                      [1,5,4,3,4,3,2,3,2,1,2,0]//#
                     ] //0~9까지의 0~9..#일때의 거리 ,특수문자의 순서는 *.#순서       
    let Rlocate = 11;
    let Llocate = 10;
    if (hand === "right") {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
                result.push("L");
                Llocate = numbers[i];
            }       
            else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
                result.push("R");
                Rlocate = numbers[i];
            } 
            else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
                if (arr[Rlocate][numbers[i]] > arr[Llocate][numbers[i]]) {
                    result.push("L");
                    Llocate = numbers[i];
                } 
                else if (arr[Rlocate][numbers[i]] <= arr[Llocate][numbers[i]]) {
                    result.push("R");
                    Rlocate = numbers[i];
                }
            }
        }
    }
    if (hand === "left") {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
                result.push("L");
                Llocate = numbers[i];
            }       
            else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
                result.push("R");
                Rlocate = numbers[i];
            } 
            else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
                if (arr[Rlocate][numbers[i]] >= arr[Llocate][numbers[i]]) {
                    result.push("L");
                    Llocate = numbers[i];
                } 
                else if (arr[Rlocate][numbers[i]] < arr[Llocate][numbers[i]]) {
                    result.push("R");
                    Rlocate = numbers[i];
                }
            }
        }
    }
    console.log(result,Rlocate,Llocate)
    return result.join('');
}

function solution(numbers, hand) {
    hand = hand[0] === "r" ? "R" : "L"
    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
    let h = { L: [1, 1], R: [1, 1] }
    return numbers.map(x => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1]
        return "L"
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1]
        return "R"
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
      if (distL === distR) {
        h[hand] = [position[x], 0]
        return hand
      }
      if (distL < distR) {
        h.L = [position[x], 0]
        return "L"
      }
      h.R = [position[x], 0]
      return "R"
    }).join("")
  }