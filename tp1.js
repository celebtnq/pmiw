// TP1 CELESTE BETANCU
// COMISIÓN 5
// LINK AL VIDEO: https://youtu.be/58xXd_UUutc

let cant = 10;
let cambio = false;
let img;

function preload() {
  img = loadImage("data/imagen.jpg");
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
}

function draw() {
  // refe
  image(img, 0, 0);

  for (let i = 0; i < cant; i++) {
    let tam = 200 - (i * 20);

    for (let j = 0; j < 4; j++) {
      let posX, posY;
      let c1, c2;

      // posiciones y colores x esquinas
      if (j == 0) {  // arriba izq.
        posX = 500;
        posY = 100;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));
          c2 = color(random(255), random(255), random(255));
        } else {
          c1 = color('#014D20');
          c2 = color('#9FEABD');
        }
      } else if (j == 1) {  // arriba der.
        posX = 700;
        posY = 100;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));
          c2 = color(random(255), random(255), random(255));
        } else {
          c1 = color('#9D060B');
          c2 = color('#FFC1C3');
        }
      } else if (j == 2) {  // abajo izq.
        posX = 500;
        posY = 300;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));
          c2 = color(random(255), random(255), random(255));
        } else {
          c1 = color('#622700');
          c2 = color('#FFE795');
        }
      } else {  // abajo der.
        posX = 700;
        posY = 300;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));
          c2 = color(random(255), random(255), random(255));
        } else {
          c1 = color('#4F1C86');
          c2 = color('#E3C9FF');
        }
      }

// funciones propias
  let c = calcularColor(c1, c2, i, cant);  // retorna un color
  dibujarCuadrado(posX, posY, tam, c);     // dibuja con ese color
    }
  }
}

// funcion propia no retorna
function dibujarCuadrado(posX, posY, tam, c) {
  fill(c);
  noStroke();
  rect(posX, posY, tam, tam);
}

// función propia si retorna
function calcularColor(c1, c2, i, cant) {
  let inter = map(i, 0, cant - 1, 0, 1);
  return lerpColor(c1, c2, inter);
}

// interacciones
function mousePressed() {
  cambio = !cambio;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    cambio = false; // reiniciar
  }
}
