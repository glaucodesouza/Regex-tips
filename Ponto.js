// . e um coringa que substitui qualquer caracter

const texto = "1,2,3,4,5,6,7,8,9,0";

console.log(texto.match(/1.2/g));
//resultado= ['1,2']

console.log(texto.match(/1..2/g));
//cada . representa 1 apenas caractere
// resultado = null Pois nao existe 1 e 2 entre dois caracteres.

console.log(texto.match(/1..,/g));
//resultado: ['1,2,']
// Pois :
// 1 representa o 1
//. representa a ,
//. representa o 2
//, representa a , apos o 2

const notas = "8.3,7.1,8.8,10.0";
console.log(notas.match(/8../g));
//resultado? [ '8.3', '8.8' ]
//Pois no resultado: [ '8.3']
// o 8 localiza o 8
// o . locliza o . literal
// o . localiza o 3
//
//e Pois no resultado: [ '8.8']
// o 8 localiza o 8
// o . locliza o . literal
// o . localiza o 8

console.log(notas.match(/.\../g));
//resultado: [ '8.3', '7.1', '8.8', '0.0' ]
//o 10.0 nao localizou porque tem dois caracteres 10 e mais  o .0
//MAIS A FRENTE VEREM<OS UMA FORMA DE PEGAR O 10.0 TAMBEM........
