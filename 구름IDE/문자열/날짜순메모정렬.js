// Run by Node.js
function extractDates(arr) {
  const regex = /(\d+\/\d+\/\d+|\d+-\d+-\d+|\d+년\d+월\d+일)/g;
  let dates = [];

  for (let i = 0; i < arr.length; i++) {
    let matches = arr[i].match(regex);
    if (matches) {
      dates = dates.concat(matches);
    }
  }
  return dates;
}

function solution(input) {
  let date = extractDates(input);
  const regex = /\d+/g;

  let dateArr = date.map((a) => a.match(regex));

  dateArr = dateArr.map((item) => {
    if (item && item[0].length === 2) {
      item[0] = "20" + item[0];
    }
    return item;
  });
  dateArr = dateArr.map((item) => {
    if (item) {
      item = item.map((element) => {
        if (element.length === 1) {
          return "0" + element;
        }
        return element;
      });
      return item.join("");
    }
    return item;
  });

  let sort = Array.from(dateArr).sort();
  let result = sort.map((v) => dateArr.indexOf(v) + 1);
  let answer = result.map((index) => input[index - 1]);
  return answer.join("\n");
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  if (line === "") {
    rl.close();
  } else {
    input.push(line);
  }
}).on("close", function () {
  input.pop();

  console.log(solution(input));
});
