//FUnções da Tela

function escolherCarro( nomeDoCarro , a, f, c ){

    //somLigando.pause();
    somLigando.currentTime=0;
    somLigando.play();

    veiculo = nomeDoCarro
    aceleracao = a;
    freio = f;
    curva = c;

    switch(veiculo){
        case "broken":
            imagemCarro = "imagens/carroBroken.png"//trash
            break;
        case "ferrugem":
            imagemCarro = "imagens/carroFerrugem.png"//trash
            break;
        case "trash":
            imagemCarro = "imagens/carroTrash.png"//trash
            break;
        case "dourado":
            imagemCarro = "imagens/carroOuro.png"//trash
            break;
        case "sombra":
            imagemCarro = "imagens/carroPreto.png"//sombra
            break;
        case "nitro":
            imagemCarro = "imagens/carroRoxo.png"//Íris
            break;
        case "oceano":
            imagemCarro = "imagens/carroAzul.png"//oceano
            break;
        case "raiz":
            imagemCarro = "imagens/carroVerde.png"//raiz
            break;
        case "escarlate":
            imagemCarro = "imagens/carroVermelho2.png"//escarlate
            break;
        case "ssp":
            imagemCarro = "imagens/carroPolicial.png"//escarlate
            break;
        default:
            alert("Carro não selecionado")
    }

    for( i=0 ; i<10; i++){
        document.getElementById( veiculos[i] ).style.backgroundColor = "unset"
        //document.getElementById( veiculos[i] ).style.backgroundImage = "linear-gradient(315deg, #6782B4 0%, #B1BFD8 74%)"
    }
    document.getElementById(nomeDoCarro).style.backgroundColor = "aliceblue"
    iniciar.style.display = "block"
}

function iniciarJogo() {
    
    personagem = new component(30, 30, imagemCarro, 185, 450, "image"); //tamX, tamY, imagem, posX, posY
    //personagem = new component(30, 30, "red", 10, 120);

    somColisao = new Audio("audio/colisao.mp3")
    somDirigindo = new Audio("audio/dirigindo.mp3");
    somDirigindo.play();
    somDirigindo.loop = true
    
    pontuacao = new component("30px", "Consolas", "white", 20, 40, "text")
    fundo = new component(300, 500, "imagens/pista.png", 0, 0, "background");

    telaInicial.style.display = "none"
    telaDoJogo.style.display = "flex"
    Bcontroles[0].style.display = "flex"
    Bcontroles[1].style.display = "flex"
  
    areaDoJogo.start();
}

function voltar() {
    telaInicial.style.display = "block"
    telaDoJogo.style.display = "none"
    TelaDeBatida.style.display = "none"
    Bcontroles[0].style.display = "none"
    Bcontroles[1].style.display = "none"
    limparJogo()
    //alert("aqui")
    //areaDoJogo.remove()
}

function reiniciarJogo() {
    TelaDeBatida.style.display = "none"
    limparJogo()
    iniciarJogo()
}

function limparJogo(){
    obstaculos = [];
    pontos = 0;
    veloCarros = 1;
    velPista = 10;
    intervalo = 40;
    nivel = 1
}

window.onload = function() {
    var canvaD = canvaDireita.getContext("2d");
    var canvaE = canvaEsquerda.getContext("2d");
    var canvaF = canvaFreio.getContext("2d");
    var canvaA = canvaAcelerador.getContext("2d");
    var imgD = document.getElementById("setaDireita");
    var imgE = document.getElementById("setaEsquerda");
    var imgF = document.getElementById("freio");
    var imgA = document.getElementById("acelerador");

    canvaD.drawImage(imgD, 0, 0);
    canvaE.drawImage(imgE, 0, 0);
    canvaF.drawImage(imgF, 0, 0);
    canvaA.drawImage(imgA, 0, 0);
  };