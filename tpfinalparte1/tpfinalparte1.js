//TRABAJO PRÁCTICO FINAL (PARTE 1)
// CELESTE BETANCU, COMISIÓN 5
// TEMÁTICA: TARZÁN
// LINK AL VIDEO: https://youtu.be/faxfcIJCZNw

let textos = [];
let fondos = [];
let pantalla = 0;
let historial = [];
let sonido;
let reproducido = false;

function preload() {
  soundFormats('mp3');
  textos = loadStrings('data/textos.txt');
  fondos = loadStrings('data/fondos.txt');
  sonido = loadSound('data/jungla.mp3');

  for (let i = 0; i <= 15; i++) {
    fondos[i] = loadImage("data/imagen" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(180);

  dibujarPantalla(pantalla);
}

function mousePressed() {
  let anchoBoton = 100;
  let altoBoton = 40;
  let xSiguiente = width - 120;
  let yBoton = height - 60;

  // loop del sonido
  if (!reproducido) {
    sonido.loop();
    reproducido = true;
  }

  // bifurcación pantalla 9
  if (pantalla === 9) {
    let anchoBotonBifurc = 200;

    if (detectarBoton(width / 2 - 200, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(10); // final
    } else if (detectarBoton(width / 2 + 20, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(11); // sigue
    }
  }

  // bifurcación pantalla 12
  else if (pantalla === 12) {
    let anchoBotonBifurc = 200;

    if (detectarBoton(width / 2 - 200, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(13); // final
    } else if (detectarBoton(width / 2 + 20, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(14); // final
    }
  }

  // pantalla 11 -> pasa a 12
  else if (pantalla === 11) {
    if (detectarBoton(xSiguiente, yBoton, anchoBoton, altoBoton)) {
      SiguientePantalla(12);
    }
  }

  // navegación lineal hasta la primera bifurcación
  else if (pantalla < 9 && detectarBoton(xSiguiente, yBoton, anchoBoton, altoBoton)) {
    SiguientePantalla(pantalla + 1);
  }

  // botón créditos post finales
  else if ((pantalla === 10 || pantalla === 13 || pantalla === 14) &&
           detectarBoton(width / 2 - 50, yBoton, 100, altoBoton)) {
    SiguientePantalla(15);
  }

  // botón reiniciar post créditos
  else if (pantalla === 15 && detectarBoton(width / 2 - 50, yBoton, 100, altoBoton)) {
    pantalla = 0;
    historial = [];
  }
}
