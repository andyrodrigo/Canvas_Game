//Variáveis------------------------------------------------------------------

//Caixas do Jogo
const telaDoJogo = document.getElementById('telaDoJogo')
const telaInicial = document.getElementById('telaInicial')

const iniciar = document.getElementById('iniciar')

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

//Variáveis do Jogo
var personagem;
var obstaculos = [];
let movimento = 1;
var pontuacao;
var pontos = 0;
var veloCarros = 1;
var velPista = 10;
var fundo;
var somColisao;
var somLigando = new Audio("audio/ligando.mp3")
var somDirigindo;
var intervalo = 40;
var veiculo =  "roxo"
var imagemCarro = "imagens/carroTrash.png"
let aceleracao = 1;
let freio = 1;
let curva = 1;
var veiculos = ["broken", "ferrugem", "trash", "dourado", "sombra", "oceano", "nitro", "raiz", "escarlate", "ssp"]
var imagensCarros = ["imagens/carroTrash.png", "imagens/car.png", "imagens/carroAzulEscuro.png", "imagens/carroBranco.png" ]

//Escutadores---------------------------------------------------------------------------

function escutadores(){

    broken.addEventListener('click', function(){ escolherCarro("broken", 0, 0, 1) } )
    ferrugem.addEventListener('click', function(){ escolherCarro("ferrugem", 1, 0, 2 ) } )
    trash.addEventListener('click', function(){ escolherCarro("trash"), 0, 1, 2 } )
    dourado.addEventListener('click', function(){ escolherCarro("dourado", 1, 1, 1) } )
    sombra.addEventListener('click', function(){ escolherCarro("sombra", 2, 2, 2) } )
    oceano.addEventListener('click', function(){ escolherCarro("oceano", 1, 1, 3) } )
    nitro.addEventListener('click', function(){ escolherCarro("nitro", 4, 2, 1) } )
    raiz.addEventListener('click', function(){ escolherCarro("raiz", 1, 3, 2) } )
    escarlate.addEventListener('click', function(){ escolherCarro("escarlate", 4, 4, 4) } )
    ssp.addEventListener('click', function(){ escolherCarro("ssp", 5, 5 ,5) } )

    iniciar.addEventListener('click', iniciarJogo )

}

//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores) //Ativa os escutadores