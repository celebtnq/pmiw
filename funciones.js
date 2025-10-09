function SiguientePantalla(NuevaPantalla) {
  historial.push(pantalla); // guardar la pantalla actual en el historial
  pantalla = NuevaPantalla;
}

function VolverPantalla() {
  if (historial.length > 0) {
    pantalla = historial.pop();
  }
}

function FondoDeTexto(texto) {
  textSize(16);
  let margen = 20;
  let anchoMax = width * 0.8;
  let altoTexto = textAscent() + textDescent() + margen * 2;
  let posicionTextoY = height - altoTexto - 100;
  fill(255, 200);
  rect(width / 2 - anchoMax / 2, posicionTextoY + margen, anchoMax, altoTexto + 10, 10);
  fill(0);
  textAlign(LEFT, CENTER);
  text(texto, width / 2 - anchoMax / 2 + margen, posicionTextoY + margen, anchoMax - margen * 2, altoTexto);
}

function dibujarBoton(x, y, an, al, texto) {
  if (detectarBoton(x, y, an, al)) {
    fill(70);
  } else {
    fill(135);
  }
  rect(x, y, an, al, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + an / 2, y + al / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
