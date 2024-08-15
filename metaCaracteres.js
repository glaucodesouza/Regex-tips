// . ? * + - ^ $  | [ ] { } ( ) \ : \

//split no caracter ponto,
//retornando 2 arrays
const texto = "1,2,3,4,5,6,a.b c!d?e";
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

//split por meta caracteres
// split por:
//,
//.
//?
//!
//espaco
const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));
// vai gerar este array o split:
//[
//  '1', '2', '3', '4',
//  '5', '6', 'a', 'b',
//  'c', 'd', 'e'
//]
