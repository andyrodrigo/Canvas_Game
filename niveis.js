
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
              nomeNivel.innerText = "Loucura"
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
          if(pontos == 600){
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
          if(pontos == 750){
            intervalo = 10000
          }
          nivel_militares();
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
        if(pontos == 950){
          intervalo = 100
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
          if(pontos == 1250){
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
            obstaculos = []
            nivelAtual.innerText = "NIVEL 13 - "
            nomeNivel.innerText = "Caso de Policia"
            desvios = true
            intervalo = 20
            veloCarros = 4;
            mudaNivel += 200
            reset =  false
          }
          nivel_policia();
          break;
/*
        case 9:
            veloCarros = 6;
            nivel_6();
            break;
        case 10:
            veloCarros = 7;
            nivel_6();
            break;
        case 11:
            veloCarros = 8;
            nivel_6();
            break;
        case 12:
            veloCarros = 9;
            nivel_6();
            break;*/
        default:
          nivel_policia();

    }

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

function nivel_militares(){

  if (areaDoJogo.frameNo == 1 || everyinterval( intervalo )) {

      minHeight = -250;
      maxHeight = 250;

      height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);

      obstaculos.push( new component(80, 50, "imagens/militar.png" , 380 , height, "image") );
  }

  for (i = 0; i < obstaculos.length; i += 1) {
      obstaculos[i].y += 2;
      obstaculos[i].x -= veloCarros;

      obstaculos[i].newPos();
      obstaculos[i].update();
    }
  }

}

function nivel_caminhoes(){

  if (areaDoJogo.frameNo == 1 || everyinterval( 40 )) {

    minWidth = 10;
    maxWidth = 245;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(45, 100, "imagens/truck.png" , width, -100, "image") );
}

for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y += veloCarros;
    /*
    if( Math.floor( Math.random()*50) == 0 ){
      moveCarro(i)
    }*/
    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

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


















function nivel_2(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 40 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*10) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
        obstaculos[i].update();
      }

}

function nivel_3(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 40 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*10) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
        obstaculos[i].update();
      }

}

function nivel_4(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 30 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*10) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
        obstaculos[i].update();
      }

}

function nivel_5(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 20 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*10) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
        obstaculos[i].update();
      }

}

function nivel_6(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 20 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*10) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
        obstaculos[i].update();
      }

}





function nivel_extra3(){

  if (areaDoJogo.frameNo == 1 || everyinterval( 20 )) {

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

    minWidth = 10;
    maxWidth = 260;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(30, 30, carroAleatorio , width, 530, "image") );
}

for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y -= veloCarros*3;

    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}

function nivel_extra4(){

  if (areaDoJogo.frameNo == 1 || everyinterval( 40 )) {

    let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

    minWidth = 10;
    maxWidth = 260;

    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

    obstaculos.push( new component(30, 30, carroAleatorio , width, 530, "image") );
}

for (i = 0; i < obstaculos.length; i += 1) {
    obstaculos[i].y -= veloCarros*2;

    if( Math.floor( Math.random()*10) == 0 ){
      moveCarroSempre(i)
    }

    if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
      obstaculos[i].newPos();
    }
    obstaculos[i].update();
  }

}





    /*
    if (areaDoJogo.frameNo == 1 || everyinterval(intervalo)) {
        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;
        //console.log(carroAleatorio)
        minWidth = 10;
        maxWidth = 260;
        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
      obstaculos[i].y += veloCarros;

      if( Math.floor( Math.random()*10) == 0 ){
        moveCarro(i)
      }
      if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
        obstaculos[i].newPos();
      }
      obstaculos[i].update();
    }

    if( areaDoJogo.frameNo % 100 == 0){
        pontos +=10;
        if(pontos % 100 == 0){
            if(veloCarros < 5){
                console.log(veloCarros)
                veloCarros++
                //intervalo = intervalo - 5
            }else if (intervalo > 10){
                console.log(intervalo)
                intervalo--
            }
            
        }
    }*/