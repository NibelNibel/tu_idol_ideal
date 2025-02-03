let idol = [
  ["1","1_2","1_3"],
  ["2","2_2","2_3"],
  ["3","3_2","3_3"],
  ["4","4_2","4_3"],
  ["5","5_2","5_3"],
  ["6","6_2","6_3"],
  ["7","7_2","7_3"],
  ["8","8_2","8_3"],
  ["9","9_2","9_3"],
  ["10","10_2","10_3"],
  ["11","11_2","11_3"],
  ["12","12_2","12_3"],
];
var voz;
var waifu = 0;
var max = 0;
var bonus = 0;
var gen = "";
var posicion = 0;
var proceso = false;
var variante = 0;
var nom = "";
var isopodo = false;
//marcos
let marco = document.getElementById("marco");
let marco2 = document.getElementById("marco2");
let marco3 = document.getElementById("marco3");
let marco4 = document.getElementById("marco4");
function restaurar(){
  marco.src = "logos/muse.png";
  marco2.src = "logos/aqours.png";
  marco3.src = "logos/nijis.png";
  marco4.src = "logos/liella.png";
}
function muse(){
  gen = "musas";
  if (proceso){
    verificar();
  }
  restaurar();
  marco.src = "logos/muse2.png";
}
function aqours(){
  gen = "aqours"
  if (proceso){
    verificar();
  }
  restaurar();
  marco2.src = "logos/aqours2.png";
}
function liellas(){
  gen = "liellas";
  if (proceso){
    verificar2();
  }
  restaurar();
  marco4.src = "logos/liella2.png";
}
function nijis(){
  gen = "nijis";
  if (proceso){
    verificar2();
  }
  restaurar();
  marco3.src = "logos/nijis2.png";
}
function verificar(){
  modo();
  let name = document.getElementById("name");
  let foto = document.getElementById("foto");
  var largo = Number(document.getElementById("txt1").value);
  var grosor = Number(document.getElementById("txt2").value);
  var dificultad = document.getElementById("dificultad").value;
  var perimetro = 3.14 * grosor;
  var potencia = largo + perimetro;
  potencia = potencia - max;
  potencia += bonus;
  if (largo == 0 || grosor == 0){
    alert("campos vacios o valor invalido!!")
  }
  else if (grosor == largo){
    alert("pene cuadrado ._.")
  }
  else if (grosor > (largo/2)){
    alert("pene absurdo :/\nel grosor no tiene sentido respecto al largo");
  }
  else if (largo < 7){
    alert("demasiado corto");
  }
  else if (largo > 27){
    alert("absurdamente largo");
  }
  else if (grosor < 2){
    alert("grosor insuficiente para complacer a alguna");
  }
  else if (grosor > 8){
    alert("absurdamente grueso, manda foto pija al +57 300 4407385");
  }
  else if (potencia <= 18){
    alert("Demasiado inofensivo")
  }
  else if(gen == ""){
    alert("selecciona una generacion");
  }
  else if (potencia > 39){
    alert("Matas a todas!!");
  }
  else{
    if (potencia > 18 && potencia <= 23){
    waifu = 0;
    posicion = idol[waifu][0];
    nom = "Ruby kurosawa";
    if (gen == "musas"){
      nom = "Rin hoshizora";
    }
  }
  else if (potencia > 23 && potencia <= 24){
    waifu = 1;
    posicion = idol[waifu][0];
    nom = "Yoshiko tsushima";
    if (gen == "musas"){
      nom = "Nico yazawa";
    }
  }
  else if (potencia > 24 && potencia <= 25){
    waifu = 2;
    posicion = idol[waifu][0];
    nom = "Riko sakurauchi";
    if (gen == "musas"){
      nom = "Maki nishikino";
    }
  }
  else if (potencia > 25 && potencia <= 26){
    waifu = 3;
    posicion = idol[waifu][0];
    nom = "Chika takami";
    if (gen == "musas"){
      nom = "Honoka kousaka";
    }
  }
  else if (potencia > 26 && potencia <= 27){
    waifu = 4;
    posicion = idol[waifu][0];
    nom = "Dia kurosawa";
    if (gen == "musas"){
      nom = "Umi sonoda";
    }
  }
  else if (potencia > 27 && potencia <= 28){
    waifu = 5;
    posicion = idol[waifu][0];
    nom = "You watanabe";
    if (gen == "musas"){
      nom = "Kotori minami";
    }
  }
  else if (potencia > 28 && potencia <= 29){
    waifu = 6;
    posicion = idol[waifu][0]
    nom = "Hanamaru kunikida";
    if (gen == "musas"){
      nom = "Hanayo koizumi";
    }
  }
  else if (potencia > 29 && potencia <= 32){
    waifu = 7;
    posicion = idol[waifu][0];
    nom = "Mari ohara";
    if (gen == "musas"){
      nom = "Eli ayase";
    }
  }
  else if (potencia > 32 && potencia <=39){
    waifu = 8;
    posicion = idol[waifu][0];
    nom = "Kanan matsuura";
    if (gen == "musas"){
      nom = "Nozomi tojo";
    }
  }
  foto.src = `${gen}/${posicion}.jpg`;
  name.textContent = nom;
  proceso = true;
  voz = new Audio(`${gen}_s/${idol[waifu][0]}.ogg`);
  }
}
function verificar2(){
  modo();
  let name = document.getElementById("name");
  let foto = document.getElementById("foto");
  var largo = Number(document.getElementById("txt1").value);
  var grosor = Number(document.getElementById("txt2").value);
  var dificultad = document.getElementById("dificultad").value;
  var perimetro = 3.14 * grosor;
  var potencia = largo + perimetro;
  potencia = potencia - max;
  potencia += bonus;
  if (largo == 0 || grosor == 0){
    alert("campos vacios o valor invalido!!")
  }
  else if (grosor == largo){
    alert("pene cuadrado ._.")
  }
  else if (grosor > (largo/2)){
    alert("pene absurdo :/\nel grosor no tiene sentido respecto al largo");
  }
  else if (largo < 7){
    alert("Demasiado corto");
  }
  else if (largo > 27){
    alert("absurdamente largo");
  }
  else if (grosor < 2){
    alert("Grosor insuficiente para complacer a alguna");
  }
  else if (grosor > 8){
    alert("absurdamente grueso, manda foto pija al +57 300 4407385");
  }
  else if (potencia <= 18){
    alert("Demasiado inofensivo")
  }
  else if(gen == ""){
    alert("selecciona una generacion");
  }
  else if (potencia > 39){
    alert("Matas a todas!!");
  }
  else{
    if (potencia > 18 && potencia <= 23){
      waifu = 0;
    posicion = idol[0][0];
    nom = "Mei yoneme";
    if (gen == "nijis"){
      nom = "Mia taylor";
    }
  }
  else if (potencia > 23 && potencia <= 24){
    waifu = 1;
    posicion = idol[1][0];
    nom = "Chisato arashi";
    if (gen == "nijis"){
      nom = "Rina tennoji"
    }
  }
  else if (potencia > 24 && potencia <= 25){
    waifu = 2;
    posicion = idol[2][0];
    nom = "Keke tang";
    if (gen == "nijis"){
      nom = "Kasumi nakasu";
    }
  }
  else if (potencia > 25 && potencia <= 26){
    waifu = 3;
    posicion = idol[3][0];
    nom = "Kanon shibuya";
    if (gen == "nijis"){
      nom = "Shioriko mifune";
    }
  }
  else if (potencia > 26 && potencia <= 27){
    waifu = 4;
    posicion = idol[4][0];
    nom = "Wien margarete";
    if (gen == "nijis"){
      nom = "Ayumu uehara";
    }
  }
  else if (potencia > 27 && potencia <= 28){
    waifu = 5;
    posicion = idol[5][0];
    nom = "Shiki wakana";
    if (gen == "nijis"){
      nom = "Ai miyashita";
    }
  }
  else if (potencia > 28 && potencia <= 29){
    waifu = 6;
    posicion = idol[6][0];
    nom = "Natsumi onitsuka";
    if (gen == "nijis"){
      nom = "Shizuku osaka";
    }
  }
  else if (potencia > 29 && potencia <= 30){
    waifu = 7;
    posicion = idol[7][0];
    nom = "Kinako sakurakoji";
    if (gen == "nijis"){
      nom = "Lanzhu zhong";
    }
  }
  else if (potencia > 30 && potencia <= 31){
    waifu = 8;
    posicion = idol[8][0];
    nom = "Tomari onitsuka";
    if (gen == "nijis"){
      nom = "Setsuna yuki";
    }
  }
  else if (potencia > 31 && potencia <= 32){
    waifu = 9;
    posicion = idol[9][0];
    nom = "Ren hazuki";
    if (gen == "nijis"){
      nom = "Karin asaka";
    }
  }
  else if (potencia > 32 && potencia <=39){
    waifu = 10;
    posicion = idol[10][0];
    nom = "Sumire heanna";
    if (gen == "nijis"){
      nom = "Kanata konoe";
      if (potencia > 35 && potencia <= 39){
        waifu = 11;
        posicion = idol[11][0];
        nom = "Emma verde";
      }
    }
  }
  foto.src = `${gen}/${posicion}.jpg`;
  proceso = true;
  name.textContent = nom;
  voz = new Audio(`${gen}_s/${idol[waifu][0]}.ogg`);
  }
}
function comenzar(){
  variante = 0;
  if (gen == ""){
    alert("selecciona generacion");
  }else{
  if (gen == "musas" || gen == "aqours"){
    verificar();
  }
  else if (gen == "liellas" || gen == "nijis"){
    verificar2();
  }
  }
}
function modo(){
  isopodo = false;
  if (proceso){
    voz.pause();
  }
let modo = document.getElementById("dificultad").value;
  if (modo == "normal"){
    max = 0;
    bonus = 0;
  }
  else if (modo == "hentai"){
    max = 2;
    bonus = 0;
  }
  else if (modo == "facil"){
    bonus = 2;
  }
}
function cam(){
  if (proceso){
    foto.src = `${gen}/${posicion}.jpg`;
    if (nom == "Sumire heanna" && isopodo && variante == 0){
      foto.src = "isopodo.jpg";
    }
  }else{
    alert("descubra su idol primero!!");
  }
}
function mover_i(){
  variante -= 1;
  if (variante == -1){
    variante = 2;
  }
  else if (variante == 3){
    variante = 0;
  }
  posicion = idol[waifu][variante];
  cam();
}
function mover_d(){
  variante += 1;
  if (variante == -1){
    variante = 2;
  }
  else if (variante == 3){
    variante = 0;
  }
  posicion = idol[waifu][variante];
  cam();
}
var sonando = false;
var uso = false;
function reproducir(){
  uso = true;
  if (proceso){
    if (isopodo){
      variante = 0;
    }
    if (uso){
    voz.pause();
    voz = new Audio(`${gen}_s/${idol[waifu][0]}.ogg`);
  }
    voz.play();
  }else{
    alert("no sexo idol = no audio");
  }
  if (nom == "Sumire heanna"){
    foto.src = "isopodo.jpg";
    isopodo = true;
  }
}
function cava(){
  alert("contenido premium:\n- fotos hots de melany yazawa\n- indicador de que le falta a tu pene para complacerla\n- chat hot con ella por 30 minutos\n- escaner con la camara para sacar las medidas de tu pene automaticamente\npor solo 20USD")
}
function ayudar(){
  alert("*lo ayuda*");
}


