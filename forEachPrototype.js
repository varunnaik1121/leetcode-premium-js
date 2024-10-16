Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3, 4].customForEach((item, index, arr) => {
  console.log(item);
});
