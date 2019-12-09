const frogger = document.getElementById('frogger')
let froggerY = 645;
frogger.style.top = froggerY + "px";
let froggerX = 325;
frogger.style.left = froggerX + "px";

function updateFroggerPosition() {
  frogger.style.left = froggerX + "px";
  frogger.style.top = froggerY + "px";
}


window.addEventListener("keydown", event => {
  let button = event.key;
  switch (button) {
    case "w":
      frogger.style.transform = "rotate(180deg)"
      if (froggerY > 0) {
        froggerY = froggerY - 50;
        updateFroggerPosition()
        checkFrogger()
        break;
      }
      break;

    case "a":
      frogger.style.transform = "rotate(90deg)"
      if (froggerX > 25) {
        froggerX = froggerX - 75;
        updateFroggerPosition()
        checkFrogger()
      }
      break;
    case "s":
      frogger.style.transform = "rotate(0deg)"
      if (froggerY < 645) {
        froggerY = froggerY + 50;
        updateFroggerPosition()
        checkFrogger()
        break
      }

      break;
    case "d":
      frogger.style.transform = "rotate(270deg)"
      if (froggerX < 625) {
        froggerX = froggerX + 75;
        updateFroggerPosition()
        checkFrogger()
        break
      }
      break;
  }

});

function timer() {
  let timeleft = 20;
  let timer = setInterval(function() {
    document.getElementById("second").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("second").innerHTML = "Out Of Time"
    }
  }, 1000);
}


function rightToLeftAnimation(className, speed, spaceBetweenSprites) {
  let elem = document.getElementsByClassName(className);
  for (let i = 0; i < elem.length; i++) {
    sprite = elem[i]
    start = 700 - (i * spaceBetweenSprites);
    animation(sprite, start, speed)
  }
}

function animation(sprite, start, speed) {
  sprite.style.left = start + 'px';
  let pos = parseInt(sprite.style.left, 10);
  let id = setInterval(frame, speed); //speed
  function frame() {
    pos--;
    sprite.style.left = pos + "px";
    if (parseInt(sprite.style.left, 10) >= parseInt(frogger.style.left, 10) - parseInt(getComputedStyle(sprite).width, 10) && parseInt(sprite.style.left) <= parseInt(frogger.style.left, 10) + parseInt(getComputedStyle(sprite).width, 10) / 2 && parseInt(getComputedStyle(sprite).top, 10) == froggerY + 5) {
      console.log("sprite left position: " + sprite.style.left)
      console.log(parseInt(frogger.style.left, 10) - 35)
      console.log((sprite.style.left >= parseInt(frogger.style.left, 10) - parseInt((getComputedStyle(sprite).width, 10)) + "px"))
      console.log(parseInt(frogger.style.left, 10) + 35)
      console.log(sprite.style.left <= parseInt(frogger.style.left, 10) + parseInt((getComputedStyle(sprite).width, 10)) + "px")


      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()
    }

    if (pos == -parseInt((getComputedStyle(sprite).width), 10)) {
      pos = 700;
    }
  }
}

function leftToRightAnimation(className, speed, spaceBetweenSprites) {
  let elem = document.getElementsByClassName(className);
  for (let i = 0; i < elem.length; i++) {
    sprite = elem[i]
    start = 0 + (i * spaceBetweenSprites);
    reverseAnimation(sprite, start, speed)
  }
}

function reverseAnimation(sprite, start, speed) {
  sprite.style.left = start + 'px';
  let pos = parseInt(sprite.style.left, 10);
  let id = setInterval(frame, speed); //speed
  function frame() {
    pos++;
    sprite.style.left = pos + "px";
    if (parseInt(sprite.style.left, 10) >= parseInt(frogger.style.left, 10) - parseInt(getComputedStyle(sprite).width, 10) + 10 && parseInt(sprite.style.left) <= parseInt(frogger.style.left, 10) + parseInt(getComputedStyle(sprite).width, 10) - 10 && parseInt(getComputedStyle(sprite).top, 10) == froggerY + 5) {
      console.log("sprite left position: " + sprite.style.left)
      console.log(parseInt(frogger.style.left, 10) - 35)
      console.log((sprite.style.left >= parseInt(frogger.style.left, 10) - parseInt((getComputedStyle(sprite).width, 10)) + "px"))
      console.log(parseInt(frogger.style.left, 10) + 35)
      console.log(sprite.style.left <= parseInt(frogger.style.left, 10) + parseInt((getComputedStyle(sprite).width, 10)) + "px")


      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()


    }
    if (pos == 700) {
      pos = -parseInt((getComputedStyle(sprite).width));
    }
  }
}

