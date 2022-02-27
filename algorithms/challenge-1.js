function noOfElements(x, y, z) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= y && x[i] <= z) {
      count++; // count = count + 1  ====  count += 1
    }
  }

  return count;
}

module.exports = noOfElements;
