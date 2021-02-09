/* 
    Maybe use a Linked List for the snake body
*/

var snake;

var fruit;

function setup() {
  createCanvas(800, 640);

  snake = new Snake(width / 2, height / 2, 30, 30, color(0, 255, 0));

  fruit = new Fruit(color(255, 0, 0));
}

function draw() {
  background(51);

  snake.draw();
  snake.move();
  snake.eatFruit(fruit);

  fruit.draw();
}

function startGame() {
  console.log("Game Over");
  snake.setX(width / 2);
  snake.setY(height / 2);
  fruit = new Fruit(color(255, 0, 0));
}
