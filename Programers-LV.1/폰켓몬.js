function solution(nums) {
    var answer = 0;
    const uniqueArr = [...new Set(nums)];
    
    return nums.length/2<uniqueArr.length? nums.length/2 :uniqueArr.length
}