//Tipos de Níveis

//Carros de cima para baixo
function nivel_carros_descendo(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    minWidth = 10;
    maxWidth = 260;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
    obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y += veloCarros;

    if( desvios ){
      if( Math.floor( Math.random()*10) == 0 ){
        moveCarro(i)
      }
    }

    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

//Carro grandes de um lado para o outro
function nivel_militares( bussola ){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo ) ) {

    minHeight = -250;
    maxHeight = 250;

    height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);

    if( bussola == 1){
      obstaculos.push( new component(80, 50, "imagens/militar.png" , 380 , height, "image") );
    }else{
      obstaculos.push( new component(80, 50, "imagens/militarVolta.png" , -80 , height, "image") );
    }

  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y += 2;
    if( bussola == 1){
      obstaculos[i].x -= veloCarros;
    }else{
      obstaculos[i].x += veloCarros;
    }


    obstaculos[i].newPos();
    obstaculos[i].update();
  }
}

//Caminhões de cima para baixo
function nivel_caminhoes(){

  if (areaDoJogo.frameNo == 1 || everyinterval( 40 )) {

    minWidth = 10;
    maxWidth = 245;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(45, 100, "imagens/truck.png" , width, -100, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y += veloCarros;
 
    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

//Carros em linha
function nivel_fechadores(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    minWidth = 10;
    maxWidth = 260;

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
    obstaculos.push( new component(30, 30, carroAleatorio , 15, -30, "image") );

    let buraco = Math.floor(Math.random()*6);
    let posicao = 50

    for(i=0; i< 6 ; i++){
      if( i != buraco){
        carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
        obstaculos.push( new component(30, 30, carroAleatorio , posicao, -30, "image") );
      }
      posicao += 35
    }

    carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
    obstaculos.push( new component(30, 30, carroAleatorio , 260, -30, "image") );
      
  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y += veloCarros;

    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

//Carros de baixo para cima
function nivel_carrosSubindo(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

    minWidth = 10;
    maxWidth = 260;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(30, 30, carroAleatorio , width, 530, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y -= veloCarros;

    if( desvios ){
      if( Math.floor( Math.random()*10) == 0 ){
        moveCarro(i)
      }
    }

    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

//Carros se movendo de todo jeito
function nivel_policia(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    minWidth = 0;
    maxWidth = 265;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(30, 30, "imagens/carroPolicial.png" , width, 530, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y -= veloCarros;

    if( Math.floor( Math.random()*10) == 0 ){
      moveCarroSempre(i)
    }
    obstaculos[i].newPos();
    obstaculos[i].update();
  }
}

//Carros Perseguidores
function nivel_loucos(fantasma){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    if(desvios){
      if(fantasma){
        obstaculos.push( new component(30, 30, "imagens/carroPreto.png" , 135, -30, "image") );
        carroFantasma = false
      }
    }else{
      minWidth = 10;
      maxWidth = 260;
      width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
      let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
      obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }
    
  }

  for (i = 0; i < obstaculos.length; i += 1) {

    if( personagem.x > obstaculos[i].x){
      obstaculos[i].x += veloCarros;     
    }else if( personagem.x < obstaculos[i].x){
      obstaculos[i].x -= veloCarros;
    }else{
      obstaculos[i].x += 0;
    }
    
    if(desvios){
      if( personagem.y > obstaculos[i].y){
        obstaculos[i].y += veloCarros;
        console.log("descer")
      }else if( personagem.y < obstaculos[i].y){
        obstaculos[i].y -= veloCarros;
        console.log("subir")
      }else{
        obstaculos[i].y += 0;
      }
    }else{
      obstaculos[i].y += veloCarros; 
    }

    obstaculos[i].newPos();
    obstaculos[i].update();
  }

}