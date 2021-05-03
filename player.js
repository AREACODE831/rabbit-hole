class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    // this.x = w;
    // this.y = h;
    // this.r = 60;
    this.speed = 2;
    this.direction = 'still';
    this.img = loadImage('asset/r.png');

  }

  display() {
  // fill(255);
  //  rect(this.x, this.y, this.r, this.r);
  // rect(this.x, this.y/10, this.r, this.r);
  //
  // rect(this.x, this.y, this.r, this.r);
  image(this.img, this.y, this.x, this.r, this.r);
  //  image(this.img, 0, 0);
    //image(this.img, 0, this.y/2, this.x, this.y);
    // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
  }

  move() {

    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
        //decrease y pos
        this.y -= this.speed;
        //y = y - speed;
        break;
      case 'down':
        //increase ypos
        this.y += this.speed;
        break;
      case 'right':
        //increase xpos
        this.x += this.speed;
        break;
      case 'left':
        //decreasing xpos
        this.x -= this.speed;
        break;
      default:
        break;
    }
  }
}
