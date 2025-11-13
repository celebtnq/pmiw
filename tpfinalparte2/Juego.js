class Juego {
  constructor(cantidadCazadores) {   //metodo que me define las particularidades
    this.cantidadCazadores = cantidadCazadores; // defino cuantos cazadores puedo tener
    this.crearTarzan();
    this.crearCazadores();
    this.crearGorilas();
  }

  dibujar() {
    this.tarzan.dibujar();

    for (let i=0; i < this.gorilas.length; i++) {
      this.gorilas[i].dibujar();

      if (this.gorilas[i].tarzanCerca(this.tarzan)) {
        this.tarzan.recargar();
      }
    }

    for (let i = 0; i < this.cazadores.length; i++) { // length guarda todos los cazadores del juego. devuelve 15, porque hay 15 cazadores.
      this.cazadores[i].movimiento();
      this.cazadores[i].dibujar();
    }

    fill(255);
    textSize(16);
    text("Cazadores eliminados: " + this.contarCazadoresMuertos(), width - 200, 20);


    this.controlarDisparosACazadores();
    this.controlarBalasDeCazadores();

  }

  crearCazadores() {
    this.cazadores = [];
    for (let i=0; i < this.cantidadCazadores; i++) {
      let posXInicial = -50 - (i*80);
      let posYInicial = random(50, height - 250);
      this.cazadores[i] = new Cazador(posXInicial, posYInicial); //creo a los cazadores antes de que se vean, les doy una separacion de 80px y que aparezcan en una posY random pero lejos d tarzan
    }
  }

  crearTarzan() {
    this.tarzan = new Tarzan(width/2, 400); //particularidades del juego
  }

  crearGorilas() {
    this.gorilas = [];
    this.gorilas[0] = new Gorila(50, 400);
    this.gorilas[1] = new Gorila(width - 110, 400);
  }


  teclaPresionada(keyCode) {
    this.tarzan.teclaPresionada(keyCode); //el juego le avisa a tarzan
  }

  controlarDisparosACazadores() {
    if (this.tarzan.haDisparadoBala()) {
      for (let i=0; i < this.cantidadCazadores; i++) {
        this.cazadores[i].haTocadoLaBala(this.tarzan.bala); //controla disparos y pregunta c la pos de la bala si cumple la condicion o no
      }
    }
  }

  controlarBalasDeCazadores() {
    for (let i = 0; i < this.cazadores.length; i++) {
      let bala = this.cazadores[i].bala;
      if (bala.disparada && bala.activa && dist(this.tarzan.posX + 25, this.tarzan.posY + 25, bala.posX, bala.posY) < 30) {
        this.tarzan.perderVida();
        bala.desactivar();
      }
    }
  }

  contarCazadoresMuertos() {
    let muertos = 0;
    for (let i = 0; i < this.cazadores.length; i++) {
      if (!this.cazadores[i].vida) {
        muertos++;
      }
    }
    return muertos;
  }
}
