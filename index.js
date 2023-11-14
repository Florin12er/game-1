const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const canvasWidth = (canvas.width = 600);

const canvasHeight = (canvas.height = 600);
const dogImage = new Image();
const imageWidth = 573;
const imageHeight = 523;
dogImage.src = "/home/sebastian/game-1/game/shadow_dog.png";

let dogAnimation = 0;
let dogChange = 9;

let Animation;

let frame = 0;
let fps = 25;
if (dogChange === 0) {
  Animation = 6;
}

if (dogChange === 1) {
  Animation = 6;
}

if (dogChange === 2) {
  Animation = 6;
}

if (dogChange === 3) {
  Animation = 8;
}

if (dogChange === 4) {
  Animation = 10;
}

if (dogChange === 5) {
  Animation = 4;
}

if (dogChange === 6) {
  Animation = 6;
}

if (dogChange === 7) {
  Animation = 6;
}

if (dogChange === 8) {
  Animation = 11;
}

if (dogChange === 9) {
  Animation = 3;
}

function animateDog() {
  ctx.clearRect(0, 0, canvasHeight, canvasWidth);
  ctx.drawImage(
    dogImage,
    dogAnimation * imageWidth,
    dogChange * imageHeight,
    imageWidth,
    imageHeight,
    0,
    0,
    imageWidth,
    imageHeight,
  );
  if (frame % fps === 0) {
    if (dogAnimation < Animation) dogAnimation++;
    else dogAnimation = 0;
  }
  frame++;
  requestAnimationFrame(animateDog);
}
animateDog();
