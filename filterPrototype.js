Array.prototype.customFilter = function (cb) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

let ans = [1, 2, 3, 4].customFilter((item) => {
  return item > 900;
});

console.log(ans);
