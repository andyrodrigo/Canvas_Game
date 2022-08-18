//Controla os níveis
function niveis(){

    switch(nivel){
      case 1:
        if(reset){
          nivelAtual.innerText = "NIVEL 1 - "
          nomeNivel.innerText = "Entrando na Rodovia"
          desvios = false
          intervalo = 80
          veloCarros = 1;
          mudaNivel = 100
          reset = false
        }
        nivel_carros_descendo();
        break;
      case 2: //100 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 2 - "
          nomeNivel.innerText = "Engarrafando"
          intervalo = 40
          veloCarros = 1;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 200){
          intervalo = 80
        }
        nivel_carros_descendo();
        break;
      case 3: //250 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 3 - "
          nomeNivel.innerText = "Engarrafamento"
          intervalo = 30
          veloCarros = 1;
          mudaNivel += 100
          reset = false
        }
        nivel_carros_descendo();
        break;
      case 4: //350 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 4 - "
          nomeNivel.innerText = "Hora do Rush"
          desvios = true
          intervalo = 30
          veloCarros = 1;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 450){
          intervalo = 80
        }
        nivel_carros_descendo();
        break;
      case 5: //500 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 5 - "
          nomeNivel.innerText = "Acelerando"
          desvios = true
          intervalo = 30
          veloCarros = 2;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 620){
          intervalo = 10000
        }
        nivel_carros_descendo();
        break;
      case 6: //650 pontos
        if(reset){
          obstaculos = []
          nivelAtual.innerText = "NIVEL 6 - "
          nomeNivel.innerText = "Cuidado com os Militares"
          desvios = false
          intervalo = 40
          veloCarros = 3;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 780){
          intervalo = 10000
        }
        nivel_militares(1);
        break;
      case 7: //800 pontos
      if(reset){
        obstaculos = []
        nivelAtual.innerText = "NIVEL 7 - "
        nomeNivel.innerText = "Protesto dos caminhoneiros"
        desvios = false
        intervalo = 40
        veloCarros = 3;
        mudaNivel += 200
        reset = false
      }
      if(pontos == 970){
        intervalo = 500
      }
      nivel_caminhoes();
      break; 
      case 8: //1000 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 8 - "
          nomeNivel.innerText = "Fechadores de Rodovia"
          desvios = false
          intervalo = 150
          veloCarros = 2;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 1100){
          intervalo = 10000
        }
        nivel_fechadores();
        break; 
      case 9: //1150 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 9 - "
          nomeNivel.innerText = "Estou com Pressa"
          desvios = false
          intervalo = 150
          veloCarros = 3;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 1270){
          intervalo = 10000
        }
        nivel_fechadores();
        break; 
      case 10://1300 pontos
        if(reset){
          obstaculos = []
          nivelAtual.innerText = "NIVEL 10 - "
          nomeNivel.innerText = "Alta Velocidade"
          desvios = false
          intervalo = 40
          veloCarros = 6;
          mudaNivel += 100
          reset = false
        }
        nivel_carros_descendo();
        break;
      case 11://1400 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 11 - "
          nomeNivel.innerText = "Sai da Frente"
          desvios = false
          intervalo = 80
          veloCarros = 3;
          mudaNivel += 100
          reset = false
        }
        nivel_carrosSubindo();
        break;
      case 12://1500 pontos
        if(reset){
          nivelAtual.innerText = "NIVEL 12 - "
          nomeNivel.innerText = "Velozes e Furiosos"
          desvios = true
          intervalo = 40
          veloCarros = 4;
          mudaNivel += 150
          reset = false
        }
        if(pontos == 1600){
          intervalo = 10000
        }
        nivel_carrosSubindo();
        break;
      case 13://1650 pontos
        if(reset){
          somSirenes.play()
          obstaculos = []
          nivelAtual.innerText = "NIVEL 13 - "
          nomeNivel.innerText = "Patrulha Policial"
          desvios = true
          intervalo = 20
          veloCarros = 4;
          mudaNivel += 200
          reset =  false
        }
        if(pontos == 1800){
          intervalo = 10000
        }
        nivel_policia();
        break;
      case 14: //1850 pontos
        if(reset){
          obstaculos = []
          nivelAtual.innerText = "NIVEL 14 - "
          nomeNivel.innerText = "A volta Militares"
          desvios = false
          intervalo = 40
          veloCarros = 2;
          mudaNivel += 200
          reset = false
        }
        if(pontos == 2000){
          intervalo = 10000
        }
        nivel_militares(2);
        break;
      case 15: //2050 pontos
      if(reset){
          obstaculos = []
          nivelAtual.innerText = "NIVEL 15 - "
          nomeNivel.innerText = "Loucos da Rodovia"
          desvios = false
          intervalo = 100
          veloCarros = 1;
          mudaNivel += 250
          reset = false
        }
        if(pontos == 2250){
          intervalo = 10000
        }
        nivel_loucos();
        break;
      case 16: // 2300 pontos
      if(reset){
          obstaculos = []
          nivelAtual.innerText = "NIVEL 16 - "
          nomeNivel.innerText = "Louco da Rodovia"
          desvios = true
          intervalo = 1000
          veloCarros = 1;
          mudaNivel += 200
          reset = false
        }
        if(pontos == 2500){
          obstaculos = []
          intervalo = 50
          veloCarros = 1;
        }
        nivel_loucos();
        break;
      default:
        if(reset){
          nivelAtual.innerText = "NIVEL " + nivel + " - "
          nomeNivel.innerText = "Ad infinitum"
          desvios = true
          if(intervalo > 10){
            intervalo -= 10
          }
          if(veloCarros < 10 ){
            veloCarros += 1;
          }
          mudaNivel += 100
          reset = false
        }
        nivel_carros_descendo();
    }
  }