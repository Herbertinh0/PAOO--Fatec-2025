////*Aula 01 (12/02/2025) - Introdução ao JavaScript*////

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


////////////////////////INTERVALO DA ENTREVISTA, VER A AULA GRAVADA E ATUALIZAR O CÓDIGO//////////////////////////


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



////AULA 03 (19/03/2025) - OBJETOS E DESESTRUTURAÇÃO EM JAVASCRIPT////



////*OBJETOS LITERAIS E DESESTRUTURAÇÃO EM JAVASCRIPT
////EXEMPLO: uma pessoa que se chama joão e tem 17 anos
// const pessoa = {
//         nome: 'João',
//         idade: 17
//     }
//     console.log(pessoa.nome)
//     console.log(pessoa.idade)

//     const { nome, idade } = pessoa
//     console.log(nome, idade)

////EXEMPLO: uma pessoa que se chama maria e tem 21 anos e mora na rua B, número 10

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     logradouro: 'Rua B',
//     numero: 10
// }

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,  
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 10
//     }
// }

// console.log(pessoa.nome)    
// console.log(pessoa.idade)
// console.log(pessoa.logradouro)
// console.log(pessoa.numero)

///Uma concessionária que tem CNPJ e endereço (logradouro, numero e bairro). Ela tem um estoque de veiculos. 
//// Cada veiculo tem marca, modelo e ano de fabricação. Em um determinado momento, talvez o estoque esteja vazio. Noutro, talvez ele tenha 17 veiculos.

// const concessionaria = {
//     cnpj: '123456789',
//     endereco: {
//         logradouro: 'Rua C',
//         numero: 20,
//         bairro: 'Jardim Europa'
//     },
//     estoque: [
//         {marca: 'Mercedes', modelo: 'Flecha de prata', ano: 1978},
//         {marca: 'Ferrari', modelo: 'F40', ano: 1988},
//         {marca: 'Ford', modelo: 'Mustang', ano: 1967}
//     ]
// }

////EXEMPLO DO PROFESSOR:

// const concessionaria = {
//     cnpj: '123456789',
//     endereco: {
//         logradouro: 'Rua C',
//         numero: 20,
//         bairro: 'Jardim Europa'
//     },
//     veiculos: [
//         {
//             marca: 'Mercedes', modelo: 'Flecha de prata', ano: 1978
//         },
//         {
//             marca: 'Ferrari', modelo: 'F40', ano: 1988
//         },
//         {marca: 'Ford', modelo: 'Mustang', ano: 1967}
//     ]
// }

////mostre para chegar no modelo F40
// console.log(concessionaria.veiculos[1].modelo)

////mostrar somente a marca de cada veículo a cada iteração
// for (let veiculo of concessionaria.veiculos) {
//     console.log(veiculo.marca)
// }

// // Uma calculadora realiza operações de soma e subtração
// //a soma deve ser feita com uma função regular, ou seja, usando function
// //a subtração deve ser feita com uma arrow function sem return
// const calculadora = {
//     soma: function (a, b){
//         return a + b
//     },
//     subtracao: (a, b) => a - b
// }
// console.log(calculadora.soma(2, 3))
// console.log(calculadora.subtracao(3, 2))

////////////////////////////////////////////////////////////////////////

////PROCESSAMENTO SÍNCRONO (BLOQUEANTE) E ASSÍNCRONO (NÃO BLOQUEANTE)

//// I/O BOUND: operações de entrada e saída (leitura de arquivos, requisições HTTP, acesso a banco de dados)
////Exemplo de I/O Bound:
// function dobro(n){
//     return n * 2
// }
// const res = dobro(5)
// console.log(res)

////Exemplo de I/O Bound:

// const fs = require('fs')
// const exibirConteudo = (erro, conteudo) => {
//     if (erro) {
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(`Arquivo lido com sucesso: ${conteudo.toString()}`)
//         const dobro = Number(conteudo.toString()) * 2
//         //callback: função que define mas não chama
//         const finalizar = (erro) => {
//             console.log(`${erro ? 'Deu erro ' + erro : 'Dobro armazenado com sucesso. C'}`) 
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log("A")
//     }
// }
// fs.readFile('arquivo.txt', exibirConteudo) //assíncrono I/O Bound
// console.log("B")