let topPos = "45px";
let leftPos = ["25px", "175px", "325px", "475px", "625px"];
let deathPos = ["100px", "250px", "400px", "550px"];

function checkFrogger() {
  let img = document.createElement('img');
  img.src = 'images/frog.png';
  if (frogger.style.top == topPos && deathPos.includes(frogger.style.left)) {
    froggerY = 645;
    frogger.style.top = froggerY + "px";
    froggerX = 325;
    frogger.style.left = froggerX + "px";
    document.getElementById('frogger');
    console.log("death");
  } else if (frogger.style.top == topPos && leftPos.includes(frogger.style.left)) {
    deathPos.push(frogger.style.left)
    console.log(frogger.style.left)
    console.log(deathPos)
    froggerY = 645;
    frogger.style.top = froggerY + "px";
    froggerX = 325;
    frogger.style.left = froggerX + "px";
    console.log("won");
  }
}

timer();
leftToRightAnimation("slowCar2", 20, 250)
rightToLeftAnimation("largeTruck", 25, 350);
rightToLeftAnimation("slowCar", 25, 250);
leftToRightAnimation("copCar", 10, 500);
rightToLeftAnimation("fireTruck", 25, 500);
rightToLeftAnimation("longLog", 10, 500);
leftToRightAnimation("smallLog", 10, 250);
rightToLeftAnimation("mediumLog", 10, 300);
leftToRightAnimation("threeturtles", 7, 450);
rightToLeftAnimation("twoturtles", 7, 450);







// IDEA: BOTTOM IS OUTDATED CANVAS IDEAS
/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function drawBackground() {

  //grass
  ctx.fillStyle = 'lime';
  ctx.fillRect(0, 350, 700, 50);
  ctx.fillRect(0, 200, 700, 50);
  //roads
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 250, 700, 100)
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 300, 700, 1)
  //water
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 50, 700, 150)
  //win area
  ctx.fillStyle = 'lime';
  ctx.fillRect(0, 0, 700, 50)
  ctx.fillStyle = 'yellow';
  ctx.fillRect((700 / 11), 0, (700 / 11), 50)
  ctx.fillRect((700 / 11) * 3, 0, (700 / 11), 50)
  ctx.fillRect((700 / 11) * 5, 0, (700 / 11), 50)
  ctx.fillRect((700 / 11) * 7, 0, (700 / 11), 50)
  ctx.fillRect((700 / 11) * 9, 0, (700 / 11), 50)
  ctx.fillStyle = 'lime';
  ctx.fillRect(0, 0, 700, 20)
  //grid styles
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 50, 700, 1)
  ctx.fillRect(0, 100, 700, 1)
  ctx.fillRect(0, 150, 700, 1)
  ctx.fillRect(0, 200, 700, 1)
  ctx.fillRect(0, 250, 700, 1)
  ctx.fillRect(0, 350, 700, 1)
  ctx.fillRect(0, 400, 700, 1)
}
//frog sprite
let frog = new Image();
frog.src = "images/frog.png";
let sx = 0;
let sy = 0;
let swidth = 50;
let sheight = (700 / 11);
let x = 10;
let y = 350;
let width = 50;
let height = (700 / 11);


function drawFrog() {
  ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}
//player movement
window.addEventListener("keydown", event => {
  let button = event.key;
  switch (button) {
    case "w":
      y = y - 50;
      break;
    case "a":
      x = x - (700 / 11);
      break;
    case "s":
      y = y + 50;
      break;
    case "d":
      x = x + (700 / 11);
      break;
  }
});
});



function draw() {
  drawBackground();
  drawFrog();
  requestAnimationFrame(draw);
}
draw();
*/