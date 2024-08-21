/*
Use of [] for set (grupos)
for matching intervals.

Use Code Runner extension to test your code in vs code
*/
const texto = ".$+*?-";

/** important: 
inside sets, the . character is not a wildcard 
it returns its own literal . value
*/
console.log(texto.match(/[+.?*$]/g));
/*results
[ '.', '$', '+', '*', '?' ]
*/

/**
if we want the literal insed the set [] 
and one more character represented by the . outside the set
conslusion:
[.] point inside a set, represents its own literal valur for .
[]. point outside a set, represents whatever character found in its place
*/
console.log(texto.match(/[+.?*$]./g));
/*results
[ '.$', '+*', '?-' ]
*/

/**
metacharacters inside sets e.g[?] represents the own metacharacter itself
the hifen represents a range inside the compared text
*/
console.log(texto.match(/[$-?]/g));
/*results
[ '.', '$', '+', '*', '?', '-' ]
*/

/**
It is not a ranhe, if using [\-]
*/
console.log(texto.match(/[$\-?]/g));
/*results
[ '$', '?', '-' ]
*/

/**
It is not a range, example [-?]
*/
console.log(texto.match(/[-?]/g));
/*results
[ '?', '-' ]
*/

/**
What characters need escape using \
are these: - [ ] ^ 
*/
console.log(texto.match(/[\-]/g));
/*results
[ '-' ]
*/
