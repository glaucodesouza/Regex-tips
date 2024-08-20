/*
Use of [] for set (grupos)
for example [0,2,4,6] is a set of even numbers (conuunto de numeros pares).

Use Code Runner extension to test your code in vs code
*/
const texto = "1,2,3,4,5,6,a.b c!d?e[f";

console.log("test 1");
const regexParesWithSet = /[02468]/g; // set = use of []
console.log(texto.match(regexParesWithSet));
/**result
[ '2', '4', '6' ]
*/

console.log("test 2, no set of even numbers");
console.log("(sem conjunto de caracteres pares)");
const regexParesWithNoSet = /02468/g;
console.log(texto.match(regexParesWithNoSet));
/**result
null --> because does not exist the literal 02468
*/

console.log("test 3, the order of chacacters does not matter... ");
console.log("...if using inside [] ");
const regexParesWithSet2NotInSequencedOrder = /[80246]/g;
console.log(texto.match(regexParesWithSet2NotInSequencedOrder));
/**result
[ '2', '4', '6' ]
*/

console.log("test 4 ");
const texto2 = "João não vai passear na boto";
const regexComESemAcento = /n[aã]./g;
console.log(texto2.match(regexComESemAcento));
/**results
[ 'não', 'na ' ]
*/
