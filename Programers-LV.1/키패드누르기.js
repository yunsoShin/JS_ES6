function solution(numbers, hand) {
    var answer = '';
    const result = [];
    const arr = [[0,4,3,4,3,2,3,2,1,2,1,1],// 0
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
    let Llocate = 10
    
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



   
            
            
                    
            
            console.log(result,Rlocate,Llocate)
            
        
        
        
    
    return result.join('');
}