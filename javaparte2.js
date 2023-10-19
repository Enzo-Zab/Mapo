function Começar() {
    let i = 0;
    let ano = "É a  soma dos numeros pares de 0 até 50!"
    let h = 0;
    while (i < 50) {
        
        i+=1
        h+= i*2
       

    }
    document.getElementById("resposta").innerHTML = h
    document.getElementById("triste").innerHTML = ano

}

function dog(){

var numero = Number(document.getElementById("entrada").value)
var resposta = document.getElementById('resposta');
var divisores= 0; 

for(var count=1 ; count<=numero; count++)
if(numero%count == 0)
divisores++;

if(divisores == 2)
 resposta.innerHTML='É primo';

 else
    resposta.innerHTML='Não é primo';




}

function oitocentos(){
    var termo = Number(document.getElementById("entrada").value)
    var resposta = document.getElementById('resposta');
    var penultimo=0, ultimo=1; 
    var numero;

    if(termo<=2)
    numero = termo-1;
    else
    for(var count = 3; count <= termo; count ++){
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;


    }
 resposta.innerHTML= numero; 
}

