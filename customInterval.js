const mpp = new Map();

function customInterval(callback, delay) {
  let id;
  let count = 10;
  function timeoutFunc() {
    callback();
    count++;
    mpp.set(id, setTimeout(timeoutFunc, delay));
    console.log(mpp);
  }
  id = Date.now();

  timeoutFunc();
  return id;
}

const id = customInterval(() => {
  console.log('callback func called');
}, 500);

function customClearInterval(id) {
  if (mpp.has(id)) {
    clearTimeout(mpp.get(id));
    mpp.delete(id);
  }
  console.log(mpp);
}

setTimeout(() => {
  customClearInterval(id);
}, 2500);
