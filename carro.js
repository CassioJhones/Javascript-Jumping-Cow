let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [42, 96, 150, 210, 270, 318]; 
let velocidadeCarros = [2, 2.8, 3.5, 5, 3, 2.2];
let comprimentoCarro = 70;
let alturaCarro = 40

function mostraCarro(){
  //LOOP USANDO FOR
  for(let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for(let i=0; i < imagemCarros.length; i++ ){
  xCarros[i] -= velocidadeCarros[i];
}
}

function voltaPosicaoInicialdoCarro(){
  for(let i=0; i < imagemCarros.length; i++ ){
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarro){
return xCarro < -50;
  }
