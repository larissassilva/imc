function imc(){
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc=peso/(altura*altura);
    document.getElementById("resultado").innerHTML = nome+" o seu IMC é "+Math.round(imc, -1);
    if((imc>=18.6)&&(imc<=24.9)){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está Normal";
    }
    else if((imc>=25)&&(imc<=29.9)){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está com Sobrepeso";
    }
   else if((imc>=30)&&(imc<=34.9)){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está com Obesidade I";
    }
    else if((imc>=35)&&(imc<=39.9)){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está com Obesidade II";
    }
    else if(imc>=40){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está com Obesidade III";
    }
    else if(imc<=18.5){
      document.getElementById("mensagem").innerHTML = "De acordo com seu IMC você está abaixo do Peso";
    }
    else{
      document.getElementById("mensagem").innerHTML = "";
    }
    
  }
