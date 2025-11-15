function SiguientePantalla(NuevaPantalla) {
  pantalla = NuevaPantalla;
}

function dibujarPantalla(pantallaActual) { 

  if (fondos[pantallaActual]) { 
    image(fondos[pantallaActual], 0, 0, width, height);
  }

   if (pantallaActual !== 15) { 
    FondoDeTexto(textos[pantallaActual]); // <-- Se usa para acceder al array de textos
  }

  let yBoton = height - 60;
  let anBoton = 200; 
  let alBoton = 40;

  if (pantallaActual === 9) { 
    dibujarBoton(width / 2 - 200, yBoton, anBoton, alBoton, "Lo lleva hacia los gorilas");
    dibujarBoton(width / 2 + 20, yBoton, anBoton, alBoton, "Desconfía y los oculta");

  } else if (pantallaActual === 12) {
    dibujarBoton(width / 2 - 200, yBoton, anBoton, alBoton, "Luchar junto a los gorilas");
    dibujarBoton(width / 2 + 20, yBoton, anBoton, alBoton, "Huir con Jane");

  } else if (pantallaActual === 10 || pantallaActual === 13 || pantallaActual === 14) { 
    dibujarBoton(width / 2 - 50, yBoton, 100, alBoton, "Créditos");

  } else if (pantallaActual === 15) { 
    dibujarBoton(width / 2 - 50, yBoton, 100, alBoton, "Reiniciar");
  }


  let BifFinalOCredito = (pantallaActual === 9 || pantallaActual === 12 || pantallaActual === 10 || pantallaActual === 13 || pantallaActual === 14 || pantallaActual === 15);

  if (pantallaActual < textos.length - 1 && !BifFinalOCredito) {
    dibujarBoton(width - 120, yBoton, 100, alBoton, "Siguiente");
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
