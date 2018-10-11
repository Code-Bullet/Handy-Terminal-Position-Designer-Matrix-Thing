var dots = [];



function setup() {
  window.canvas = createCanvas(800, 800);
  setDiamond();

}

function draw() {
  background(0);
  for (var d of dots) {
    d.show();
  }
}


function setDiamond() {
  var dotsWide = 2;
  var maxWidth = 27;
  var y = 10;
  var xoff = 13;
  var xoffdir = -1;

  for (var j = 0; j <= canvas.height; j += height / 28) {
    for (var i = 0; i < dotsWide; i++) {
      dots.push(new Dot((xoff + i) * canvas.width / 28 + 15, j + 15, xoff + i, j / (height / 28)));
    }
    if (xoff == 0 && xoffdir == -1) {
      xoffdir = 0;
    } else {
      if (xoff == 0) {
        xoffdir = 1;
      }
    }
    xoff += xoffdir;
    dotsWide += -2 * xoffdir;
  }


}

function mousePressed() {
  var min = 1000;
  var minIndex = 0;
  for (var i = 0; i < dots.length; i++) {
    if (dist(mouseX, mouseY, dots[i].x, dots[i].y) < min) {
      min = dist(mouseX, mouseY, dots[i].x, dots[i].y);
      minIndex = i;
    }
  }
  if (min > 50) {
    return;
  }
  dots[minIndex].clicked = !dots[minIndex].clicked;

}


function keyPressed() {
  switch (key) {
    case 'P':
      var string = "[";

      for (var d of dots) {
        if (d.clicked) {
          string += "[ " + d.matrixX + ", " + d.matrixY + "],";
        }
      }
      string = string.substring(0, string.length - 1);
      string += "]"
      createDiv(string);
      break;
  }

}
