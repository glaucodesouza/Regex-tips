/*
Use of . to find all characters in a string
obs.: . does not find \n

Use Code Runner extension to test your code in vs code
*/

console.log("test 1");
const texto = "Bom\tdia";

console.log(texto.match(/.../gi));
/** results
[ 'Bom', '\tdi' ]
*/

console.log("test 2");
const texto2 = "Bom\ndia";
console.log(texto2.match(/..../gi)); // o ponto nao engloba o \n
/** results
null --> does not work here because texto2 only have words containing 3 caracters
*/
