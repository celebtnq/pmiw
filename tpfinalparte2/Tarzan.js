class Tarzan {
  constructor(posX, posY) {   //metodo que me define las particularidades
    this.posX = posX;
    this.posY = posY;
    this.vida = 3;
    this.ancho = 60;
    this.alto = 100;
    this.bala = new Bala(-100, -100, -5);
    this.puedeDisparar = true;
  }

  dibujar() { //aca es donde voy a cambiar la imagen de tarzan p poner el png
    this.bala.dibujar(); //para q la bala aparezca detras del pj

    if (this.puedeDisparar) {
      image(tarzan[0], this.posX, this.posY- 50, 60, 100); //si cargó esta normal
    } else {
      image(tarzan[1], this.posX, this.posY- 50, 60, 100); //si no tiene balas está rojo
    }


  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzq();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDer(); // tarzan se mueve
    } else if (keyCode == 32) { //32 = barra espaciadora.
      this.dispararBala(); //si es la barra disparo
    }
  }

  moverDer() {
    this.posX += 15;
  }

  moverIzq() {
    this.posX -= 15;
  }

  dispararBala() {
    if (this.puedeDisparar) { //solamente si recargó
      let posXBala = this.posX + this.ancho / 2;
      let posYBala = this.posY - this.alto;
      this.bala = new Bala(posXBala, posYBala, -5); //que se cree una bala nueva
      this.bala.disparar(); //que se dispare
      this.puedeDisparar = false; //gastó la bala
    }
  }

  haDisparadoBala() {
    return this.bala.disparada && this.bala.activa;
  }

  recargar() {
    if (!this.puedeDisparar) { //sólo recarga si no tiene bala
      this.puedeDisparar = true; //ahora si puede disparar
      this.bala = new Bala(-100, -100, -5);
    }
  }

  perderVida() {
    sonidoPierdeVida.play();
    this.vida--;
  }
}
