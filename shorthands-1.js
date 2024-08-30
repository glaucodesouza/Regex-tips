/*
When you want using:
  SHORTHANDS  

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text = `1,2,3,4,5,6,a.b c!d?e 
-f_g`;

console.log(text.match(/\d/g)); // numbers [0-9]
/*results
[ '1', '2', '3', '4', '5', '6' ]
*/

console.log(text.match(/\D/g)); // not numbers [^0-9]
/*results
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  ' ', '-', 'f', '_', 'g'
]
*/

console.log(text.match(/\w/g)); //characters [a-zA-Z0-9_]
/*results
[
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e', 'f',
  '_', 'g'
]
*/

console.log(text.match(/\W/g)); //not characters [^a-zA-Z0-9_]
/*results
[
  ',', ',', ',', ',',
  ',', ',', '.', ' ',
  '!', '?', ' ', '\n',
  '-'
]
*/

console.log(text.match(/\s/g)); //space, [\t\n\r\f]
/*results
[ ' ', ' ', '\n' ]
*/

console.log(text.match(/\S/g)); //Not space, [^ \t\n\r\f]
/*results
[
  '1', ',', '2', ',', '3',
  ',', '4', ',', '5', ',',
  '6', ',', 'a', '.', 'b',
  'c', '!', 'd', '?', 'e',
  '-', 'f', '_', 'g'
]
*/
