function longestIncSubArr(n, arr) {
  //write code here
  if (n === 0) {
    console.log(0);
    return;
  }
  let maxLen = 1;
  let currLen = 1;
  for (var i = 0; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      currLen++;
      maxLen = Math.max(currLen, maxLen);
    } else {
      currLen = 1;
    }
  }
  console.log(Math.max(currLen, maxLen));
}
