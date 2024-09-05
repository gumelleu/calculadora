function insert(num){
    var numero= document.getElementById('js-resultado').innerHTML ;
    document.getElementById('js-resultado').innerHTML = numero + num;

}
function clean(){

    document.getElementById('js-resultado').innerHTML = "";
}

function calcular(){

    var resultado = document.getElementById('js-resultado').innerHTML ;
    if(resultado){
        document.getElementById('js-resultado').innerHTML = eval(resultado);
    }

   
}

function back(){
    var resultado = document.getElementById('js-resultado').innerHTML;
    document.getElementById('js-resultado').innerHTML = resultado.substring(0,resultado.length -1);

}

function inverter(){
    var resultado = document.getElementById('js-resultado').innerHTML;
    var sinal = document.getElementById('js-resultado').innerHTML = resultado * -1;

    document.getElementById('js-resultado').innerHTML = sinal;

}



