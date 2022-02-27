function isDivisbleByN(arr, n) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n === 0) newArray.push(arr[i]);
  }

  return newArray;
}

module.exports = isDivisbleByN;
