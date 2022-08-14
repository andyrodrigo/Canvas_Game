
var areaDoJogo = {

    canvas: document.createElement("canvas"),

    start : function() {

        this.canvas.width = 300;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");

        telaDoJogo.appendChild(this.canvas);

        this.frameNo = 0; 
        this.interval = setInterval( atualizaAreaDoJogo, 20 );

    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }

}

function component( width, height, objeto, x, y, type) {

    this.type = type;

    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = objeto;
    }

    this.width = width;
    this.height = height;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.x = x;
    this.y = y;

    this.update = function(){

        ctx = areaDoJogo.context;

        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = objeto;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image" || type == "background" ) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            
            if ( type == "background"){ //loop
                ctx.drawImage(this.image, this.x , this.y - this.height, this.width, this.height);
            }
        } else {
            ctx.fillStyle = objeto;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    
    this.newPos = function() {
        this.x += this.velocidadeX;
        //console.log(this.velocidadeX)
        this.y += this.velocidadeY;
        if (this.type == "background") {
            if (this.y == this.height ) {
              this.y = 0;
            }
        }
    }

    this.colisaoCom = function( outroObjeto) {
        var myleft = this.x + 2;
        var myright = this.x + (this.width - 2);
        var mytop = this.y + 2;
        var mybottom = this.y + (this.height - 2);
        var otherleft = outroObjeto.x + 2;
        var otherright = outroObjeto.x + (outroObjeto.width - 2);
        var othertop = outroObjeto.y + 2;
        var otherbottom = outroObjeto.y + (outroObjeto.height - 2);
        var colisao = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            colisao = false;
        }
        return colisao;
      }
}

function atualizaAreaDoJogo() {

    for (i = 0; i < obstaculos.length; i += 1) {
        if (personagem.colisaoCom(obstaculos[i])) {
          somColisao.play();
          areaDoJogo.stop();
          somDirigindo.pause();
          TelaDeBatida.style.display = "flex"
          return;
        }
    }

    areaDoJogo.clear();
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;

    controles()

    fundo.velocidadeY = velPista;
    fundo.newPos();
    fundo.update();

    areaDoJogo.frameNo += 1;

    niveis()

    if( areaDoJogo.frameNo % 100 == 0){
        pontos +=10;
        if( pontos % 100 == 0){       
            nivel += 1;
            console.log(nivel)
        }
    }

    pontuacao.text = "Pontos: " + pontos;
    pontuacao.update();

    personagem.newPos();
    personagem.update();

}

function controles(){
    if (areaDoJogo.keys){ 
        if (areaDoJogo.keys['ArrowLeft'] && personagem.x > 0  || //  ESQUERDA <-
            areaDoJogo.keys['KeyA'] && personagem.x > 0  ) {     
            personagem.velocidadeX = -curva;
        }
        if (areaDoJogo.keys['ArrowRight'] && personagem.x < 270 || //  DIREITA ->
            areaDoJogo.keys['KeyD'] && personagem.x < 270  ) {
            personagem.velocidadeX = curva;
        }
        if (areaDoJogo.keys['ArrowUp'] && personagem.y > 0 || // ACELERA
            areaDoJogo.keys['KeyW'] && personagem.y > 0) { 
            if( aceleracao == 0 && personagem.y > 450){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = -1;
            }else{
                personagem.velocidadeY = -aceleracao;
            }
        }
     if (areaDoJogo.keys['ArrowDown']  && personagem.y < 485 || //FREIA
         areaDoJogo.keys['KeyS']  && personagem.y < 485) {
            if( freio == 0 && personagem.y < 450){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = 1;
            }else{
                personagem.velocidadeY = freio;
            }    
         }
    }
}

function pressionaTecla(e){
    areaDoJogo.keys = (areaDoJogo.keys || []);
    areaDoJogo.keys[e.code] = true;
}

function soltaTecla(e){
    areaDoJogo.keys[e.code] = false;
}


/*
function controles(){
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowLeft'] && personagem.x > 0  ||
        areaDoJogo.keys && areaDoJogo.keys['KeyA'] && personagem.x > 0  ) {     
         personagem.velocidadeX = -curva;
         //console.log( personagem.velocidadeX )
         //personagem.image.src = "car2.png" 
     }
     if (areaDoJogo.keys && areaDoJogo.keys['ArrowRight'] && personagem.x < 270
        || direita.onclick ) {
        personagem.velocidadeX = curva;
        //console.log(personagem.x)
    }
     if (areaDoJogo.keys && areaDoJogo.keys['ArrowUp']    && personagem.y > 0) { 
         if( aceleracao == 0 && personagem.y > 450){
             if( areaDoJogo.frameNo % 5 == 0)
             personagem.velocidadeY = -1;
         }else{
             personagem.velocidadeY = -aceleracao;
         }
         
     }
     if (areaDoJogo.keys && areaDoJogo.keys['ArrowDown']  && personagem.y < 485 ) {
         if( freio == 0 && personagem.y < 450){
             if( areaDoJogo.frameNo % 5 == 0)
             personagem.velocidadeY = 1;
         }else{
             personagem.velocidadeY = freio;
         }    
     }
}*/

function moveCarro(i){
    movimento = Math.floor( Math.random()*3) - 1
    //console.log(movimento)
    if( areaDoJogo.frameNo % 50 == 0){
        obstaculos[i].velocidadeX = movimento;     
    }
}

function everyinterval(n) {
    if ((areaDoJogo.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveAcima() {
    //alert("ok")
    if( aceleracao == 0 && personagem.y > 450){
        if( areaDoJogo.frameNo % 5 == 0)
        personagem.velocidadeY = -1;
    }else{
        personagem.velocidadeY = -aceleracao;
    }
    personagem.newPos();
   // console.log( personagem.velocidadeY )
}
  
function moveAbaixo() {
    //alert("ok")
    if( freio == 0 && personagem.y < 450){
        if( areaDoJogo.frameNo % 5 == 0)
        personagem.velocidadeY = 1;
    }else{
        personagem.velocidadeY = freio;
    }
    console.log( "pressionado" )
    personagem.newPos();
}

function moveEsquerda() {
    //alert("ok")
    personagem.velocidadeX = -curva;
    personagem.newPos();
    //personagem.image.src = "imagens/carroBroken.png"
    //console.log( personagem.velocidadeX )
}

function moveDireita() {
    //alert("ok")
    personagem.velocidadeX = curva;
    personagem.newPos();
    //console.log( personagem.x )
}

function paraMovimento() {
    obstaculos[0].velocidadeX = 0;
    obstaculos[0].velocidadeY = 0;
}

