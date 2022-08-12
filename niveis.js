
function niveis(){

    switch(nivel){
        case 1:
            nivel_1();
            break;
        case 2:
            nivel_2();
            break;
        case 3:
            veloCarros = 2;
            nivel_3();
            break;
        case 4:
            nivel_4();
            break;
        case 5:
            nivel_5();
            break;
        case 6:
            veloCarros = 3;
            nivel_6();
            break;
        case 7:
            veloCarros = 4;
            nivel_6();
            break;
        case 8:
            veloCarros = 5;
            nivel_6();
            break;
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
            break;
        default:
            nivel_1();

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
}

function nivel_1(){

    if (areaDoJogo.frameNo == 1 || everyinterval( 80 )) {

        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*10) ] ;

        minWidth = 10;
        maxWidth = 260;

        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);

        obstaculos.push( new component(30, 30, carroAleatorio , width, -30, "image") );
    }

    for (i = 0; i < obstaculos.length; i += 1) {
        obstaculos[i].y += veloCarros;
  
        if( Math.floor( Math.random()*50) == 0 ){
          moveCarro(i)
        }
        if( obstaculos[i].x > 5 && obstaculos[i].x < 265){
          obstaculos[i].newPos();
        }
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