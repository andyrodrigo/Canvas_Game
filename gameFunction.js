//FUnções da Tela

//Ajusta o carro escolhido pelo jogador
function escolherCarro( nomeDoCarro , a, f, c, p ){

    if( pontosRecorde < p){
        if(p == 350){
            msgBloqueio.src = "imagens/Desbloqueio350.png"
        }else if(p == 1000){
            msgBloqueio.src = "imagens/Desbloqueio1000.png"
        }else{
            msgBloqueio.src = "imagens/Desbloqueio2000.png"
        }
        document.getElementById( nomeDoCarro ).appendChild(msgBloqueio);
        return
    }

    //Som de ligar o motor
    somLigando.currentTime=0;
    somLigando.play();
    //Configura carro
    veiculo = nomeDoCarro
    aceleracao = a;
    freio = f;
    curva = c;
    switch(veiculo){
        case "broken":
            imagemCarro = "imagens/carroBroken.png"
            break;
        case "ferrugem":
            imagemCarro = "imagens/carroFerrugem.png"
            break;
        case "trash":
            imagemCarro = "imagens/carroTrash.png"
            break;
        case "dourado":
            imagemCarro = "imagens/carroOuro.png"
            break;
        case "sombra":
            imagemCarro = "imagens/carroPreto.png"
            break;
        case "nitro":
            imagemCarro = "imagens/carroRoxo.png"
            break;
        case "oceano":
            imagemCarro = "imagens/carroAzul.png"
            break;
        case "raiz":
            imagemCarro = "imagens/carroVerde.png"
            break;
        case "escarlate":
            imagemCarro = "imagens/carroVermelho2.png"
            break;
        case "ssp":
            imagemCarro = "imagens/carroPolicial.png"
            break;
        default:
            alert("Carro não selecionado")
    }
    //Retira seleção dos carros
    for( i=0 ; i<10; i++){
        document.getElementById( veiculos[i] ).style.backgroundColor = "unset"
    }
    //Ilumina carro escolhido
    document.getElementById(nomeDoCarro).style.backgroundColor = "aliceblue"
    //Ativa botão de inicio de Jogo
    iniciar.style.display = "block"
}

//Mostra que carros estão bloqueados ou desbloqueia carros
function exibirBloqueio(p , nomeDoCarro){
    let carroSelecionado = document.getElementById( nomeDoCarro )
    if( pontosRecorde < p){
        if(p == 350){
            msgBloqueio.src = "imagens/desbloqueio350.png"
        }else if(p == 1000){
            msgBloqueio.src = "imagens/desbloqueio1000.png"
        }else{
            msgBloqueio.src = "imagens/desbloqueio2000.png"
        }
        carroSelecionado.appendChild(msgBloqueio);
        return
    }else{
        carroSelecionado.classList.remove("bloqueado");
        carroSelecionado.classList.add("aberto");   
        if( carroSelecionado.contains(msgBloqueio) ){
            carroSelecionado.removeChild(msgBloqueio);
        }
    }
}

//Abre a tela de jogo
function iniciarJogo() {
    //Cria carro do jogador na pista
    personagem = new component(30, 30, imagemCarro, 135, 250, "image"); //tamX, tamY, imagem, posX, posY
    //Configura sons e inicia som da pista em looping
    somColisao = new Audio("audio/colisao.mp3")
    if(veiculo == "ssp"){
        somBuzina = new Audio("audio/sirene.mp3")
    }else{
        somBuzina = new Audio("audio/buzina.mp3")
    }
    somDirigindo = new Audio("audio/dirigindo.mp3");
    somDirigindo.play();
    somDirigindo.loop = true
    //Cria o Texto com os Pontos
    pontuacao = new component("20px", "Courier New", "yellow", 20, 40, "text")
    //Cria imagem da pista no fundo
    fundo = new component(300, 500, "imagens/pista.png", 0, 0, "background");
    //Exibe Janelas de jogo e bloquei a de inicio
    telaInicial.style.display = "none"
    telaDoJogo.style.display = "flex"
    Bcontroles[0].style.display = "flex"
    Bcontroles[1].style.display = "flex"
    controleDeNiveis.style.display = "flex"
    //Começa o jogo na prática
    areaDoJogo.start();
}

//Retorna a tela inicial
function voltar() {
    telaInicial.style.display = "block"
    telaDoJogo.style.display = "none"
    TelaDeBatida.style.display = "none"
    Bcontroles[0].style.display = "none"
    Bcontroles[1].style.display = "none"
    controleDeNiveis.style.display = "none"
    limparJogo()
}

//Reinicia sem voltar para tela de seleção de carros
function reiniciarJogo() {
    TelaDeBatida.style.display = "none"
    limparJogo()
    iniciarJogo()
}

//Apaga dados do jogo
function limparJogo(){
    obstaculos = [];
    pontos = 0;
    veloCarros = 1;
    velPista = 10;
    intervalo = 40;
    nivel = 1
    mudaNivel = 100
    fimDeJogo = false
    reset = true
}

//Opção Temporaria (Continua do jeito que parou)
function retomarJogo() {
    TelaDeBatida.style.display = "none"
    fimDeJogo = false
    iniciarJogo()
}

//PausaJogo
function pausar(){
    if(!fimDeJogo){
        if(pausa){
            areaDoJogo.continue();
            somDirigindo.play();
            pausa = false
            pause.innerText = "pausa"
        }else{
            areaDoJogo.stop();
            somDirigindo.pause();
            pausa = true
            pause.innerText = "volta"
        }
    }
}

//Buzinar
function buzinar(){
    if(!fimDeJogo){
        somBuzina.play();
    }
}

//Desenha Botões de controle do celular
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

function fechar(){
    telaComoJogar.style.display = "none"
}

function abrir(){
    telaComoJogar.style.display = "flex"
}
