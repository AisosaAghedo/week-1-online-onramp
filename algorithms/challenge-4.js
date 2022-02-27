function highestSum(x, y) {
  let sumOfX = 0;
  let sumOfY = 0;

  // 1, 2, 3, 4, 5
  // sumOfX = 6
  for (let i = 0; i < x.length; i++) {
    sumOfX += x[i];
  }
  for (let a = 0; a < y.length; a++) {
    sumOfY += y[a];
  }
  if (sumOfX > sumOfY) {
    return sumOfX;
  }
  return sumOfY;
}

module.exports = highestSum;
