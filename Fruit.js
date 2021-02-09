class Fruit extends Element {
  constructor(color) {
    super(random(0, width - 30), random(0, height - 30), 30, 30, color);
  }

  init() {
    this.setX(random(0, width - 30));
    this.setY(random(0, height - 30));
    this.draw();
  }
}
