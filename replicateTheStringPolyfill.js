String.prototype.replicate = function (num) {
  let res = '';
  while (num--) {
    res += this;
  }
  return res;
};

const modifiedStr = 'varun'.replicate(3);
console.log(modifiedStr);
