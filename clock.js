
var canvas = document.getElementById("canva");

var relogio = canvas.getContext("2d"); //cria objeto 2d
//var razao = canvas.height / 2; //a razão do relogio é de acordo com a altura do Canva
var razao = canvas.getBoundingClientRect().height / 2; //a razão do relogio é de acordo com a altura do Canva
//alert(razao)
relogio.translate( razao, razao); //|Modifica o centro do relógio para o centro do canva
razao = razao * 0.90; //reduz a razao para 90% do tamanho, para não tocar nas bordas

setInterval( desenhaRelogio, 1000);
//desenhaRelogio();

function desenhaRelogio() {

    desenhaFrente( relogio, razao);
    desenhaNumeros( relogio, razao );
    desenhaTemporizadores( relogio, razao);

}

function desenhaFrente( relogio, razao) {

    var grad;
  
    //Relogio
    relogio.beginPath();
    relogio.arc(0, 0, razao , 0 , 2 * Math.PI); //x,y,raio,anguloInicial, anguloFinal
    relogio.fillStyle = "white";
    relogio.fill();
  
    //Borda
    grad = relogio.createRadialGradient(0, 0 ,razao * 0.95, 0, 0, razao * 1.05);//Cria gradiente 95% e 105% da razão do relógio
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    relogio.strokeStyle = grad;//estilo grad
    relogio.lineWidth = razao*0.1;
    relogio.stroke();//desenha o círculo
  
    //Centro
    relogio.beginPath();
    relogio.arc(0, 0, razao * 0.1, 0, 2 * Math.PI);
    relogio.fillStyle = '#333';
    relogio.fill();
  }

function desenhaNumeros( relogio, razao ){

    var ang;
    var num;

    relogio.font = razao * 0.15 + "px arial"; //Tamanho da Fonte é 15% da razão
    relogio.textBaseline = "middle"; //alinhamento
    relogio.textAlign = "center"; //alinhamento

    //Escreve os 12 números
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6; // 1/6 de PI para cada angulo
      relogio.rotate(ang);
      relogio.translate(0, -razao * 0.85);
      relogio.rotate(-ang);
      relogio.fillText( num.toString(), 0, 0);
      relogio.rotate(ang);
      relogio.translate(0, razao * 0.85);
      relogio.rotate(-ang);
    }
}

function desenhaTemporizadores( relogio, razao){

  //Recupra hora atual
  var agora = new Date();
  var hora = agora.getHours();
  var minuto = agora.getMinutes();
  var segundo = agora.getSeconds();

  //hora
  hora = hora % 12;
  hora = ( hora * Math.PI/6 ) + ( minuto * Math.PI/(6*60) ) + ( segundo * Math.PI/(360*60) );
  desenhaMao( relogio, hora, razao*0.5, razao*0.07);
  //minuto
  minuto = ( minuto*Math.PI/30 ) + ( segundo * Math.PI/(30*60) );
  desenhaMao( relogio, minuto, razao*0.8, razao*0.07);
  // segundo
  segundo = ( segundo * Math.PI/30);
  desenhaMao( relogio, segundo, razao*0.9, razao*0.02);
}

function desenhaMao( relogio, pos, length, width) {
  relogio.beginPath();
  relogio.lineWidth = width;
  relogio.lineCap = "round";
  relogio.moveTo(0,0);
  relogio.rotate(pos);
  relogio.lineTo(0, -length);
  relogio.stroke();
  relogio.rotate(-pos);
}