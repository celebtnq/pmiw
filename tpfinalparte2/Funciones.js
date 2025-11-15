function controlarPantalla() {
  switch (pantalla) {
    case 0:
      dibujarMenu();
    break;
    case 1:
      dibujarInstrucciones();
    break;
    case 2:
      dibujarCreditos();
    break;
    case 3:
      if (fondos[3]) {
        image(fondos[3], 0, 0, width, height); 
      }
      objJuego.dibujar();  //logica principal del juego
        if (objJuego.tarzan.vida <= 0) {
          sonidoPerdiste.play();
          sonidoFondo.stop(); //al perder, no se reproduce mas el sonido de fondo.
          
          pantalla = 4; // perdiste
        } else if (objJuego.contarCazadoresMuertos() >= objJuego.cantidadCazadores) {
          sonidoGanaste.play();
          sonidoFondo.stop(); //al ganar, no se reproduce mas el sonido de fondo.
          pantalla = 5; // ganaste
            }
    break;
    case 4:
      tarzanPerdio();
    break;
    case 5:
      tarzanGano();
    break;
    }
}

function controlarMouse(){
  
  if(!reproducido) {
    sonidoFondo.loop();
    reproducido = true;
  }
  
switch (pantalla) {
  case 0: // MENÚ
    if (detectarBoton(width/2 - 75, 200, 150, 50)) {
      sonidoBoton.play();
      pantalla = 3; // jugar
      } else if (detectarBoton(width/2 - 75, 280, 150, 50)) {
        sonidoBoton.play();
        pantalla = 1; // instrucciones
      } else if (detectarBoton(width/2 - 75, 360, 150, 50)) {
        sonidoBoton.play();
        pantalla = 2; // creditos
  }
  break;
  case 1: // instrucciones
  case 2: // creditos
    if (detectarBoton(20, 20, 100, 40)) {
      sonidoBoton.play();
      pantalla = 0; // Volver al menú
     }
     break;
  case 4: // perdiste
  case 5: // ganaste
    if (detectarBoton(width / 2 - 75, 380, 150, 50)) {
      pantalla = 0; // volver al menu
      objJuego = new Juego(5); 
      sonidoFondo.loop(); //al reiniciar el juego, comienza la musica de fondo otra vez
  }
  break;
  }
}

function dibujarMenu() {
  if (fondos[0]) {
    image(fondos[0], 0, 0, width, height);
  }
  dibujarBoton(width/2 - 75, 200, 150, 50, "Jugar");
  dibujarBoton(width/2 - 75, 280, 150, 50, "Instrucciones");
  dibujarBoton(width/2 - 75, 360, 150, 50, "Créditos");
}

function dibujarInstrucciones() {
  if (fondos[1]) {
    image(fondos[1], 0, 0, width, height);
  }
  dibujarBoton(20, 20, 100, 40, "MENÚ");
}

function dibujarCreditos() {
  if (fondos[2]) {
    image(fondos[2], 0, 0, width, height)
  }
  dibujarBoton(20, 20, 100, 40, "MENÚ");
}

function dibujarBoton(x, y, an, al, texto) {
  if (detectarBoton(x, y, an, al)) {
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

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function mostrarVidas (cantidad){
  for (let i = 0; i < cantidad; i++){
  image(corazon, 20 + i * 40, 20, 35, 35);
  }
}

function tarzanPerdio() {
  if (fondos[4]) {
    image(fondos[4], 0, 0, width, height);
  }
  dibujarBoton(width / 2 - 75, 380, 150, 50, "MENÚ");
}

function tarzanGano() {
  if (fondos[5]) {
    image(fondos[5], 0, 0, width, height);
  }
  dibujarBoton(width / 2 - 75, 380, 150, 50, "MENÚ");
}
