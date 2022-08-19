//Controla os níveis
function niveis(){

    switch(nivel){
      case 1:
        if(reset)
          configurarNivel( "Entrando na Rodovia", false, 80, 1, 100 )//nome,desvio,intervalo,velo,pontosParaMudar
        nivel_carros_descendo();
        break;
      case 2: //100 pontos
        if(reset)
          configurarNivel( "Engarrafando", false, 40, 1, 150 )
        if(pontos == pontosDeEntrada + 140)
          intervalo = 10000
        nivel_carros_descendo();
        break;
      case 3: //250 pontos
        if(reset)
          configurarNivel( "Engarrafamento", false, 30, 1, 100 )
        nivel_carros_descendo();
        break;
      case 4: //350 pontos
        if(reset)
          configurarNivel( "Hora do Rush", true, 30, 1, 150 )
        if(pontos == pontosDeEntrada + 100)
          intervalo = 80
        nivel_carros_descendo();
        break;
      case 5: //500 pontos
        if(reset)
          configurarNivel( "Acelerando", true, 30, 2, 150 )
        if(pontos == pontosDeEntrada + 120)
          intervalo = 10000
        nivel_carros_descendo();
        break;
      case 6: //650 pontos
        if(reset){ obstaculos = []
          configurarNivel( "Cuidado com os Militares", false, 40, 3, 150 )}
        if(pontos == pontosDeEntrada + 130)
          intervalo = 10000
        nivel_militares(1);
        break;
      case 7: //800 pontos
      if(reset){ obstaculos = []
        configurarNivel( "Protesto dos caminhoneiros", false, 40, 3, 200 )}
      if(pontos == pontosDeEntrada + 160){
        intervalo = 10000
      }
      nivel_caminhoes();
      break; 
      case 8: //1000 pontos
        if(reset)
          configurarNivel( "Fechadores de Rodovia", false, 150, 2, 150 )
        if(pontos == pontosDeEntrada + 130){
          intervalo = 10000
        }
        nivel_fechadores();
        break; 
      case 9: //1150 pontos
        if(reset)
          configurarNivel( "Estou com Pressa", false, 150, 3, 150 )
        if(pontos == pontosDeEntrada + 120){
          intervalo = 10000
        }
        nivel_fechadores();
        break; 
      case 10://1300 pontos
        if(reset){ obstaculos = []
          configurarNivel( "Alta Velocidade", false, 40, 6, 100 )}
        nivel_carros_descendo();
        break;
      case 11://1400 pontos
        if(reset)
          configurarNivel( "Sai da Frente", false, 80, 3, 100 )
        nivel_carrosSubindo();
        break;
      case 12://1500 pontos
        if(reset)
          configurarNivel( "Velozes e Furiosos", true, 40, 4, 150 )
        if(pontos == pontosDeEntrada + 130){
          intervalo = 10000
        }
        nivel_carrosSubindo();
        break;
      case 13://1650 pontos
        if(reset){ obstaculos = []; somSirenes.play()
          configurarNivel( "Patrulha Policial", true, 20, 4, 110 )}
        if(pontos == pontosDeEntrada + 90)
          intervalo = 10000
        nivel_policia();
        break;
      case 14: //1850 pontos
        if(reset){ obstaculos = []
          configurarNivel( "A volta Militares", false, 40, 2, 200 )}
        if(pontos == pontosDeEntrada + 180)
          intervalo = 10000
        nivel_militares(2);
        break;
      case 15: //2050 pontos
      if(reset){ obstaculos = []
        configurarNivel( "Loucos da Rodovia", false, 100, 1, 150 )}  
        if(pontos == pontosDeEntrada + 130)
          intervalo = 10000
        nivel_loucos(false);
        break;
      case 16: //2200 pontos
      if(reset){
        configurarNivel( "Costurando", false, 75, 2, 150 )}    
        if(pontos == pontosDeEntrada + 120)
          intervalo = 10000
        nivel_loucos(false);
        break;
      case 17: // 2250 pontos
      if(reset){ obstaculos = []; carroFantasma = true
        configurarNivel( "A Sombra Perseguidora", true, 50, 2, 100 )}
        if(pontos == pontosDeEntrada + 95){
          intervalo = 50
          veloCarros = 0;
        }
        nivel_loucos(carroFantasma);
        break;
      default:
        if(reset){
          nivelAtual.innerText = "NIVEL " + nivel + " - "
          nomeNivel.innerText = "Ad infinitum"
          desvios = true
          if(intervalo > 10){
            intervalo -= 10
            console.log("Intervalo: "+intervalo)
          }
          if(veloCarros < 9 ){
            veloCarros += 1;
            console.log("Velocidade: "+veloCarros)
          }
          mudaNivel += 100
          reset = false
        }
        nivel_carros_descendo();
    }
  }

//Configura o nível
function configurarNivel( nomeDoNivel, desviar, i, vc, mn ){
  pontosDeEntrada = pontos
  nivelAtual.innerText = nivelAtual.innerText = "NIVEL " + nivel + " - "
  nomeNivel.innerText = nomeDoNivel
  desvios = desviar
  intervalo = i
  veloCarros = vc;
  mudaNivel += mn
  reset = false
}