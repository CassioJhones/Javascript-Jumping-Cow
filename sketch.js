function setup() {
  createCanvas(700, 400);
  sTrilha.loop();
}

//TELA
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialdoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  podeMover();
}

