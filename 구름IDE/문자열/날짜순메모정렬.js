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
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		console.log('Hello Goorm! Your input is', line);
		rl.close();
	}
	
	process.exit();
})();


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    private int[] parents;
  
    private void init(int n) {
        parents = new int[n+1];
        Arrays.fill(parents, -1);
    }
  
    private int find(int a) {
        if (parents[a] < 0) return a;
        return parents[a] = find(parents[a]);
    }
  
    private boolean union(int a, int b) {
        a = find(a);
        b = find(b);
        if (a == b) return false;
        int h = parents[a]<parents[b]?a:b;
        int l = parents[a]<parents[b]?b:a;
        parents[h]+=parents[l];
        parents[l] = h;
        return true;
    }
  
    private void solution() throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        init(n);

        int cnt = 0;
        while (m-->0) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            if (!union(u, v)) cnt++;
        }
        for (int i = 1; i <= n; i++) {
            if (parents[i]<0) cnt++;
        }
        System.out.println(--cnt);
    }
  
    public static void main(String[] args) throws Exception {
        new Main().solution();
    }
}

import java.io.*;
import java.util.*;