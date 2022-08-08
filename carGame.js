var personagem;
var obstaculos = [];
var pontuacao;
var fundo;
var som;
var musica

function startGame() {
    
    personagem = new component(30, 30, "car.png", 10, 120, "image");
    
    //fundo = new component(656, 270, "pista.png", 0, 0, "background");
    
    pontuacao = new component("30px", "Consolas", "black", 280, 40, "text")
  
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