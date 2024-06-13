//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro /2;

//raquete 1
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//raquete 2
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar 
let meusPontos = 0;
let pontosDoOponente = 0;

let colidiu = false;


function setup() {
    createCanvas(600, 400);
}

function draw() {
   background(0);
   mostraBolinha()
   movimentaBolinha()
   verificaColisaoBorda()
   mostraRaquete(xRaquete,yRaquete)
   mostraRaquete(xRaqueteOponente,yRaqueteOponente)
   movimentaMinhaRaquete() 
   verificaColisaoRaquete(xRaquete,yRaquete) 
   movimentaRaqueteOponente()
   verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
   incluiPlacar();
   marcaPonto(); }

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
    
function verificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -1;}
  if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1; } 
    } 

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}

function incluiPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}
