const canvas = document.getElementById("canvas");
const selectedValue = document.getElementById("animation");
const button = document.getElementById("submit");
const chooseButton = document.getElementById("Text");
const ctx = canvas.getContext("2d");

const canvasWidth = (canvas.width = 600);

const canvasHeight = (canvas.height = 600);
const dogImage = new Image();
const imageWidth = 573;
const imageHeight = 523;
dogImage.src = "https://github.com/Florin12er/game-1/blob/main/game/shadow_dog.png?raw=true";

let dogAnimation = 0;
let dogChange = 0;

let Animation;

let frame = 0;
const fps = 25;

chooseButton.addEventListener("click", () => {
  Click();
});
function Click() {
  selectedValue.style.display = "block";
  chooseButton.style.display = "none";
  button.style.display = "block";
  canvas.style.display = "block";
}
function click() {
  const animationValue = selectedValue.value;
  if (animationValue === "normal") dogChange = 0;
  if (animationValue === "fly") dogChange = 1;
  if (animationValue === "fly down") dogChange = 2;
  if (animationValue === "run") dogChange = 3;
  if (animationValue === "damaged") dogChange = 4;
  if (animationValue === "stand") dogChange = 5;
  if (animationValue === "roll") dogChange = 6;
  if (animationValue === "slide") dogChange = 7;
  if (animationValue === "killed") dogChange = 8;
  if (animationValue === "semi damaged") dogChange = 9;
  if (animationValue === "") alert("please select an animation");
}

addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    click();
  }
});

button.addEventListener("click", () => {
  click();
});
if (dogChange === 0) Animation = 6;

if (dogChange === 1) Animation = 6;

if (dogChange === 2) Animation = 6;

if (dogChange === 3) Animation = 8;

if (dogChange === 4) Animation = 12;

if (dogChange === 5) Animation = 2;

if (dogChange === 6) Animation = 6;

if (dogChange === 7) Animation = 6;

if (dogChange === 8) Animation = 11;

if (dogChange === 9) Animation = 3;

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
  if (frame % fps === 0)
    if (dogAnimation < Animation) dogAnimation++;
    else dogAnimation = 0;

  frame++;
  requestAnimationFrame(animateDog);
}
animateDog();
