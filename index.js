//Variáveis------------------------------------------------------------------

//Caixas do Jogo
const telaDoJogo = document.getElementById('telaDoJogo')
const telaInicial = document.getElementById('telaInicial')
const TelaDeBatida = document.getElementById('TelaDeBatida')
const telaComoJogar = document.getElementById('telaComoJogar')
const controleDeNiveis = document.getElementById('controleDeNiveis')
const nivelAtual = document.getElementById('nivelAtual')
const nomeNivel = document.getElementById('nomeNivel')

const Bcontroles = document.getElementsByClassName("controles")
const recorde = document.getElementById("recorde")

const iniciar = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')
const retomar = document.getElementById('retomar')
const outro = document.getElementById('outro')

const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const acima = document.getElementById('acima')
const abaixo = document.getElementById('abaixo')
const pause = document.getElementById('pause')

const canvaDireita = document.getElementById('canvaDireita')
const canvaEsquerda = document.getElementById('canvaEsquerda')
const canvaFreioD = document.getElementById('canvaFreioD')
const canvaFreioE = document.getElementById('canvaFreioE')
const canvaAceleradorD = document.getElementById('canvaAceleradorD')
const canvaAceleradorE = document.getElementById('canvaAceleradorE')

const broken = document.getElementById('broken')
const ferrugem = document.getElementById('ferrugem')
const trash = document.getElementById('trash')
const dourado = document.getElementById('dourado')
const sombra = document.getElementById('sombra')
const oceano = document.getElementById('oceano')
const nitro = document.getElementById('nitro')
const raiz = document.getElementById('raiz')
const escarlate = document.getElementById('escarlate')
const ssp = document.getElementById('ssp')

const msgBloqueio = document.createElement("IMG");
msgBloqueio.style.position = "absolute"
msgBloqueio.style.marginTop = "-150px"
msgBloqueio.style.marginLeft = "-88px"
msgBloqueio.style.width = "175px"
msgBloqueio.style.height = "59px"
msgBloqueio.src = "imagens/Desbloqueio350.png"

//Variáveis do Jogo-----------------------
//Carro do Jogador
var personagem;
var veiculo =  "broken"
var imagemCarro = "imagens/carroBroken.png"
let aceleracao = 1;
let freio = 1;
let curva = 1;
var veiculos = ["broken", "ferrugem", "trash", "dourado", "sombra", "oceano", "nitro", "raiz", "escarlate", "ssp"]
//Niveis e Pontos
var nivel = 1;
var mudaNivel = 0;
var pontuacao;
var pontos = 0;
var pontosDeEntrada = 0
var pontosRecorde;
//Cenário
var fundo;
var velPista = 10;
var reset = true
var pausa = false
var fimDeJogo = false
var intervalo = 50;
//Sons
var somColisao;
var somBuzina;
var somLigando = new Audio("audio/ligando.mp3")
var somDirigindo;
var somSirenes = new Audio("audio/sirenes.mp3")
//Veiculos da Pista
var obstaculos = [];
let movimento = 1;
var veloCarros = 4;
var desvios = false
let carroFantasma;
var imagensCarros = ["imagens/outroCarroAmarelo.png", "imagens/outroCarroAzul.png",
                    "imagens/outroCarroBranco.png", "imagens/outroCarroCinza.png", "imagens/outroCarroMarrom.png",
                    "imagens/outroCarroPreto.png", "imagens/outroCarroRosa.png", "imagens/outroCarroRoxo.png",
                    "imagens/outroCarroVerde.png", "imagens/outroCarroVermelho.png" ]

function trazRecorde(){
    let recordeGravado = localStorage.getItem('recordeGravado');
    let recordeAntigo = JSON.parse( recordeGravado )
    if(recordeAntigo){
        pontosRecorde = recordeAntigo;
    }else{
        pontosRecorde = 0;
    }
    this.showTasks = this.tasks
    recorde.innerText = pontosRecorde;
}

//Escutadores---------------------------------------------------------------------------

function escutadores(){

    broken.addEventListener('click', function(){ escolherCarro("broken", 0, 0, 1, 0) } )
    ferrugem.addEventListener('click', function(){ escolherCarro("ferrugem", 1, 0, 2, 0 ) } )
    trash.addEventListener('click', function(){ escolherCarro("trash", 0, 1, 2, 0) } )
    dourado.addEventListener('click', function(){ escolherCarro("dourado", 1, 1, 1, 0) } )
    sombra.addEventListener('click', function(){ escolherCarro("sombra", 2, 2, 2, 350) } )
    oceano.addEventListener('click', function(){ escolherCarro("oceano", 1, 1, 3, 350) } )
    nitro.addEventListener('click', function(){ escolherCarro("nitro", 4, 2, 1, 350) } )
    raiz.addEventListener('click', function(){ escolherCarro("raiz", 1, 3, 2, 350) } )
    escarlate.addEventListener('click', function(){ escolherCarro("escarlate", 4, 4, 4, 1000) } )
    ssp.addEventListener('click', function(){ escolherCarro("ssp", 5, 5 ,5, 2000) } )

    window.addEventListener('keydown', pressionarTecla )
    window.addEventListener('keyup', soltarTecla )
    //pause.addEventListener('click', pausar )
    //buzina.addEventListener('click', buzinar )

    iniciar.addEventListener('click', iniciarJogo )
    reiniciar.addEventListener('click', reiniciarJogo )
    retomar.addEventListener('click', retomarJogo )
    outro.addEventListener('click', voltar )
}

//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores) //Ativa os escutadores
window.addEventListener("load", trazRecorde) //Ativa os escutadores
