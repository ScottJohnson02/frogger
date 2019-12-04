const canvas = document.getElementsById('canvas');
const ctx = canvas.context('2d');

let frog = new image();
frog.src = "frog.png";
let sx = 0;
let sy = 0;
let swidth = 50;
let sheight = (700 / 11);
let x = 30;
let y = 450;
let width = 25;
let height = 25;


function drawFrog() {
  ctx.drawimage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

function draw() {
  drawFrog();
}

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