let canvas = document.getElementsById('canvas');
let ctx = canvas.context('2d');

let frog = new image(); frog.src = "frog.png";
let sx = 0;
let sy = 0;
let swidth = 50;
let sheight = (700/11);
let x = 30;
let y = 450;
let width = 25;
let height = 25;


function drawFrog(){
  ctx.drawimage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

function draw(){
  drawFrog();
}
