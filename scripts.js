const frogger = document.getElementById('frogger')
let froggerY = 645;
frogger.style.top = froggerY + "px";
let froggerX = 325;
frogger.style.left = froggerX + "px";

function updateFroggerPosition() {
  frogger.style.left = froggerX + "px";
  frogger.style.top = froggerY + "px";
}
let ridingSprite = "";

let timeleft = 20;

//const finalFrog = document.getElementById('finalFrog1')
//let finalFrogY = 45;
//finalFrog.style.top = finalFrogY + "px";
//let finalFrogX = [25, 175, 325, 475, 625]
//finalFrog.style.left = finalFrogX + "px";

window.addEventListener("keydown", event => {
  let button = event.key;
  switch (button) {
    case "w":
      frogger.style.transform = "rotate(180deg)"
      if (froggerY > 0) {
        ridingSprite = "";
        froggerY = froggerY - 50;
        updateFroggerPosition()
        checkFrogger()
        checkLogCollision()
        checkWaterCollision()
        break;
      }
      break;

    case "a":
      frogger.style.transform = "rotate(90deg)"
      if (froggerX > 25) {
        ridingSprite = "";
        froggerX = froggerX - 75;
        updateFroggerPosition()
        checkFrogger()
        checkWaterCollision()

      }
      break;
    case "s":
      frogger.style.transform = "rotate(0deg)"
      if (froggerY < 645) {
        ridingSprite = "";
        froggerY = froggerY + 50;
        updateFroggerPosition()
        checkFrogger()
        checkLogCollision()
        checkWaterCollision()
        break
      }

      break;
    case "d":
      frogger.style.transform = "rotate(270deg)"
      if (froggerX < 625) {
        ridingSprite = "";
        froggerX = froggerX + 75;
        updateFroggerPosition()
        checkFrogger()
        checkWaterCollision()

        break
      }
      break;
  }

});

function timer() {
  let clock = setInterval(function() {
    document.getElementById("second").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
      timeleft=20;
      clearInterval(clock);
      document.getElementById("second").innerHTML = "Out Of Time";
      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()
      timer()
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
  let id = setInterval(frame, speed);
  //speed
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
      timeleft = 20;
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


      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()
      timeleft = 20;

    }
    if (pos == 700) {
      pos = -parseInt((getComputedStyle(sprite).width));
    }
  }
}

let topPos = "45px";
let leftPos = ["25px", "175px", "325px", "475px", "625px"];
let deathPos = ["100px", "250px", "400px", "550px"];

document.getElementById('finalFrog1').style.display = "none";
document.getElementById('finalFrog2').style.display = "none";
document.getElementById('finalFrog3').style.display = "none";
document.getElementById('finalFrog4').style.display = "none";
document.getElementById('finalFrog5').style.display = "none";

function checkFrogger() {
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
    document.getElementById('finalFrog1').style.display = "block";
    document.getElementById('finalFrog2').style.display = "block";
    document.getElementById('finalFrog3').style.display = "block";
    document.getElementById('finalFrog4').style.display = "block";
    document.getElementById('finalFrog5').style.display = "block";
    console.log("won");
  }
}


/*
sprite.style.left = start + 'px';
let pos = parseInt(sprite.style.left, 10);
let id = setInterval(frame, speed); //speed
function frame() {
  pos++;
  sprite.style.left = pos + "px";

*/
function LogFloatLeftToRight(sprite, speed) {
  let pos = parseInt(frogger.style.left, 10)
  let id = setInterval(frame, speed);



  function frame() {
    let pos = parseInt(frogger.style.left, 10)
    pos++;
    froggerX = pos;
    updateFroggerPosition();
    if (froggerX == 650) {
      clearInterval(id)
      froggerX = 325;
      frogger.style.left = froggerX + "px";
      froggerY = 645;
      frogger.style.top = froggerY + "px";
      updateFroggerPosition()
    } else if (parseInt(getComputedStyle(sprite).top, 10) != froggerY - 5) {
      if (froggerY == 645) {
        clearInterval(id)
        froggerX = 325
      }
      clearInterval(id)
      updateFroggerPosition()
    }
  }
}