////Simulação de promisses
// function calculoDemorado(n){
//     //Construir um objeto do tipo Promise, entregando para o construtor a função que representa a computação demorada
//     const p = new Promise((resolve, reject) => {
//         let acumulador = 0;
//         for (let i = 1; i < n; i++) 
//             acumulador += i
//         resolve(acumulador)
//     })
//     return p
// }

// const promiseResultante = calculoDemorado(10)
// promiseResultante.then(res => {
//     console.log(`Deu certo: ${res}`)
// })

//// AULA 04 (26/03/2025) - PROMISES E ASYNC/AWAIT EM JAVASCRIPT////

////*PROMISES

// function calculodemorado(n){
//     const p =  new Promise((resolve, reject) => {
//         let ac =  0
//         for (let i = 1; i <= n; i++) ac += i
//         resolve(ac)
//     })
//     return p
// }

// const minhaPromise = calculodemorado(10)
// minhaPromise.then((res) => {
//     console.log(`Sucesso: ${res}`)
// })

////*ATIVIDADES

//Minha solução:
// function calculoRapidinho(n){
//     //verificar se n é negativo sem if nem switch case
//     return n < 0 ? Promise.reject('Use apenas números positivos!') : Promise.resolve((n / 2) * (n + 1))
// }

//Solução do Bossini:
// function calculoRapidinho(n){
//     return n < 0 ? 
//         Promise.reject('Use apenas números positivos!') : 
//         Promise.resolve((n / 2) * (n + 1))}

// calculoRapidinho(10).then(abc => {
//     console.log(`Sucesso: ${abc}`)
// })
// .catch(erro => (`Erro: ${erro}`))

//Reescreva a função calculoRapidinho sem resolve e reject
// function calculoRapidinho(n) {
//     if (n < 0) {
//         return Promise.reject('Só números positivos, Javascripto!');
//     }
//     return Promise.resolve((n / 2) * (n + 1));
// }

// calculoRapidinho(10).then(abc => {
//         console.log(`Sucesso: ${abc}`)
//     })
//     .catch(erro => (`Erro: ${erro}`))


////*AULA 05 (02/04/2025) - ASYNC/AWAIT EM JAVASCRIPT////
//*ASYNC/AWAIT

// async function hello(nome) {
//     return `Oi, ${nome}!`
// }

// function hello(nome) {
//     return new Promise((resolve, reject) => {
//         resolve(`Oi, ${nome}!`)
//     })
// }

// const res = hello('Genésio')
// res.then(saudacao => console.log(`${saudacao}`))

// const res = hello('Genésio')
// console.log(res)


////Fatorial do Bossini
// const fatorial = (n) => {
//     //n! = n * (n - 1) * (n - 2) * ... * 1
//     let f = 1
//     for (let i = n; i > 1; i--) {
//         f *= i
//     }
// }

const fatorial = (n) => {
	if (n < 0) return Promise.reject('Somente valores positivos');
	let f = 1;
	for (let i = 2; i <= n; i++) {
		f *= i;
	}
	return Promise.resolve(f);
};

// Tratar com then/catch
function chamadaComThenCatch() {
	fatorial(5)
		.then((res) => console.log(`Funcionou: ${res}`))
		.catch((err) => console.log(`Erro: ${err}`));

	fatorial(-1)
		.then((res) => console.log(`Funcionou: ${res}`))
		.catch((err) => console.log(`Erro: ${err}`));
}

chamadaComThenCatch();
//tratar com async/await
// async function chamadaComAsyncAwait(){}

const chamadaComAsyncAwait = async () => {
    try {
        const res = await fatorial(5);
        console.log(f1)
    }
    catch (err) {
        console.log(`Erro: ${err}`);
    }
    try {
        const f2 = await fatorial(-1);  
        console.log(`${f2}`);
    }
    catch (err) {
        console.log(`Erro: ${err}`);
    }
}
chamadaComAsyncAwait();