//FUnções da Tela

function escolherCarro( nomeDoCarro , a, f, c ){
    veiculo = nomeDoCarro
    aceleracao = a;
    freio = f;
    curva = c;

    switch(veiculo){
        case "broken":
            imagemCarro = "carroBroken.png"//trash
            break;
        case "ferrugem":
            imagemCarro = "carroFerrugem.png"//trash
            break;
        case "trash":
            imagemCarro = "carroTrash.png"//trash
            break;
        case "dourado":
            imagemCarro = "carroDourado.png"//trash
            break;
        case "sombra":
            imagemCarro = "carroPreto.png"//sombra
            break;
        case "nitro":
            imagemCarro = "carroRoxo.png"//Íris
            break;
        case "oceano":
            imagemCarro = "carroAzul.png"//oceano
            break;
        case "raiz":
            imagemCarro = "carroVerde.png"//raiz
            break;
        case "escarlate":
            imagemCarro = "carroVermelho2.png"//escarlate
            break;
        case "ssp":
            imagemCarro = "carroPolicial.png"//escarlate
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
    
    pontuacao = new component("30px", "Consolas", "white", 20, 40, "text")
    fundo = new component(300, 500, "pista.png", 0, 0, "background");

    telaInicial.style.display = "none"
  
    areaDoJogo.start();
}