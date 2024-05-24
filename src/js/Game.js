import { RocketMoves } from "./RocketMoves.js";

const canvas = document.getElementById("main-screen");
const ctx = canvas.getContext("2d");

RocketMoves.start({ ctx });

requestAnimationFrame(GameLoop);
function GameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  RocketMoves.update();

  requestAnimationFrame(GameLoop);
}