function knapSack(W, wt, val, n) {
  let i, w;
  let K = Array(n + 1)
    .fill()
    .map(() => Array(W + 1).fill(0));

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }
  return K[n][W];
}

let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapSack(W, wt, val, n));
