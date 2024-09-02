/*
When you want using:
  using Quantifiers.,+,*,?
  for greedy or lazy

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text = `<div>Conteudo 01</div><div>Conteudo 02</div>`;

// quantifiers são gulosos (greedy)...
console.log("Testing greedy way (guloso) quantifier.....");
console.log(text.match(/<div>.+<\/div>/g));
console.log(text.match(/<div>.*<\/div>/g));
console.log(text.match(/<div>.{0,100}<\/div>/g));

// quantifiers não gulosos (lazy)...
console.log("\nUsing Lazy way (não guloso) quantifier ?.....");
console.log(text.match(/<div>.+?<\/div>/g));
console.log(text.match(/<div>.*?<\/div>/g));
console.log(text.match(/<div>.{0,100}?<\/div>/g));

/*
results:
Testing greedy way (guloso) quantifier.....
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

Using Lazy way (não guloso) quantifier ?.....
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/
