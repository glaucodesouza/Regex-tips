/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

// ENUNCIADO: PEGAR SOMENTE OS NÚMEROS DE 0 A 255 DESTA LISTA.

const texto = `0 1 10 192 199 201 249 255 256 312 1010 1512`;

// Correto
// explicação:
// \b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/
// \b = borda esquerda
// ( = início do grupo)
// \d{1,2} = pegar quaisquer números de 1 ou 2 dígitos de 0 até 99
// | = ou
// 1\d{2} = Pegar os números de 100 até 199.
//    ==> fica então assim, pega qualquer número iniciado por 1 + qualquer número de 0 a 99. (ex. 159)
//    ==> 1 = pegar o número 1
//    ==> \d{2} = pegar qualquer númedo de 10 a 99
// | = ou
// 2[0-4]\d = Pegar os números de 200 até 249
//    ==> 2 = pegar número 2
//    ==> [0-4] = pegar qualquer número de 0 a 4
//    ==> \d = pegar qualquer número 0 a 9.
// | = ou
// 25[0-5] = Pegar qualquer número de 250 até 255
//    ==> 25 = Para pegar estes dois primeiros dígitos, Pegar número 25 fixo
//    ==> [0-5] = Para pegar este terceiro dígito, Pegar qualquer número de 0 a 5
// ) = fim do grupo
// \b = borda da direita 
// SAÍDA:
// [
//   '0',   '1',
//   '10',  '192',
//   '199', '201',
//   '249', '255'
// ]
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g));