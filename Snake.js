class Snake {
  constructor(x, y, width, height, color) {
    this.body = [];
    this.length = 1;
    this.color = color;

    this.head = new Element(x, y, width, height, color);
    this.speed = 3;

    this.tailX = this.head.getX() + this.head.width;
    this.tailY = this.head.getY();
  }

  setX(x) {
    this.head.x = x;
  }

  setY(y) {
    this.head.y = y;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  displayLength() {
    textSize(32);
    fill(255);
    text(`Length: ${this.length}`, 10, 30);
  }

  addTail() {
    this.length++;
    this.body.push(
      new SnakeBody(
        this.length - 1,
        this.tailX,
        this.tailY,
        this.head.width,
        this.head.height,
        this.color
      )
    );

    this.tailX += this.head.width;
  }

  draw() {
    this.head.draw();
    this.body.map((tail) => {
      tail.draw();
    });
    this.displayLength();
  }

  move() {
    this.moveHead();
    this.checkLimit();
  }

  moveHead() {
    if (keyCode === UP_ARROW || key === "w") {
      this.head.y -= this.speed;
      this.moveBody("y", -1);
    } else if (keyCode === LEFT_ARROW || key === "a") {
      this.head.x -= this.speed;
      this.moveBody("x", -1);
    } else if (keyCode === RIGHT_ARROW || key === "d") {
      this.head.x += this.speed;
      this.moveBody("x", 1);
    } else if (keyCode === DOWN_ARROW || key === "s") {
      this.head.y += this.speed;
      this.moveBody("y", 1);
    }
  }

  moveBody(axis, dir) {
    this.body.map((tail) => {
      if (axis === "x") tail.x += dir * this.speed;
      else tail.y += dir * this.speed;
    });
  }

  checkLimit() {
    if (
      this.head.x >= width ||
      this.head.x <= 0 ||
      this.head.y >= height ||
      this.head.y <= 0
    ) {
      this.body = [];
      this.length = 1;
      startGame();
    }
  }

  eatFruit(fruit) {
    if (
      fruit.getX() <= this.head.x &&
      this.head.x <= fruit.getX() + fruit.width
    ) {
      if (
        fruit.getY() - fruit.height <= this.head.y &&
        this.head.y <= fruit.getY() + 2 * fruit.height
      ) {
        this.addTail();
        fruit.init();
      }
    }
  }
}
