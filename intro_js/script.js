//*Aula 01 (12/02/2025) - Introdução ao JavaScript*//

//*FUNÇÕES*//
function hello() {
    console.log('Hello, World!')
}
//chamar a função
hello()

function hello(nome) {
    console.log('Hello, ' + nome + '!')
}
hello('Genésio')

//*VETORES*//
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

//*COMPARAÇÃO COM == e  ===//



//*COERÇÃO DE TIPOS*//
// const n1 = 2
// const n2 = '5'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

////////////////////////////////////////////////////////////////////////

//*DECLARANDO VARIÁVEIS*//
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

//*DECLARANDO CONSTANTES*//
// const idade = 27
// Se fosse em Java: String nome = 'Zé da Manga';
// const nome =  'Zé da Manga';
// console.log(nome)
// nome = 'Agnaldo';
// console.log(nome)
