'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
//let bg;


function setup() {
  cnv = createCanvas(w, h);
  //bg = loadImage('asset/hole.jpg');

  textFont('Futura');

  player = new Player();

  //coins[0] = new Coin();
  coins.push(new Coin());
}

function draw() {
//background(bg);

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  //
  // } else if (state === 'level 1' && points > 50) {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else {
  //
  // }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key == ' ') {
    player.direction = 'still'
  }
}

function title() {
  background(242, 205, 94);
  textSize(80);
  textFont('Futura');
  fill(255);
  textAlign(CENTER);
  text('Rabbit Hole', w / 2, h / 5);

  textSize(30);
  text('click anywhere to start!', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(107, 242, 217);
  //text('click for points', w/2, h - 30);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }

  player.display();
  player.move();

  // coins[0].display();
  // coins[0].move();

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  //check for collision, if there is a collision increase points by 1
  if (dist(player.x, player.y, coins[0].x, coins[0].y) <= (player.r + coins[0].r) / 2) {
    points++;
    console.log(points);
  }
  text(`pOiNtS: ${points}`, w / 7, h / 15);

}

function level1MouseClicked() {
  // points++;
  // //points += 1;
  // //points = points + 1;
  // console.log('points = ' + points);
  // if (points >= 10){
  //   state = 'you win';
  // }


}

function youWin() {
  background(206, 75, 242);
  textSize(80);
  textFont('Futura');
  stroke(255);
  text('You save the Alice', w / 2, h / 2);

  textSize(30);
  text('click anywhere to restart!', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
