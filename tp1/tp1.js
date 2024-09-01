// TP1 CELESTE BETANCU
// COMISIÓN 5
// LINK AL VIDEO https://www.youtube.com/watch?v=F3zDXOwLKqY

//no hace falta aclarar el tipo de variable, todas serán llamadas "let"

let cant = 10
let cambio = false;
let img;

function preload(){
 
  img = loadImage ("imagen.jpg");

}

function setup() {
  
  createCanvas (800,400);
  rectMode (CENTER);
  
}


function draw() {

  image (img, 0, 0);
  
   for (let i = 0; i < cant; i++) {
    let tam = 200 - (i * 20);
    
    for (let j = 0; j < 4; j++) {
      let posX, posY;
      let c1, c2;
      
      if (j == 0) {  // arriba izq
        posX = 500;
        posY = 100;
        if (cambio) {
          c1 = color (random(255), random(255), random(255));  // Color aleatorio 1
          c2 = color (random(255), random(255), random(255));  // Color aleatorio 2
        } else {
          c1 = color ('#014D20');  // verde oscuro original. ACLARACIÓN: deben agregarse las comillas simples para los colores.
          c2 = color ('#9FEABD');  // Color final original
        }
      } else if (j == 1) {  // arriba der
        posX = 700;
        posY = 100;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));  // Color aleatorio 1
          c2 = color(random(255), random(255), random(255));  // Color aleatorio 2
        } else {
          c1 = color('#9D060B');  // bordo original
          c2 = color('#FFC1C3');  // Color final original
        }
      } else if (j == 2) {  // abajo izq
        posX = 500;
        posY = 300;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));  // Color aleatorio 1
          c2 = color(random(255), random(255), random(255));  // Color aleatorio 2
        } else {
          c1 = color('#622700');  // marrón original
          c2 = color('#FFE795');  // Color final original
        }
      } else {  // abajo der
        posX = 700;
        posY = 300;
        if (cambio) {
          c1 = color(random(255), random(255), random(255));  // Color aleatorio 1
          c2 = color(random(255), random(255), random(255));  // Color aleatorio 2
        } else {
          c1 = color('#4F1C86');  // violeta original
          c2 = color('#E3C9FF');  // Color final original
        }
      }
      
      // Calculamos el color intermedio utilizando lerpColor
      let inter = map(i, 0, cant-1, 0, 1); // Interpolación lineal
      let c = lerpColor(c1, c2, inter);
      
      fill(c);
      noStroke();
      rect(posX, posY, tam, tam);
    }
  }
}

function mousePressed() {
  // Cambiar el estado de los colores al hacer clic
  cambio = !cambio;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // resetear los colores al estado original al presionar 'R'. ACLARACIÓN: se debe agregar un = para igualar en este lenguaje.
    cambio = false;
  }
}
  
