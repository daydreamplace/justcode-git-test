function odd() {
  let oddArray = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
}
