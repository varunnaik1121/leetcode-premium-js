Array.prototype.customReduce = function (cb, initialValue = 0) {
  for (let i = 0; i < this.length; i++) {
    initialValue = cb(initialValue, this[i]);
  }
  return initialValue;
};

let ans = [{ x: 1 }, { x: 2 }, { x: 3 }].customReduce((acc, value) => {
  return acc + value.x;
}, 10);
console.log(ans);

//always remember reduce takes the 4 arguments (accumulator) which is the default value that is need to be added or do something with that
