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
        // testeeee
    }
}

function back(){
    var resultado = document.getElementById('js-resultado').innerHTML;
    document.getElementById('js-resultado').innerHTML = resultado.substring(0,resultado.length -1);

}
function inverte(sinal){
    var resultado = document.getElementById('js-resultado').innerHTML ;
    var sinal= resultado.innerHTML * -1;
    resultado.innerHTML = sinal;


}