/*
Use of [] for set (grupos)
for matching intervals.

Use Code Runner extension to test your code in vs code
*/
const texto = "ABC [abc] a-c 1234";

/** important: 
inside sets, the . character is not a wildcard 
it returns its own literal . value
*/
console.log(texto.match(/[a-c]/g)); //definie um range
/*results
[ 'a', 'b', 'c', 'a', 'c' ]
a from texto [abc]
b from texto [abc]
c from texto [abc]
a from texto a-c
c from texto a-c
*/

/** important: 
 * if not using a set []
intervals are returned only if you use inside a set []

So, in this bellow case, with no [], it returns just the literal a-c as seen bellow:
*/
console.log(texto.match(/a-c/g)); //nao define um range
/*results
[ 'a-c' ]
*/

/** WARNING:
 * BE CAREFULL with ranges.
 * this follows the ASCII table,
 * but ASCII table has symbols between A-Z and a-z
 * e.g.
 * ASCII table sequence of characters are as following:
 * A-Z,],[,-,_,a-z
 */
console.log(texto.match(/[A-z]/g));
/*results
[ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]
*/

/** WARNING:
 correct way of using ranges
 */
console.log(texto.match(/[A-Z]/g));
console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[a-zA-Z]/g));
/*results
[ 'A', 'B', 'C' ]
[ 'a', 'b', 'c', 'a', 'c' ]
*/
