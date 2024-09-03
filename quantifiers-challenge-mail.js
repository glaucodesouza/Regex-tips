/*
When you want using:
  Challengers, Using quantifier

Use Extension Code Runner
to test your code in VS Code terminal
*/

const text = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`;

console.log(text.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g));
console.log(text.match(/\w+@\w+\.\w{2,4}/g));
console.log(text.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log("\ncorrect...");
console.log(text.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

// in future learning...
console.log("\nalso correct, in future learning...");
console.log(text.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g));
/*
results
[
  'fulano@cod3r.com',
  'xico@gmail.com',
  'joao@empresa.info',
  'maria_silva@registro.br',
  'sampaio@yahoo.com'
]
[
  'fulano@cod3r.com',
  'xico@gmail.com',
  'joao@empresa.info',
  'maria_silva@registro.br',
  'sampaio@yahoo.com'
]
[
  'fulano@cod3r.com',
  'xico@gmail.com',
  'joao@empresa.info',
  'maria_silva@registro.br',
  'rafa.sampaio@yahoo.com'
]

correct...
[
  'fulano@cod3r.com.br',
  'xico@gmail.com',
  'joao@empresa.info.br',
  'maria_silva@registro.br',
  'rafa.sampaio@yahoo.com'
]

also correct, in future learning...
[
  'fulano@cod3r.com.br',
  'xico@gmail.com',
  'joao@empresa.info.br',
  'maria_silva@registro.br',
  'rafa.sampaio@yahoo.com'
]
*/
