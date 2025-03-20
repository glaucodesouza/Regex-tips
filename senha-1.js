/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

// ENUNCIADO: PEGAR SOMENTE AS SENHAS VÁLIDAS DESTA LISTA ABAIXO.
// A SENHA É VÁLIDA SE:
//  CONTÉM PELO MENOS UMA LETRA MAIÚSCULA
//  CONTÉM PELO MENOS UMA LETRA MINÚSCULA
//  CONTÉM PELO MENOS UM NÚMERO
//  CONTÉM PELO MENOS UM CARACTERE ESPECIAL


const texto = `
123456
Cod3r
QUASEE123!
#0pA1?
#essaSenhaEGrande1234
Foi123!
`;

// Correto parcialmente 1
// explicação: ^.{6,20}$
//    ^       = início do texto
//    .{6,20} = que tenha qualquer caracter, de 6 até 20 caracteres.
//    $       = fim do texto
// SAÍDA:
// [ '123456', 'QUASEE123!', '#0pA1?', 'Foi123!' ]
console.log(texto.match(/^.{6,20}$/gm)); // qualquer caracter de tamanho 6 até 20

// Correto parcialmente 2
// explicação: ^(?=.*[A-Z]).{6,20}$
//    ^           = início do texto
//    (?=.*[A-Z]) = Positive look ahead, p/ saber antecipadamente se tem letras maiúsculas de A até Z
//    .{6,20}     = E, que tenha qualquer caracter, de 6 até 20 caracteres.
//    $           = fim do texto
// SAÍDA:
// [ 'QUASEE123!', '#0pA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)); // tem maiúscula + outros caracteres + de tamanho 6 até 20

// Correto parcialmente 3
// explicação: ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$
//    ^                 = início do texto
//    (?=.*[A-Z])       = Positive look ahead, p/ saber antecipadamente se tem letras maiúsculas de A até Z
//    (?=.*[a-z])       = Positive look ahead, p/ saber antecipadamente se tem letras minúsculas de A até Z
//    (?=.*\d)          = Positive look ahead, p/ saber antecipadamente se tem quaisquer dígitos numéricos
//    (?=.*[@#$%!^&*])  = Positive look ahead, p/ saber antecipadamente se tem caracteres especiais
//    .{6,20}           = E, que tenha qualquer caracter, de 6 até 20 caracteres.
//    $                 = fim do texto
// SAÍDA:
// [ '#0pA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm)); // tem maísculas+tem minúsculas+tem dígitos numéricos+tem caracteres especiais