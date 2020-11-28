const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

function init() {
  console.log("starting game");

  let nextTickTime = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTickTime <= now) {
      tick();
      nextTickTime = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
