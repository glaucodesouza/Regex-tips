/*
Using | PIPE (or) for alternative matches

Use Code Runner extension to test your code in vs code
*/
const texto = "você precisa responder sim, não ou não sei";

console.log(texto.match(/sim|não|sei/g));
//results: [ 'sim', 'não', 'não', 'sei' ]

console.log(texto.match(/sim|não sei|não/g));
/*results:
[ 'sim', 'não', 'não', 'sei' ]
[ 'sim', 'não', 'não sei' ]
*/
