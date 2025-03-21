/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

// ENUNCIADO: PEGAR TODOS OS E-MAILS.

const texto = `
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
  - fulano+de+tal@escola.ninja.br
`;

// Correto parcialmente 1
// explicação: \S+@\w+\.\w{2,6}(\.\w{2})?
//    \S+         = pegar qualquer palavras/caracteres diferentes de espaço (pegará a parte inteira antes do @ do e-mail)
//    @           = pega o arroba literalmente
//    \w+         = pega qualquer palavra
//    \.          = pega o ponto literalmente
//    \w{2,6}     = pega qualquer palavra de 2 até 6 caracteres (ex. com, info, ninja)
//    (\.\w{2})?  = pegar um grupo final com: ponto literal+2 caracteres+opcional por causa da interrogação no final do (grupo)?
//
// SAÍDA:
// [
//   'fulano@cod3r.com.br',
//   'xico@gmail.com',
//   'joao@empresa.info.br',
//   'maria_silva@registro.br',
//   'rafa.sampaio@yahoo.com',
//   'fulano+de+tal@escola.ninja.br'
// ]
console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));