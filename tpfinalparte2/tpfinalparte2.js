let objJuego;
let pantalla = 0;
let fondos = [];
let tarzan = [];
let gorila;
let cazador;
let fruta;
let bala;

function preload() {
  fondos[0] = loadImage("data/menu.png");
  fondos[1] = loadImage("data/instrucciones.png");
  fondos[2] = loadImage("data/creditos.png");
  fondos[3] = loadImage("data/juego.png");
  fondos[4] = loadImage("data/perdiste.png");
  fondos[5] = loadImage("data/ganaste.png");
  tarzan[0] = loadImage("data/tarzanCargado.png");
  tarzan[1] = loadImage("data/tarzanSinCarga.png");
  gorila = loadImage("data/gorila.png");
  cazador = loadImage("data/cazador.png");
  fruta = loadImage("data/fruta.png");
  bala = loadImage("data/bala.png");
  
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(5);
}

function draw() {
  background (0, 100, 0);
  controlarPantalla();
}

function mousePressed() {
  controlarMouse();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
