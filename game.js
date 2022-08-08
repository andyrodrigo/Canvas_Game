var personagem;

function startGame() {
    areaDoJogo.start();
    personagem = new componente(30, 30, "red", 10, 120);
}

var areaDoJogo = {
    canvas: document.createElement("canvas"),

    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.interval = setInterval( atualizaAreaDoJogo, 20 );

        window.addEventListener('keydown', function (e) {
            //areaDoJogo.key = e.keyCode;//Deprecated
            areaDoJogo.key = e.code;
        })
        window.addEventListener('keyup', function (e) {
            areaDoJogo.key = false;
        })

    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

function componente( width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.x = x;
    this.y = y;

    this.update = function(){
        ctx = areaDoJogo.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.newPos = function() {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }
}

function atualizaAreaDoJogo() {
    areaDoJogo.clear();
    personagem.velocidadeX = 0;
    personagem.velocidadeY = 0;

    if (areaDoJogo.key && areaDoJogo.key == 'ArrowLeft') {personagem.velocidadeX = -1; }
    if (areaDoJogo.key && areaDoJogo.key == 'ArrowRight') {personagem.velocidadeX = 1; }
    if (areaDoJogo.key && areaDoJogo.key == 'ArrowUp') {personagem.velocidadeY = -1; }
    if (areaDoJogo.key && areaDoJogo.key == 'ArrowDown') {personagem.velocidadeY = 1;}
    /* //Deprecated
    if (areaDoJogo.key && areaDoJogo.key == 37) {personagem.velocidadeX = -1; }
    if (areaDoJogo.key && areaDoJogo.key == 39) {personagem.velocidadeX = 1; }
    if (areaDoJogo.key && areaDoJogo.key == 38) {personagem.velocidadeY = -1; }
    if (areaDoJogo.key && areaDoJogo.key == 40) {personagem.velocidadeY = 1; }*/

    personagem.newPos();
    personagem.update();
}

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
}