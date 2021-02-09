class SnakeBody extends Element {
  constructor(index, x, y) {
    super(x, y, 30, 30, color(0, 255, 0));
    this.index = index;
  }
}
