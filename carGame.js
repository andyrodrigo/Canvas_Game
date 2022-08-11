
var areaDoJogo = {

    canvas: document.createElement("canvas"),

    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");

        telaDoJogo.appendChild(this.canvas);

        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.frameNo = 0; 
        this.interval = setInterval( atualizaAreaDoJogo, 20 );

        window.addEventListener('keydown', function (e) { //Ao pressionar tecla
            areaDoJogo.keys = (areaDoJogo.keys || []);
            areaDoJogo.keys[e.code] = true;
        })
        window.addEventListener('keyup', function (e) { //Ao soltar tecla
            areaDoJogo.keys[e.code] = false;
        })

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

    var x, y;
    for (i = 0; i < obstaculos.length; i += 1) {
        if (personagem.colisaoCom(obstaculos[i])) {
          areaDoJogo.stop();
          return;
        }
    }
    areaDoJogo.clear();
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;

   // if (areaDoJogo.keys && areaDoJogo.keys['ArrowLeft'] && personagem.x > 0  ) {
        if (areaDoJogo.keys && areaDoJogo.keys['ArrowLeft'] && personagem.x > 0  ) {
        personagem.velocidadeX = -curva;
        //personagem.image.src = "car2.png" 
    }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowRight'] && personagem.x < 270) {personagem.velocidadeX = curva; }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowUp']    && personagem.y > 0) {personagem.velocidadeY = -aceleracao; }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowDown']  && personagem.y < 485 ) {personagem.velocidadeY = freio;}

    fundo.velocidadeY = velPista;
    fundo.newPos();
    fundo.update();

    areaDoJogo.frameNo += 1;

    if (areaDoJogo.frameNo == 1 || everyinterval(intervalo)) {
        let carroAleatorio = imagensCarros[ Math.floor(Math.random()*4) ] ;
        //let carroAleatorio = imagensCarros[2] ;
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
    }
    pontuacao.text = "Pontos: " + pontos;
    pontuacao.update();

    personagem.newPos();
    personagem.update();

}

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

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}