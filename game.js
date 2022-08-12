var personagem;
var obstaculos = [];
var pontuacao;
var fundo;
var som;
var musica

function startGame() {
    
    //personagem = new component(30, 30, "red", 10, 120);
    
    fundo = new component(656, 270, "pista.png", 0, 0, "background");
    personagem = new component(30, 30, "imagens/car.png", 10, 120, "image");
    //som = new sound("bounce.mp3")
    //musica = new sound("gametheme.mp3");
    //musica.play();
    pontuacao = new component("30px", "Consolas", "black", 280, 40, "text")
    //obstaculo = new component(10, 200, "green", 300, 120);
    areaDoJogo.start();
}

var areaDoJogo = {
    canvas: document.createElement("canvas"),

    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

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

function component( width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
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
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image" || type == "background" ) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            if ( type == "background")
                ctx.drawImage(this.image, this.x + this.width , this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.newPos = function() {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }

    this.colisaoCom = function( outroObjeto) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = outroObjeto.x;
        var otherright = outroObjeto.x + (outroObjeto.width);
        var othertop = outroObjeto.y;
        var otherbottom = outroObjeto.y + (outroObjeto.height);
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
         //som.play();
          areaDoJogo.stop();
          return;
        }
    }
    areaDoJogo.clear();
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;

    if (areaDoJogo.keys && areaDoJogo.keys['ArrowLeft']  ) {personagem.velocidadeX = -1; personagem.image.src = "car2.png" }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowRight'] ) {personagem.velocidadeX = 1; }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowUp']    ) {personagem.velocidadeY = -1; }
    if (areaDoJogo.keys && areaDoJogo.keys['ArrowDown']  ) {personagem.velocidadeY = 1;}

    areaDoJogo.frameNo += 1;

    if (areaDoJogo.frameNo == 1 || everyinterval(150)) {
        x = areaDoJogo.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        obstaculos.push(new component(10, height, "green", x, 0));
        obstaculos.push(new component(10, x - height - gap, "green", x, height + gap));
    }

    for (i = 0; i < obstaculos.length; i += 1) {
      obstaculos[i].x += -1;
      obstaculos[i].update();
    }

    pontuacao.text = "Pontos: " + areaDoJogo.frameNo;
    pontuacao.update();
    fundo.velocidadeX = -1;
    fundo.newPos();
    fundo.update();
    personagem.newPos();
    personagem.update();

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


/*
function moveAcima() {
    personagem.velocidadeY -= 1;
}
  
function moveAbaixo() {
    personagem.velocidadeY += 1;
}

function moveEsquerda() {
    personagem.velocidadeX -= 1;
}

function moveDireita() {
    personagem.velocidadeX += 1;
}

function paraMovimento() {
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;
}*/