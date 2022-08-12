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
        document.getElementById( veiculos[i] ).style.backgroundColor = "rgb(223, 225, 228)"
    }
    document.getElementById(nomeDoCarro).style.backgroundColor = "aliceblue"
    iniciar.style.display = "block"
}

function iniciarJogo() {
    
    //alert(imagemCarro)
    personagem = new component(30, 30, imagemCarro, 185, 450, "image"); //tamX, tamY, imagem, posX, posY
    //personagem = new component(30, 30, "red", 10, 120);

    somColisao = new Audio("audio/colisao.mp3")
    somDirigindo = new Audio("audio/dirigindo.mp3");
    somDirigindo.play();
    
    pontuacao = new component("30px", "Consolas", "white", 20, 40, "text")
    fundo = new component(300, 500, "imagens/pista.png", 0, 0, "background");

    telaInicial.style.display = "none"
    telaDoJogo.style.display = "flex"
  
    areaDoJogo.start();
}

somDirigindo.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);