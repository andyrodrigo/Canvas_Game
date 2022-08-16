//Controla os níveis
function niveis(){

  switch(nivel){
    case 1:
      if(reset){
        nivelAtual.innerText = "NIVEL 1 - "
        nomeNivel.innerText = "Entrando na Rodovia"
        desvios = false
        intervalo = 80
        veloCarros = 1;
        mudaNivel = 100
        reset = false
      }
      nivel_carros_descendo();
      break;
    case 2: //100 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 2 - "
        nomeNivel.innerText = "Engarrafando"
        intervalo = 40
        veloCarros = 1;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 200){
        intervalo = 80
      }
      nivel_carros_descendo();
      break;
    case 3: //250 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 3 - "
        nomeNivel.innerText = "Engarrafamento"
        intervalo = 30
        veloCarros = 1;
        mudaNivel += 100
        reset = false
      }
      nivel_carros_descendo();
      break;
    case 4: //350 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 4 - "
        nomeNivel.innerText = "Hora do Rush"
        desvios = true
        intervalo = 30
        veloCarros = 1;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 450){
        intervalo = 80
      }
      nivel_carros_descendo();
      break;
    case 5: //500 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 5 - "
        nomeNivel.innerText = "Acelerando"
        desvios = true
        intervalo = 30
        veloCarros = 2;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 620){
        intervalo = 10000
      }
      nivel_carros_descendo();
      break;
    case 6: //650 pontos
      if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 6 - "
        nomeNivel.innerText = "Cuidado com os Militares"
        desvios = false
        intervalo = 40
        veloCarros = 3;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 780){
        intervalo = 10000
      }
      nivel_militares(1);
      break;
    case 7: //800 pontos
    if(reset){
      obstaculos = []
      nivelAtual.innerText = "NIVEL 7 - "
      nomeNivel.innerText = "Protesto dos caminhoneiros"
      desvios = false
      intervalo = 40
      veloCarros = 3;
      mudaNivel += 200
      reset = false
    }
    if(pontos == 970){
      intervalo = 500
    }
    nivel_caminhoes();
    break; 
    case 8: //1000 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 8 - "
        nomeNivel.innerText = "Fechadores de Rodovia"
        desvios = false
        intervalo = 150
        veloCarros = 2;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 1100){
        intervalo = 500
      }
      nivel_fechadores();
      break; 
    case 9: //1150 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 9 - "
        nomeNivel.innerText = "Estou com Pressa"
        desvios = false
        intervalo = 150
        veloCarros = 3;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 1270){
        intervalo = 10000
      }
      nivel_fechadores();
      break; 
    case 10://1300 pontos
      if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 10 - "
        nomeNivel.innerText = "Alta Velocidade"
        desvios = false
        intervalo = 40
        veloCarros = 6;
        mudaNivel += 100
        reset = false
      }
      nivel_carros_descendo();
      break;
    case 11://1400 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 11 - "
        nomeNivel.innerText = "Sai da Frente"
        desvios = false
        intervalo = 80
        veloCarros = 3;
        mudaNivel += 100
        reset = false
      }
      nivel_carrosSubindo();
      break;
    case 12://1500 pontos
      if(reset){
        nivelAtual.innerText = "NIVEL 12 - "
        nomeNivel.innerText = "Velozes e Furiosos"
        desvios = true
        intervalo = 40
        veloCarros = 4;
        mudaNivel += 150
        reset = false
      }
      if(pontos == 1600){
        intervalo = 10000
      }
      nivel_carrosSubindo();
      break;
    case 13://1650 pontos
      if(reset){
        somSirenes.play()
        obstaculos = []
        nivelAtual.innerText = "NIVEL 13 - "
        nomeNivel.innerText = "Patrulha Policial"
        desvios = true
        intervalo = 20
        veloCarros = 4;
        mudaNivel += 200
        reset =  false
      }
      if(pontos == 1800){
        intervalo = 10000
      }
      nivel_policia();
      break;
    case 14: //1850 pontos
      if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 14 - "
        nomeNivel.innerText = "A volta Militares"
        desvios = false
        intervalo = 40
        veloCarros = 2;
        mudaNivel += 200
        reset = false
      }
      if(pontos == 2000){
        intervalo = 10000
      }
      nivel_militares(2);
      break;
    case 15: //2050 pontos
    if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 15 - "
        nomeNivel.innerText = "Loucos da Rodovia"
        desvios = false
        intervalo = 100
        veloCarros = 1;
        mudaNivel += 200
        reset = false
      }
      if(pontos == 2200){
        intervalo = 10000
      }
      nivel_loucos();
      break;
    case 16: // pontos
    if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 16 - "
        nomeNivel.innerText = "Louco da Rodovia"
        desvios = true
        intervalo = 1000
        veloCarros = 1;
        mudaNivel += 2000
        reset = false
      }
      if(pontos == 2200){
        intervalo = 10000
      }
      nivel_loucos();
      break;
    default:
      nivel_carros_descendo();
  }
}

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
function nivel_loucos(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

    minWidth = 10;
    maxWidth = 260;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
    obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {

    if( personagem.x > obstaculos[i].x){
      obstaculos[i].x += veloCarros;     
    }else if( personagem.x < obstaculos[i].x){
      obstaculos[i].x -= veloCarros;
    }else{
      obstaculos[i].x += 0;
    }
    obstaculos[i].y += veloCarros; 

    /*
    if( personagem.y > obstaculos[i].y){
      obstaculos[i].y += veloCarros;     
    }else if( personagem.y < obstaculos[i].y){
      obstaculos[i].y -= veloCarros;
    }else{
      obstaculos[i].y += 0;
    }*/

    obstaculos[i].newPos();
    obstaculos[i].update();
  }

}