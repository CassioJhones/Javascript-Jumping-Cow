//CODIGOS DO SOM
let sTrilha;
let sColisao;
let sPonto;


//CODIGOS IMAGENS

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//PRÉ-CARREGAMENTO DO JOGO
function preload(){
  sTrilha = loadSound("sons/trilha.mp3")
  sColisao = loadSound("sons/colidiu.mp3")
  sPonto = loadSound("sons/pontos.wav")
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
}