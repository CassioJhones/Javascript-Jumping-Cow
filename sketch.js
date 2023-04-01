function setup() {
  createCanvas(500, 400);
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

