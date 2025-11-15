class Gorila {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    image(gorila, this.posX - 30, this.posY - 70, 120, 160);
  }

  tarzanCerca(tarzan) {
    let distancia = dist(this.posX + 60/2, this.posY + 60/2, tarzan.posX, tarzan.posY);
    return distancia < 120;
  }
}
