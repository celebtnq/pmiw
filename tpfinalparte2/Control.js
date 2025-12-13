class Control {
  constructor() {
    this.pantalla = 0;
}

dibujar() {
  switch (this.pantalla) {
    case 0:
      this.dibujarMenu();
    break;
    case 1:
      this.dibujarInstrucciones();
    break;
    case 2:
      this.dibujarCreditos();
    break;
    case 3:
      if (fondos[3]) {
        image(fondos[3], 0, 0, width, height); 
      }
      if (objJuego){
      objJuego.dibujar();
      this.mostrarVidas(objJuego.tarzan.vida)//logica principal del juego
        
        if (objJuego.tarzan.vida <= 0) {
          sonidoPerdiste.play();
          sonidoFondo.stop(); //al perder, no se reproduce mas el sonido de fondo.
          this.pantalla = 4; // perdiste
        } else if (objJuego.contarCazadoresMuertos() >= objJuego.cantidadCazadores) {
          sonidoGanaste.play();
          sonidoFondo.stop(); //al ganar, no se reproduce mas el sonido de fondo.
          this.pantalla = 5; // ganaste
            }
      }
    break;
    case 4:
      this.tarzanPerdio();
    break;
    case 5:
      this.tarzanGano();
    break;
    }
}

controlarMouse(){
  
  if(!reproducido) {
    sonidoFondo.loop();
    reproducido = true;
  }
  
switch (this.pantalla) {
  case 0: // MENÚ
    if (this.detectarBoton(width/2 - 75, 200, 150, 50)) {
      sonidoBoton.play();
      objJuego = new Juego(5);
      this.pantalla = 3; // jugar
      } else if (this.detectarBoton(width/2 - 75, 280, 150, 50)) {
        sonidoBoton.play();
        this.pantalla = 1; // instrucciones
      } else if (this.detectarBoton(width/2 - 75, 360, 150, 50)) {
        sonidoBoton.play();
        this.pantalla = 2; // creditos
  }
  break;
  case 1: // instrucciones
  case 2: // creditos
    if (this.detectarBoton(20, 20, 100, 40)) {
      sonidoBoton.play();
      this.pantalla = 0; // Volver al menú
     }
     break;
  case 4: // perdiste
  case 5: // ganaste
    if (this.detectarBoton(width / 2 - 75, 380, 150, 50)) {
      this.pantalla = 0; // volver al menu
      objJuego = new Juego(5); 
      sonidoFondo.loop(); //al reiniciar el juego, comienza la musica de fondo otra vez
  }
  break;
  }
}
//pantallas
dibujarMenu() {
  if (fondos[0]) {
    image(fondos[0], 0, 0, width, height);
  }
  this.dibujarBoton(width/2 - 75, 200, 150, 50, "Jugar");
  this.dibujarBoton(width/2 - 75, 280, 150, 50, "Instrucciones");
  this.dibujarBoton(width/2 - 75, 360, 150, 50, "Créditos");
}

dibujarInstrucciones() {
  if (fondos[1]) {
    image(fondos[1], 0, 0, width, height);
  }
  this.dibujarBoton(20, 20, 100, 40, "MENÚ");
}

dibujarCreditos() {
  if (fondos[2]) {
    image(fondos[2], 0, 0, width, height)
  }
  this.dibujarBoton(20, 20, 100, 40, "MENÚ");
}

dibujarBoton(x, y, an, al, texto) {
  if (this.detectarBoton(x, y, an, al)) {
    fill(99, 106, 10);
  } else {
    fill(136, 195, 41);
  }
  rect(x, y, an, al, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x + an / 2, y + al / 2);
}

detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

//deje esta funcion global xq es una funcion UI
mostrarVidas (cantidad){
  for (let i = 0; i < cantidad; i++){
  image(corazon, 20 + i * 40, 20, 35, 35);
  }
}

tarzanPerdio() {
  if (fondos[4]) {
    image(fondos[4], 0, 0, width, height);
  }
  this.dibujarBoton(width / 2 - 75, 380, 150, 50, "MENÚ");
}

tarzanGano() {
  if (fondos[5]) {
    image(fondos[5], 0, 0, width, height);
  }
  this.dibujarBoton(width / 2 - 75, 380, 150, 50, "MENÚ");
}
}
