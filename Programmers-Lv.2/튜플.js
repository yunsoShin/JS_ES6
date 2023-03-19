function solution(s) {
    var answer = [];
    s= s.replaceAll("{","[")
        .replaceAll("}","]")
    const arr = eval(s);
    arr.sort((a, b) => a.length - b.length);
    const flattened = arr.reduce((acc, val) => acc.concat(val), []);
    const unique = Array.from(new Set(flattened));
    return unique; 
}
/*function findLengthOne(arr) {
  const result = arr.flatMap(x => x).filter(x => x.length === 1);
  return result.length > 0 ? parseInt(result[0]) : null;
}

const input = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
const arr = input.slice(2, input.length - 2).split("},{").map(x => x.split(","));
console.log(findLengthOne(arr)); // 4
*/