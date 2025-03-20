/*
When you want using:
  Negate a set (conjunto)

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text = `1,2,3,4,5,6,a.b c!d?e[f`;

console.log(text.match(/\D/g)); // Negate numbers [^0-9]
/*results
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  '[', 'f'
]
*/

console.log(text.match(/[^0-9]/g)); // Negate numbers [^0-9]
/*results, same result as above.
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  '[', 'f'
]
*/

console.log(text.match(/[^\d!\?\[\s,\.]/g)); // Negates numbers, !, ?, [, space and .
/*
explanation: it is simply the same as \d
^ = Negates
\d = numbers
! = exclamation
\? = interrogation
\[ = colchete
\s = space, enter, linefeed
, = comma
\. = point
 numbers, !, ?, [, space and .

results:
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log(text.match(/[^\d]/g)); // Negate digits
/*
results:
[
  ',', ',', ',', ',', ',',
  ',', 'a', '.', 'b', ' ',
  'c', '!', 'd', '?', 'e',
  '[', 'f'
]
*/

let text2 = `1: !"#$%&\'()*+,-./ 2: :;<=>?@`; //this text2 is followinf ascii table
console.log(text2.match(/[^!-/:-@\s]/g)); // Negate, interval 1 of ascii table (!-/), interval 2 of ascii table (:-@), spaces
/*
results:
[ '1', '2' ]
*/
