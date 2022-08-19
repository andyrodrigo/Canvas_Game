//Funções dentro do Jogo


var areaDoJogo = {

    canvas: document.createElement("canvas"),
    //Cria a tela canvas com o jogo
    start : function() {

        this.canvas.width = 300;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");

        telaDoJogo.appendChild(this.canvas);

        this.frameNo = 0; 
        this.interval = setInterval( atualizaAreaDoJogo, 20 );

    },
    //Limpa a tela para redesenhar
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    //Continua o jogo
    continue : function() {
        this.interval = setInterval( atualizaAreaDoJogo, 20 );
    },
    //Paralisa o jogo
    stop : function() {
        clearInterval(this.interval);
    }

}

//Criação de Componente da tela
function component( width, height, objeto, x, y, type) {

    this.type = type;
    this.width = width;
    this.height = height;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.x = x;
    this.y = y;

    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = objeto;
    }

    //Atualização dos componentes
    this.update = function(){

        ctx = areaDoJogo.context;

        if (this.type == "text") { //Textos em tela
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = objeto;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image" || type == "background" ) { //Imagens em tela
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            
            if ( type == "background"){ //loop
                ctx.drawImage(this.image, this.x , this.y - this.height, this.width, this.height);
            }
        } else {
            ctx.fillStyle = objeto;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    //Muda posição do objetos
    this.newPos = function() {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
        if (this.type == "background") {
            if (this.y == this.height ) {
              this.y = 0;
            }
        }
    }

    //Indicador de colisão
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

//Redesenha a tela a cada frame
function atualizaAreaDoJogo() {
    //Verifica possível Colisão
    for (i = 0; i < obstaculos.length; i += 1) {
        if (personagem.colisaoCom(obstaculos[i])) {
          fimDeJogo = true
          somColisao.play();
          areaDoJogo.stop();
          somDirigindo.pause();
          TelaDeBatida.style.display = "flex"
          if( pontos > pontosRecorde){
            pontosRecorde = pontos
            recorde.innerText = pontos;
          }
          return;
        }
    }

    //Limpa tela e movimento
    areaDoJogo.clear();
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;
    //Verifica controles (teclado ou botões)
    controles()
    //atualiza pista
    fundo.velocidadeY = velPista;
    fundo.newPos();
    fundo.update();
    //aumenta os frames
    areaDoJogo.frameNo += 1;
    //Monta nível atual
    niveis()
    //Soma pontos a cada 100 frames
    if( areaDoJogo.frameNo % 100 == 0){
        pontos +=10;
    }
    //Troca de nível de acordo com a condição de mudança
    if( pontos == mudaNivel){       
        nivel += 1;
        reset = true
    }
    //desenha texto com pontuação
    pontuacao.text = "PONTOS: " + pontos;
    pontuacao.update();
    //atualiza carro do jogador
    personagem.newPos();
    personagem.update();

}

function controles(){
    if (areaDoJogo.keys){ 
        if (areaDoJogo.keys['ArrowLeft'] && personagem.x > 0  || //  ESQUERDA <-
            areaDoJogo.keys['KeyA'] && personagem.x > 0  ) {     
                if( curva == 0){
                    if( areaDoJogo.frameNo % 5 == 0)
                    personagem.velocidadeX = -1;
                }else{
                    personagem.velocidadeX = -curva;
                } 
        }
        if (areaDoJogo.keys['ArrowRight'] && personagem.x < 270 || //  DIREITA ->
            areaDoJogo.keys['KeyD'] && personagem.x < 270  ) {
                if( curva == 0){
                    if( areaDoJogo.frameNo % 5 == 0)
                    personagem.velocidadeX = 1;
                }else{
                    personagem.velocidadeX = curva;
                } 
        }
        if (areaDoJogo.keys['ArrowUp'] && personagem.y > 0 || // ACELERA
            areaDoJogo.keys['KeyW'] && personagem.y > 0) { 
            if( aceleracao == 0 ){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = -1;
            }else{
                personagem.velocidadeY = -aceleracao;
            }
        }
        if (areaDoJogo.keys['ArrowDown']  && personagem.y < 485 || //FREIA
            areaDoJogo.keys['KeyS']  && personagem.y < 485) {
            if( freio == 0){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = 1;
            }else{
                personagem.velocidadeY = freio;
            }    
        }
    }
    if ( areaDoJogo.teclas ){
        //console.log("on")
        if (areaDoJogo.teclas['e'] && personagem.x > 0 ){ //  ESQUERDA <-   
            if( curva == 0){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeX = -1;
            }else{
                personagem.velocidadeX = -curva;
            } 
        }
        if( areaDoJogo.teclas["d"] && personagem.x < 270){ //  DIREITA ->
            if( curva == 0){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeX = 1;
            }else{
                personagem.velocidadeX = curva;
            }  
        }
        if (areaDoJogo.teclas['a'] && personagem.y > 0 ) { // ACELERA
            if( aceleracao == 0 ){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = -1;
            }else{
                personagem.velocidadeY = -aceleracao;
            }
        }
        if (areaDoJogo.teclas['f']  && personagem.y < 485 ) { //FREIA
            if( freio == 0){
                if( areaDoJogo.frameNo % 5 == 0)
                personagem.velocidadeY = 1;
            }else{
                personagem.velocidadeY = freio;
            }      
        }
    }

}

function pressionarTecla(e){
    areaDoJogo.keys = (areaDoJogo.keys || []);
    areaDoJogo.keys[e.code] = true;
}

function soltarTecla(e){
    areaDoJogo.keys[e.code] = false;
}

function pressionarBotao( dir ){
    //console.log( dir )
    areaDoJogo.teclas = (areaDoJogo.teclas || []);
    areaDoJogo.teclas[dir] = true;
}

function soltarBotao( dir ){
    //console.log( dir)
    areaDoJogo.teclas[dir] = false;

}

function moveCarro(i){
    movimento = Math.floor( Math.random()*3) - 1
    if( areaDoJogo.frameNo % 50 == 0){
        obstaculos[i].velocidadeX = movimento;     
    }
}

function moveCarroSempre(i){
    movimento = Math.floor( Math.random()*3) - 1
    obstaculos[i].velocidadeX = movimento;
}

function everyinterval(n) {
    if ((areaDoJogo.frameNo / n) % 1 == 0) {return true;}
    return false;
}
