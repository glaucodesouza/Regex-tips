/*
When you want using:
  Using quantifier +

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!`;
let text2 = `There is a big fog in NYC`;

// + -> one or more characteres
const regex = /fogo+/gi; // o+ one or more o's

console.log(text1.match(regex));
/*results
[ 'fogo', 'FOGO' ]
*/
console.log(text2.match(regex));
/*results
null
*/

const text3 = `The numbers: 0123456789.`;
console.log(text3.match(/[0-9]/g)); //this, gets all but separated
console.log(text3.match(/[0-9]+/g)); //this find first and get all in sequence
console.log(text3.match(/\d/g)); //this, gets all but separated
console.log(text3.match(/\d+/g)); //this find first and get all in sequence
/*results
[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
[ '0123456789' ]
[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
[ '0123456789' ]
*/
