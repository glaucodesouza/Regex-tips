/*
When you want using:
  Challengers, Using quantifier for telephones

Use Extension Code Runner
to test your code in VS Code terminal
*/

const text = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (85) 99988-7766
    - (21)3261-8899
`;

console.log(text.match(/\(\d{2}\)\s?\d{4,5}-\d{4}|\s?\d{4,5}-\d{4}/gm));
/*results
[
'(11) 98756-1212', 
'98765-4321', 
'(85) 99988-7766', 
'(21)3261-8899'
]
*/
