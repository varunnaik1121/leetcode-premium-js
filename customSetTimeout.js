//custom func to simulate the setTimeout

function customSetTimeout(callback, delay) {
  let start = Date.now();
  function customTime() {
    let now = Date.now();
    if (now - start >= delay) {
      callback();
      return;
    } else {
      requestAnimationFrame(customTime);
    }
  }
  requestAnimationFrame(customTime);
}
customSetTimeout(() => {
  console.log('callback called');
}, 1000);
