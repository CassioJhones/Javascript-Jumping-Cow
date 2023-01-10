//codigo do ator
let xAtor = 350;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor, 40,30);
}
//-----------SETAS PARA CONTROLE------------------------
function movimentaAtor(){ 
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yAtor += 3;
      }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  
}
//----------- COLISAO ----------------------
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro, alturaCarro,xAtor,yAtor,15)
    if(colisao){
      reseta();
      sColisao.play();
      print("BATEU");
      if(pontosMaiorQueZero()){
      meusPontos -=1;
        }
    }
  }
}

function reseta(){
  yAtor = 366;
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(25);
  fill(255,0,0);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    reseta();
    sPonto.play();
  }
}


function pontosMaiorQueZero(){
  return meusPontos >0
}

function podeMover(){
  return yAtor < 366;
}
  






