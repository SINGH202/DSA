function longestIncSubAr(n, arr) {
  if (n === 0) {
    return 0;
  }
  let maxLen = 1;
  let currLen = 1;
  for (var i = 0; i < n; i++) {
    if (i + 1 < n && arr[i + 1] > arr[i]) {
      currLen++;
    } else {
      maxLen = Math.max(currLen, maxLen);
      currLen = 1;
    }
  }
  return Math.max(currLen, maxLen);
}
