class Dot {
  constructor(x, y, mx, my) {
    this.x = x;
    this.y = y;
    this.matrixX = round(mx);
    this.matrixY = round(my);
    this.matrixY = 27 - this.matrixY;
    this.clicked = false;
    print(this.matrixX);
    print(this.matrixY);
  }
  show() {
    if (this.clicked) {
      fill(0, 255, 0);
      ellipse(this.x, this.y, 10);

    } else {
      if (this.y < canvas.height / 2) {
        fill(0, 200, 0, 100);
      } else {
        fill(0, 200, 0);
      }
      ellipse(this.x, this.y, 4);

    }
  }
}
