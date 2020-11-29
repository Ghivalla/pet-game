import gameState from "./gameState";

const TICK_RATE = 3000;

function init() {
  let nextTickTime = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTickTime <= now) {
      gameState.tick();
      nextTickTime = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
