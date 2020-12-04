import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

function init() {
  let nextTickTime = Date.now();
  initButtons(handleUserAction);
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
