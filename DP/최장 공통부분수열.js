function lcs(X, Y) {
  var m = X.length;
  var n = Y.length;
  var L = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) L[i][j] = 0;
      else if (X[i - 1] == Y[j - 1]) L[i][j] = L[i - 1][j - 1] + 1;
      else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
    }
  }
  return L[m][n];
}

var X = "ABCDEF";
var Y = "AEDNEK";
console.log("Length of LCS is " + lcs(X, Y));
