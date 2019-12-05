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
        break;
      }
      break;

    case "a":
      frogger.style.transform = "rotate(90deg)"
      if (froggerX > 25) {
        froggerX = froggerX - 75;
        updateFroggerPosition()
      }
      break;
    case "s":
      frogger.style.transform = "rotate(0deg)"
      if (froggerY < 645) {
        froggerY = froggerY + 50;
        updateFroggerPosition()
        break
      }

      break;
    case "d":
      frogger.style.transform = "rotate(270deg)"
      if (froggerX < 625) {
        froggerX = froggerX + 75;
        updateFroggerPosition()
        break
      }
      break;
  }

});

//timer
let timeleft = 20;
let timer = setInterval(function(){
  document.getElementById("second").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("second").innerHTML = "Out Of Time"
  }
}, 1000);

function largeTruckAnimation(speed) {
  let elem = document.getElementsByClassName("largeTruck");
  let pos = 1000;
  let id = setInterval(frame, speed); //speed

  function frame() {
    for (let i = 0; i < elem.length; i++) {
      pos--;
      elem[i].style.left = pos - (i * 250) + 'px';
      if (pos - (i * 250) <= -250) {
        pos = 1000;
      }
    }

  }
}

largeTruckAnimation(50);






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
