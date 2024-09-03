/*
When you want using:
  Using quantifier

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!`;
let text2 = `There is a big fog in NYC`;

// ? -> zero ou um (opcional)
const regex = /fogo?/gi; // o? means o is optional

console.log(text1.match(regex));
/*results
[ 'fogo', 'FOGO' ]
*/
console.log(text2.match(regex));
/*results
[ 'fog']
*/
