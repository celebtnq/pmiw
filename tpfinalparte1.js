let textos = [];
let fondos = [];
let pantalla = 0;
let historial = [];
let sonido;
let reproducido = false;

function preload () {
  
  soundFormats ('mp3');
  textos = loadStrings ('data/textos.txt');
  fondos = loadStrings ('data/fondos.txt');
  sonido = loadSound ('data/jungla.mp3');
  
  for (let i = 0; i <= 15; i++) {
    
    fondos[i] = loadImage ("data/imagen" + i + ".png"); 
    
  }
}

function setup() {

  createCanvas (640, 480);
  
}


function draw() {
  
  background (180);
  
  if (fondos[pantalla]) {
    image(fondos[pantalla], 0, 0, width, height); //acá hago que las imagenes de fondo coincidan con el num de pantalla
  }
  if (pantalla !== 15) {
     FondoDeTexto(textos[pantalla]); //acá le digo que no me dibuje el recuadro de los textos si estoy en la pantalla de creditos
  }
  
 if (pantalla === 9) { 
    dibujarBoton(width / 2 - 200, height - 60, 200, 40, "Lo lleva hacia los gorilas");
    dibujarBoton(width / 2 + 20, height - 60, 200, 40, "Desconfía y los oculta");
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
  } else if (pantalla === 12) { 
    dibujarBoton(width / 2 - 200, height - 60, 200, 40, "Luchar junto a los gorilas");
    dibujarBoton(width / 2 + 20, height - 60, 200, 40, "Huir con Jane");
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
  } else if (pantalla === 10 || pantalla === 13 || pantalla === 14) { 
    dibujarBoton(width / 2 - 50, height - 60, 100, 40, "Créditos");
  } else if (pantalla === 15) { 
    dibujarBoton(width / 2 - 50, height - 60, 100, 40, "Reiniciar");
  }

 let BifFinalCreditos = (pantalla === 9 || pantalla === 12 || pantalla === 10 || pantalla === 13 || pantalla === 14 || pantalla === 15); 
 

    if (pantalla < textos.length - 1 && !BifFinalCreditos) { //que muestre el boton "siguiente" en todas las pantallas excepto en los finales y en los créditos
      dibujarBoton(width - 120, height - 60, 100, 40, "Siguiente");
    }

    if (pantalla > 0 && !BifFinalCreditos) {
      dibujarBoton(20, height - 60, 100, 40, "Atrás"); //que muestre el boton "atras" en todas las pantallas excepto en la primera, finales y créditos
    }
  }

function mousePressed() {
  //botones sig y atras
  
  let anchoBoton = 100;
  let altoBoton = 40;
  let xSiguiente = width - 120;
  let xAtras = 20;
  let yBoton = height - 60; 
  
  
  //loop del sonido
  if (!reproducido) {
    sonido.loop();
    reproducido = true;
  }
  
  //boton atras
  if (pantalla > 0 && detectarBoton(xAtras, yBoton, anchoBoton, altoBoton)) {
    VolverPantalla();
    return; 
  }

  //bifurcación pantalla 9
  if (pantalla === 9) {
    let anchoBotonBifurc = 200; 
    
    // opción 1: "Lo lleva hacia los gorilas" -> pantalla 10 (final)
    if (detectarBoton(width / 2 - 200, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(10);
    // opción 2: "Desconfía y los oculta" -> pantalla 11 (sigue)
    } else if (detectarBoton(width / 2 + 20, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(11);
    }
    return; 
  }

  //bifurcación pantalla 12
  if (pantalla === 12) {
    let anchoBotonBifurc = 200;
    
    // opción 1: "Luchar con los gorilas" -> pantalla 13 (final)
    if (detectarBoton(width / 2 - 200, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(13);
    // opción 2: "Huir con Jane" -> pantalla 14 (final)
    } else if (detectarBoton(width / 2 + 20, yBoton, anchoBotonBifurc, altoBoton)) {
      SiguientePantalla(14);
    }
    return; 
  }
  
  
  if (pantalla === 11) {
    if (detectarBoton(xSiguiente, yBoton, anchoBoton, altoBoton)) {
        SiguientePantalla(12);
        return;
    }
  }

  // navegacion lineal hasta la primera bifurcacion
  if (pantalla < 9 && detectarBoton(xSiguiente, yBoton, anchoBoton, altoBoton)) {
    SiguientePantalla(pantalla + 1);
    return;
  }
  
  //boton creditos post finales
  if ((pantalla === 10 || pantalla === 13 || pantalla === 14) && detectarBoton(width / 2 - 50, yBoton, 100, altoBoton)) {
    SiguientePantalla(15); // creditos
    return;
  }
  
  //boton reiniciar post creditos
   if (pantalla === 15 && detectarBoton(width / 2 - 50, yBoton, 100, altoBoton)) {
    pantalla = 0;      // vuelve a la pantalla 0
    historial = [];    // limpia el historial
    return;
  }
}
