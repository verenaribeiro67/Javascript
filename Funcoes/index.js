
/*const souUmDado = function nomeDaFuncao() {
    console.log('Sou um dado');
};
// Function expression
//const souUmDado = falaOi();
//alert(souUmDado);
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo');
funcao();
}

executaFuncao(souUmDado);

const funcaoArrow = () => {

    console.log('Sou uma arrow function');

};
funcaoArrow();

//setInterval(function(){
//
//}, 1000);
//setInterval(afuncao, 1000);

//Dentro de um objeto

const obj ={
    falar: function(){
        console.log('Estou falando');
    }
};
obj.falar();

const pessoa ={
    correr(){
        console.log('Estou Correndo');
    }
};
pessoa.correr();
var nome = '';
function funcao(){
nome  = prompt('Insira seu nome');
console.log(nome);
}

funcao(nome);

function funcao(valor1, valor2, valor3){
    console.log(valor1,valor2, valor3);
}
let obj = {
    nome: 'Luiz',
    sobrenome: 'Queiroz',
    idade: 27
};

funcao(obj);*/

function conta(operador, acumulador, ...numeros){
   for(let numero in numeros){
       
   }
   console.log(operador, acumulador, numeros);
}
conta('+', 0, 20,30,40,50);