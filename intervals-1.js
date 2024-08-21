/*
Use of [] for set (grupos)
for matching intervals.

Use Code Runner extension to test your code in vs code
*/
const texto = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(texto.match(/[a-z]/g));
/*results
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log(texto.match(/[b-d]/g));
/*results
[ 'b', 'c', 'd' ]
*/

console.log(texto.match(/[2-4]/g));
/*results
[ '2', '3', '4' ]
*/

console.log(texto.match(/[A-Z1-3]/gi)); //global, insensitive
/*results
[
  '1', '2', '3',
  'a', 'b', 'c',
  'd', 'e', 'f'
]
*/
console.log(texto.match(/[]/gi)); //global, insensitive
