//Números
let zero = document.getElementById('zero');
let um = document.getElementById('um');
let dois = document.getElementById('dois');
let tres = document.getElementById('tres');
let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');
let valor = document.getElementById('valor');

//Limpar
let limpar = document.getElementById('limpar');

//Operações
let maisOuMenos = document.getElementById('maisOuMenos');
let porcentagem = document.getElementById('porcentagem');
let divisao = document.getElementById('divisao');
let mulitplicacao = document.getElementById('multiplicacao');
let subtracao = document.getElementById('subtracao');
let soma = document.getElementById('soma');
let igual = document.getElementById('igual');

//Número atual
let numeroAtual = 0;

//Botão números
zero.addEventListener("click", function() {
    numeroAtual = parseFloat('0')
    valor.innerText = numeroAtual;
  });

um.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

 dois.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  um.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  tres.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  quatro.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  cinco.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  seis.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  sete.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  oito.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  nove.addEventListener("click", function() {
    valor.innerText = 'limpando';
  });

  //Click Limpar

  limpar.addEventListener("click", function() {
    valor.innerText = '';
  });

  //Operações
  
  maisOuMenos.addEventListener("click", function() {
    valor.innerText = '';
  });
  
  mulitplicacao.addEventListener("click", function() {
    valor.innerText = ' ';
  });

  divisao.addEventListener("click", function() {
    valor.innerText = 'divisao';
  });

  soma.addEventListener("click", function() {
    valor.innerText = 'divisao';
  });

  subtracao.addEventListener("click", function() {
    valor.innerText = 'divisao';
  });