function LogFloatRightToLeft(sprite, speed) {
  let id = setInterval(frame, speed);
  let pos = parseInt(frogger.style.left, 10)

  function frame() {
    let pos = parseInt(frogger.style.left, 10)
    pos--;
    froggerX = pos;
    updateFroggerPosition();
    if (froggerX == 0) {
      clearInterval(id)
      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()
    } else if (parseInt(getComputedStyle(sprite).top, 10) != froggerY - 5) {
      if (froggerY == 645) {
        froggerX = 325
      }
      clearInterval(id)
      updateFroggerPosition()
    }
  }
}
//  if (parseInt(sprite.style.left, 10) >= parseInt(frogger.style.left, 10) - parseInt(getComputedStyle(sprite).width, 10) + 10 && parseInt(sprite.style.left) <= parseInt(frogger.style.left, 10) + parseInt(getComputedStyle(sprite).width, 10) - 10 && parseInt(getComputedStyle(sprite).top, 10) == froggerY + 5)

function checkLogCollision() {
  let elem = document.getElementsByClassName("float")
  for (let i = 0; i < elem.length; i++) {
    sprite = elem[i]


    if (parseInt(frogger.style.left, 10) >= (parseInt(sprite.style.left, 10) - 5) && parseInt(frogger.style.left, 10) <= (parseInt(sprite.style.left) + parseInt(getComputedStyle(sprite).width, 10)) && parseInt(getComputedStyle(sprite).top, 10) == froggerY - 5) {
      ridingSprite = sprite;
      if (sprite.className.includes("longLog") || sprite.className.includes("twoturtles") || sprite.className.includes("mediumLog")) {

        if (sprite.className.includes("twoturtles")) {

          LogFloatRightToLeft(sprite, turtleSpeed)
        } else {

          LogFloatRightToLeft(sprite, logSpeed)
        }
        console.log('going left')

      } else {
        if (sprite.className.includes("threeturtles")) {
          LogFloatLeftToRight(sprite, turtleSpeed)
        } else {
          LogFloatLeftToRight(sprite, logSpeed)
        }
        console.log('going right')
      }

    }
  }
}


function checkWaterCollision() {
  let elem = document.getElementsByClassName("float")
  for (let i = 0; i < elem.length; i++) {
    sprite = elem[i]
    if (parseInt(frogger.style.left, 10) >= (parseInt(sprite.style.left, 10) - 5) && parseInt(frogger.style.left, 10) <= (parseInt(sprite.style.left) + parseInt(getComputedStyle(sprite).width, 10)) && parseInt(getComputedStyle(sprite).top, 10) == froggerY - 5) {
      ridingSprite = sprite;
    }
  }
  if (45 < froggerY && froggerY < 345) {
    console.log("in da water")
    console.log(froggerY)
    if (ridingSprite == "") {
      froggerY = 645;
      froggerX = 325;
      updateFroggerPosition()
      timeleft = 20;
      console.log("splash")
    }
  }

}
let turtleSpeed = 7;
let logSpeed = 10;

timer();
leftToRightAnimation("slowCar2", 20, 250)
rightToLeftAnimation("largeTruck", 25, 350);
rightToLeftAnimation("slowCar", 25, 250);
leftToRightAnimation("copCar", 10, 500);
rightToLeftAnimation("fireTruck", 25, 500);
rightToLeftAnimation("longLog", logSpeed, 500);
leftToRightAnimation("smallLog", logSpeed, 250);
rightToLeftAnimation("mediumLog", logSpeed, 300);
leftToRightAnimation("threeturtles", turtleSpeed, 450);
rightToLeftAnimation("twoturtles", turtleSpeed, 450);
