//*Aula 01 (12/02/2025) - Introdução ao JavaScript*//

////*FUNÇÕES
// function hello() {
//     console.log('Hello, World!')
// }
// //chamar a função
// hello()

// function hello(nome) {
//     console.log('Hello, ' + nome + '!')
// }
// hello('Genésio')

////*VETORES
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[1] = 2
// console.log(v1.length)
// v1[2] = 'Olá'
// console.log(v1.length)

// console.log(v1)

// for (let i = 0; i < v1.length; i++) {
//     console.log(v1[i])
// }

////////////////////////////////////////////////////////////////////////

////*COMPARAÇÃO COM == e  ===

//// == Compara apenas o valor (igualdade simples)
// console.log(5 == "5");  // true  (String "5" é convertida para número 5 antes da comparação)
// console.log(0 == false); // true  (false é convertido para 0)
// console.log(null == undefined); // true  (null e undefined são considerados iguais)
// console.log(" " == 0); // true  (string vazia é convertida para número 0)
// console.log([1,2] == "1,2"); // true  (array é convertido para string "1,2")

//// === Compara valor e tipo (igualdade escrita)
// console.log(5 === "5");  // false  (tipos diferentes: número vs string)
// console.log(0 === false); // false  (booleano vs número)
// console.log(null === undefined); // false  (tipos diferentes)
// console.log(" " === 0); // false  (string vs número)
// console.log([1,2] === "1,2"); // false  (array vs string)


////*COERÇÃO DE TIPOS
// const n1 = 2
// const n2 = '5'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

////////////////////////////////////////////////////////////////////////

////*DECLARANDO VARIÁVEIS
//O VAR NÃO RESPEITA O ESCOPO DE BLOCO, ELE É GLOBAL🌐
//JÁ O LET RESPEITA O ESCOPO DE BLOCO🔒

//PQ NÃO USAR O VAR?//
// var idade = 18
// console. log( 'Oi, ' + nome)
// //IÇAMENTO (HOISTING)//
// if(idade >= 18){
//     var nome = 'Genésio'
//     console.log ('Parabéns ' + nome + ', Você pode dirigir!')
// }
// console.log('Hasta la vista ' + nome + '!')  

// var linguagem  = "Python"; 
// console.log("Estou aprendendo " + linguagem + '!');
// var linguagem = "JavaScript";
// console.log("Estou aprendendo " + linguagem + '!');

// var a = 10;
// console.log(a); 
// a = 20; 
// console.log(a);        

// let  a = 10;
// console.log(a);
// a = 20;
// console.log(a);

////////////////////////////////////////////////////////////////////////

////*DECLARANDO CONSTANTES
// const idade = 27
// Se fosse em Java: String nome = 'Zé da Manga';
// const nome =  'Zé da Manga';
// console.log(nome)
// nome = 'Agnaldo';
// console.log(nome)



////*Aula 02 (12/03/2025) - Funções no JavaScript*////



////*Funções regulares: FUNCTION() {}

// function soma(a, b) {
//     console.log('a: ${a}')
//     console.log('b: ${b}')
//     return a + b
// }
// const res = soma(2, 3) 
// console.log(res)
// console.log(soma(1))

// const dobro = function (n) {
//     return 2 * n
// }

// const triplo = function (n = 5) {
//     return 3 * n
// }
// console.log(triplo())   
// console.log(triplo(4))  
// console.log(triplo(null))
// console.log(Number(null))
// console.log(triplo(2, 78))

////*ARROW FUNCTIONS () => {}

// const t3 = () => 2 + 2
// console.log(t3())
// const t2 = a => {console.log('Olá, sou a t2 e estou exibindo o valor: ' + a)}
// t2(1)
// const t1 = n => {console.log(n)}
// t1(1)

// const dobro = valor => valor * 2
// console.log(dobro(7))

// const ehPar = n => { 
//     console.log(n)
//     return n % 2 === 0 
// }
// console.log(ehPar(7))

////*CLOSURES

// const umaFuncao = function () {
//     console.log('Oi, sou a umaFuncao') 
// }
// umaFuncao() 


////////////////////////INTERVALO DA ENTREVISTA, VER A AULA GRAVADA E ATUALIZAR O CÓDIGO////////////////////////


// function f(){
//     let nome= 'Genésio'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){ 
//     let nome = 'Genésio'
//     return function (){
//         console.log("Olá, " + nome)
//     }
// }

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log('${saudacao}, ${nome}!')
//     }
// }
// const olaLuma = saudacoesFactory('Olá', 'Luma')
// olaLuma()
// ESSE É UM EXEMPLO DE CLOSURE!!!

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }

// const resultadoDeEAgora = eAgora()  
// resultadoDeEAgora.f1()
// resultadoDeEAgora.f2()

/////////////////ATIVIDADES/////////////////

// const nomes = ['Genésio', 'Luma', 'Agnaldo', 'Aline']

// produza o vetor contendo somente os nomes que começam com a letra 'A'
////*Solução usando filter, arrow function e startsWith:
// const nomesComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(nomesComA)

////*Solução usando apenas o filter:
// const nomesComA = nomes.filter(function(nome){
//     return nome[0] === 'A' || nome[0] === 'a'
// })   
// console.log(nomesComA)

////*Solução sem usar filter, arrow function e startsWith:
// const resultante = []
// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i][0] === 'A' || nomes[i][0] === 'a')
//         resultante.push(nomes[i])
// }
// console.log(resultante)

// // produzir um novo vetor contendo a letra inicial de cada nome
// // saída esperada: ['G', 'L', 'A', 'A']
//Exemplo de mapeamento:
// const resultante = []
// for (let i=0; i < nomes.length; i++) {
//     resultante.push(nomes[i][0])
// }
// console.log(resultante)

// //Achar um método da documentação do JavaScript que faça a mesma coisa que o código acima!
// const resultante = nomes.map(nome => nome[0])
// console.log(resultante)

// //produzir um vetor booleano indicando se o nome começa com a letra 'A'
// const todosComecamComA = !nomes.map(nome => nome[0])
// console.log(todosComecamComA)

// //produzir um vetor booleano indicando se pelo menos um nome começa com a letra 'A'
// const peloMenosUmComecaComA = nomes.some(n => n.toLowerCase() .startsWith('a'))
// console.log(peloMenosUmComecaComA)

////*REDUCE
// Serve para reduzir um vetor a um único valor!
// const valores = [1, 2, 3, 4]
// const res = valores.reduce((ac, v) => ac + v) 
// console.log(res)
